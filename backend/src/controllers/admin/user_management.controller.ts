import {
  District,
  NotificationType,
  User,
} from "../../generated/prisma/browser";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { generateOTP } from "../../utils/otp_generator";
import makeAdminLog from "../../utils/makeAdminLog";
import makeNotification from "../../utils/makeNotification";

export const createUser = async (req: Request, res: Response) => {
  const {
    name,
    email,
    phoneNumber,
    nationalId,
    password,
    role,
    issueCountry,

    //address info
    address,
    country,
    city,
    province,
    district,
    sector,
    cell,
  } = req.body;

  if (
    !name ||
    !nationalId ||
    !password ||
    !role ||
    !address ||
    !issueCountry ||
    !country ||
    !city ||
    !province ||
    !district ||
    !sector ||
    !cell
  ) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
    return;
  }
  if (!email && !phoneNumber) {
    res
      .status(400)
      .json({ success: false, message: "Email or phone number is required" });
    return;
  }
  if (issueCountry.toLowerCase() === "rwanda" && !/^\d{16}$/.test(nationalId)) {
    res.status(400).json({
      success: false,
      message: "Invalid National ID format for Rwanda",
    });
    return;
  }

  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    )
  ) {
    res.status(400).json({
      success: false,
      message:
        "Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters",
    });
    return;
  }

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ email }, { nationalId }, { phoneNumber }] },
    select: {
      nationalId: true,
      banned: true,
      banReason: true,
      banExpires: true,
      email: true,
      phoneNumber: true,
    },
  });

  if (existingUser) {
    // banned user
    if (existingUser.banned && new Date() < (existingUser.banExpires ?? 0)) {
      res.status(403).json({
        success: false,
        message: `User is banned until ${existingUser.banExpires}. Reason: ${existingUser.banReason}`,
      });
      return;
    }
    // validate duplicate phone number
    if (existingUser.phoneNumber === phoneNumber) {
      res.status(400).json({
        success: false,
        message: "Phone number is already associated with another account",
      });
      return;
    }
    //validate duplicate email
    if (existingUser.email === email) {
      res.status(400).json({
        success: false,
        message: "Email is already associated with another account",
      });
      return;
    }
    // validate duplicate national ID
    if (existingUser.nationalId === nationalId) {
      res.status(400).json({
        success: false,
        message: "User with this national ID already exists",
      });
      return;
    }

    res.status(400).json({
      success: false,
      message: "User with these credentials already exists",
    });
    return;
  }

  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email,
  );
  if (email && !validateEmail) {
    res.status(400).json({ success: false, message: "Invalid email format" });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email,
        phoneNumber,
        nationalId,
        password: hashedPassword,
        role,
        issueCountry,
        address,
        country,
        city,
        province,
        district: district.trim().toUpperCase() as District, // ensure district is stored in uppercase for consistency
        sector,
        cell,
      },
    });

    // make admin log for creating user with fire and forget method for better performance
    // which allows us to run task in background without blocking the main thread and delaying the response to the client,
    //  we can use this approach for tasks that are not critical to be completed before sending the response, such as logging, sending notifications, etc...
    makeAdminLog({
      adminName: req.userInfo?.name || "Unknown Admin",
      adminEmail: req.userInfo?.email || "Unknown Admin Email",
      action: `Created ${newUser.name} ${newUser.role} with ID ${newUser.id}`,
      targetType: newUser.role,
      targetId: newUser.id,
    }).catch((error) => {
      console.error("Error creating admin log:", error);
      throw new Error("Error creating admin log at create user: " + error);
    });

    //send notification to the user about their account creation with fire and forget method for better performance
    makeNotification(
      {
        type: "ACCOUNT_CREATED" as NotificationType,
        receiverId: newUser.id,
        senderId: req.userInfo?.email || "System",
        title: "Account Created",
        message: `Hello ${newUser.name}, your account has been created successfully. You can now start to use our services.`,
      },
      newUser.email,
    ).catch((error) => {
      console.error("Error creating notification:", error);
      throw new Error("Error creating notification at create user: " + error);
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        userId: newUser.id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
    return;
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const take = 15;
  const skip = (page - 1) * take;

  const where: Record<string, any> = {};

  if (req.query.role) where.role = req.query.role;
  if (req.query.banned) where.banned = req.query.banned === "true";
  if (req.query.province) where.province = req.query.province;
  if (req.query.district) where.district = req.query.district;
  if (req.query.sector) where.sector = req.query.sector;
  if (req.query.cell) where.cell = req.query.cell;

  try {
    const users = await prisma.user.findMany({
      where: where,
      skip: skip,
      take: take,
      select: {
        id: true, // for identifying the user to update, delete, ban, unban etc...
        name: true,
        email: true,
        phoneNumber: true,
        role: true,
        banned: true,
        createdAt: true,
      },
    });
    if (users.length === 0) {
      res
        .status(404)
        .json({ success: false, data: [], message: "No users found" });
      return;
    }
    const totalUsers = await prisma.user.count({ where });
    res.status(200).json({
      success: true,
      data: users,
      pagination: {
        total: totalUsers,
        page,
        pages: Math.ceil(totalUsers / take),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const getUserDetailsById = async (req: Request, res: Response) => {
  const userId = req.params.userId as string; // from url params
  if (!userId) {
    res.status(400).json({ success: false, message: "User ID is required" });
    return;
  }
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      omit: {
        password: true,
        otp: true,
        otp_expiry: true,
      },
      include: {
        // properties they own as landlord
        properties: {
          select: {
            id: true,
            propety_number: true,
            address: true,
            status: true,
            monthlyRent: true,
            property_type: true,
          },
        },
        // leases they have as renter
        renterLeases: {
          select: {
            id: true,
            status: true,
            startDate: true,
            endDate: true,
            property: {
              select: {
                address: true,
                propety_number: true,
              },
            },
          },
        },
        // payment history
        payments: {
          select: {
            id: true,
            amount: true,
            paymentType: true,
            status: true,
            createdAt: true,
          },
          orderBy: { createdAt: "desc" },
          take: 10, // last 10 payments only
        },
        // blacklist record if any
        renterBlacklists: {
          select: {
            status: true,
            reason: true,
            createdAt: true,
          },
        },
        // feedback others wrote about this user
        feedbacksReceived: {
          select: {
            comments: true,
            createdAt: true,
            author: {
              select: { name: true },
            },
          },
          orderBy: { createdAt: "desc" },
          take: 5,
        },
      },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: "Error: " + error,
    });
  }
};
export const banUser = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  const bannReason = req.body.reason as string;
  const banDuration = req.body.duration as number; //in days, for example if the admin wants to ban the user for 7 days, they will send 7 in the request body
  if (!userId) {
    res.status(400).json({ success: false, message: "User ID is required" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, banned: true },
    });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    if (user.banned) {
      res
        .status(400)
        .json({ success: false, message: "User is already banned" });
      return;
    }
    const banExpires = banDuration
      ? new Date(banDuration) //date will come from date-time picker in the frontend, for example if the admin selects to ban the user until 2024-07-01, the frontend will send that date in the request body and we will set it as the ban expiry date, if no duration is provided, we can set a default ban duration of 30 days for example
      : null; //use is banned indefinitely until the admin decides to unban them

    const bannedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        banned: true,
        banReason: bannReason ? bannReason : "No reason provided",
        banExpires,
      },
    });
    //TODO:store admin logs for banning user
    //TODO:notify the user about their ban via email
    res.status(200).json({
      success: true,
      message: `User ${bannedUser.name} has been banned successfully`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: "Error: " + error,
    });
  }
};
export const unbanUser = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  if (!userId) {
    res.status(400).json({ success: false, message: "User ID is required" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, banned: true },
    });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    if (!user.banned) {
      res.status(400).json({ success: false, message: "User is not banned" });
      return;
    }
    await prisma.user.update({
      where: { id: userId },
      data: {
        banned: false,
        banReason: null,
        banExpires: null,
      },
    });
    //TODO:store admin logs for unbanning user
    //TODO:notify the user about their unban via email
    res.status(200).json({
      success: true,
      message: `User has been unbanned successfully`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: "Error: " + error,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  const {
    name,
    email,
    phoneNumber,
    role,
    nationalId,
    issueCountry,
    country,
    city,
    province,
    district,
    sector,
    cell,
    address,
  } = req.body;

  if (!userId) {
    res.status(400).json({ success: false, message: "User ID is required" });
    return;
  }
  if (email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email)) {
    res.status(400).json({ success: false, message: "Invalid email format" });
    return;
  }
  try {
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email,
        phoneNumber,
        role,
        nationalId,
        issueCountry,
        country,
        city,
        province,
        district,
        sector,
        cell,
        address,
      },
    });
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: "Error: " + error,
    });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  if (!userId) {
    res.status(400).json({ success: false, message: "User ID is required" });
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        role: true,
        properties: {
          select: {
            status: true,
          },
        },
        renterLeases: {
          select: {
            status: true,
          },
        },
      },
    });
    if (!existingUser) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    if (existingUser.role === "ADMIN") {
      res.status(400).json({
        success: false,
        message: "High Priviledge user can't be deleted",
      });
      return;
    }

    if (
      existingUser.role === "LANDLORD" &&
      (existingUser.properties.some((state) => state.status === "OCCUPIED") ||
        existingUser.renterLeases.some((lease) => lease.status === "ACTIVE"))
    ) {
      res.status(400).json({
        success: false,
        message:
          "Landlord with active properties or leases can't be deleted, consider deactivating the user instead",
      });
      return;
    }

    if (
      existingUser.role === "RENTER" &&
      existingUser.renterLeases.some((lease) => lease.status === "ACTIVE")
    ) {
      res.status(400).json({
        success: false,
        message:
          "Renter with active leases can't be deleted, consider deactivating the user instead",
      });
      return;
    }

    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    //make log
    makeAdminLog({
      adminName: req.userInfo?.name || "Unknown Admin",
      adminEmail: req.userInfo?.email || "Unknown Admin Email",
      action: `Deleted ${deletedUser.name} ${deletedUser.role} with ID ${deletedUser.id}`,
      targetType: deletedUser.role,
      targetId: deletedUser.id,
    }).catch((error) => {
      console.error("Error creating admin log:", error);
    });

    //send notification to the user about their account creation with fire and forget method for better performance
    makeNotification(
      {
        type: "ACCOUNT_DELETED" as NotificationType,
        receiverId: deletedUser.id,
        senderId: req.userInfo?.email || "System",
        title: "Account Deleted",
        message: `Hello ${deletedUser.name}, your account has been deleted.`,
      },
      deletedUser.email,
    ).catch((error) => {
      console.error("Error creating notification:", error);
    });

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: "Error: " + error,
    });
  }
};

