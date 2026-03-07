import { User } from "./../../generated/prisma/browser";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createUser = async (req: Request, res: Response) => {
  const {
    name,
    email,
    phoneNumber,
    nationalId,
    password,
    role,
    issueCountry,
    address,
  } = req.body;

  if (!name || !nationalId || !password || !role || !address || !issueCountry) {
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

  const existingUser: {
    nationalId: string;
    banned: boolean | null;
    banReason: string | null;
    banExpires: Date | null;
    email: string | null;
    phoneNumber: string | null;
  } | null = await prisma.user.findFirst({
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
      message: "User with this email, phone number or national ID already exists",
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
        name,
        email,
        phoneNumber,
        nationalId,
        password: hashedPassword,
        role,
        issueCountry,
        address,
      },
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        userId: newUser.id, //for knowing the real landlord to create properties for
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
  const limit = 15;
  const skip = (page - 1) * limit;

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
      skip,
      take: limit,
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
        pages: Math.ceil(totalUsers / limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
  }
};
export const getUserDetailsById = async (req: Request, res: Response) => {
  const userId = req.params.userId as string;
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
    await prisma.user.delete({
      where: { id: userId },
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
