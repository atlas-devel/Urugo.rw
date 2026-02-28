import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import prisma from "../utils/prisma";

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
    await prisma.user.create({
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
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
    return;
  }
};

//TODO: make unban user