export const getUserStatistics = async (req: Request, res: Response) => {
  try {
    const now = new Date();

    // Date calculations
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const startOfMonth = new Date(now);
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const startOfLastMonth = new Date(now);
    startOfLastMonth.setMonth(now.getMonth() - 1);
    startOfLastMonth.setDate(1);
    startOfLastMonth.setHours(0, 0, 0, 0);

    const endOfLastMonth = new Date(now);
    endOfLastMonth.setDate(0);
    endOfLastMonth.setHours(23, 59, 59, 999);

    const thirtyDaysAgo = new Date(now);
    thirtyDaysAgo.setDate(now.getDate() - 30);

    // Execute all queries in parallel
    /* :TODO 
    - total properties
    -available properties
    -avialable properties
    -monthly reveneu
    -active landlords
    -active renters
    -active agents
    -move out requests
    -blacklist reports
    -
      
*/
    const [
      totalUsers,
      activeUsers,
      newUsersThisMonth,
      newUsersThisWeek,
      bannedUsers,
      usersByRole,
      lastMonthUsers,
      thisMonthUsers,
    ] = await Promise.all([
      prisma.user.count(),

      // Active users - logged in last 30 days, not banned
      prisma.user.count({
        where: {
          lastLogin: { gte: thirtyDaysAgo }, // Check your field name
          banned: false,
        },
      }),

      prisma.user.count({
        where: { createdAt: { gte: startOfMonth } },
      }),

      prisma.user.count({
        where: { createdAt: { gte: startOfWeek } },
      }),

      prisma.user.count({
        where: { banned: true },
      }),

      prisma.user.groupBy({
        by: ["role"],
        _count: { role: true },
      }),

      prisma.user.count({
        where: {
          createdAt: {
            gte: startOfLastMonth,
            lte: endOfLastMonth,
          },
        },
      }),

      prisma.user.count({
        where: { createdAt: { gte: startOfMonth } },
      }),
    ]);

    // Calculate growth percentage (fixed)
    let growthPercentage: number;
    if (lastMonthUsers === 0) {
      growthPercentage = thisMonthUsers > 0 ? 100 : 0;
    } else {
      growthPercentage =
        ((thisMonthUsers - lastMonthUsers) / lastMonthUsers) * 100;
    }

    // Get registration trend for last 7 days
    const registrationTrend = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(now.getDate() - i);
      date.setHours(0, 0, 0, 0);

      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + 1);

      const count = await prisma.user.count({
        where: {
          createdAt: {
            gte: date,
            lt: nextDate,
          },
        },
      });

      registrationTrend.push({
        date: date.toISOString().split("T")[0],
        count,
      });
    }

    // Format role breakdown
    const byRole: Record<string, number> = {};
    usersByRole.forEach((item) => {
      byRole[item.role] = item._count.role;
    });

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        activeUsers,
        newUsersThisMonth,
        newUsersThisWeek,
        bannedUsers,
        byRole,
        userGrowth: Number(growthPercentage.toFixed(2)),
        registrationTrend,
      },
    });
  } catch (error) {
    console.error("Error getting user stats:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deactivateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  const { reason } = req.body as { reason: string };
  if (!userId) {
    res.status(400).json({ success: false, message: "User ID is required" });
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        isActive: true,
        role: true,
        name: true,
      },
    });
    if (!existingUser) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    if (!existingUser.isActive) {
      res.status(400).json({
        success: false,
        message: "User was already Deactivated",
      });
      return;
    }
    if (existingUser.role === "ADMIN") {
      res.status(400).json({
        success: false,
        message: "High Priviledge user can't be deleted",
      });
      return;
    }

    const affectedUsers = await prisma.user.findMany({
      where: {
        renterLeases: {
          some: {
            landlordId: userId,
            status: "ACTIVE",
          },
        },
      },
      select: {
        id: true,
        email: true,
      },
    });

    await Promise.all([
      //update user record to set deactivation fields
      prisma.user.update({
        where: { id: userId },
        data: {
          deactivatedAt: new Date(),
          deactivatedBy: `ADMIN: ${req.userInfo?.name}`,
          deactivationReason: reason || "No reason provided",
          isActive: false,
          banned: false,
        },
      }),
      //set all properties owned by the user to INACTIVE so that they are not visible to renters and can't be leased until the admin decides to reactivate the user and their properties
      prisma.property.updateMany({
        where: { landlordId: userId },
        data: {
          isActive: false,
        },
      }),
      //set all leases where the user is a landlord to INACTIVE so that they are not active until the admin decides to reactivate the user and their leases
      prisma.lease.updateMany({
        where: { landlordId: userId },
        data: {
          isActive: false,
          status: "INACTIVE",
        },
      }),
      //store admin log for deactivating user, we can create a log entry with the admin's name, email, action (deactivated user), details (reason for deactivation) and the target user ID
      makeAdminLog({
        adminName: req.userInfo?.name || "Unknown Admin",
        adminEmail: req.userInfo?.email || "Unknown Admin Email",
        action: `Deactivated ${existingUser?.name} ${existingUser.role} with ID ${userId}`,
        details: `Reason: ${reason || "No reason provided"}`,
        targetType: "USER",
        targetId: userId,
      }),
    ]);

    Promise.all([
      //send notifications to affected users about the deactivation of the landlord and the reason for that, we can use the getAffectedUsers array to get the email addresses of the affected users and send them notifications via email or in-app notifications
      affectedUsers.map((user) => {
        makeNotification(
          {
            type: "ACCOUNT_DEACTIVATED",
            senderId: req.userInfo?.email || "Unknown Admin Email",
            receiverId: user.id,
            title: "Account Deactivation Notice",
            message: `Dear User, we regret to inform you that the landlord associated with your lease has been deactivated. This action was taken for the following reason: ${reason || "No reason provided"}. During this period, you may experience limited access to certain features related to this landlord. We apologize for any inconvenience caused and appreciate your understanding. If you have any questions or need further assistance, please contact our support team.`,
          },
          user.email!,
        ).catch((error) => {
          console.error(
            `Error sending notification to user ${user.id} about landlord deactivation:`,
            error,
          );
        });
      }),
    ]);
    res.status(200).json({
      success: true,
      message: "User deactivated successfully",
    });
  } catch (error) {
    console.log("Error at Deactivating user: " + error);
    res.status(500).json({
      success: false,
      message: "Deactivating user failed",
    });
  }
};
