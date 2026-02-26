import type { Request, Response } from "express";
import prisma from "../utils/prisma";
import { auth } from "../utils/auth";

export const createAgent = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const {
      name,
      email,
      username,
      password,
      role,
      phoneNumber,
      nationalId,
      address,
    } = req.body;

    if (
      !name ||
      !email ||
      !username ||
      !password ||
      !role ||
      !phoneNumber ||
      !nationalId
    ) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new Error("Agent with this email already exist");
    }

    const newUser = await auth.api.createUser({
      body: {
        email,
        name,
        username,
        password,
        role: "AGENT",
        phoneNumber,
        nationalId,
        address,
      },
    });
  } catch (error) {
    console.error("Error creating agent:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
