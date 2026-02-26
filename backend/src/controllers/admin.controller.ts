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

      displayUsername,
      phoneNumber,
      nationalId,
      address,
    } = req.body;

    if (
      !name ||
      !email ||
      !username ||
      !displayUsername ||
      !phoneNumber ||
      !nationalId ||
      !address
    ) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const result = await auth.api.createUser({
      body: {
        email,
        password,
        role,
        name,
        data: { nationalId, address, username, phoneNumber },
      },
    });

    if (!result || !result.user) {
      res.status(400).json({ message: "Failed to create user" });
      return;
    }
    // const exisitingUser = await prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // });

    // if (exisitingUser) {
    //   res.status(400).json({ message: "User with this email already exists" });
    //   return;
    // }

    // const token=

    // res.status(201).json({
    //   message: "Agent created successfully",
    //   agent: {
    //     name,
    //     email,
    //     username,
    //     display,
    //     displayUsername,
    //     phoneNumber,
    //     nationalId,
    //     address,
    //   },
    // });
    // return;
  } catch (error) {
    res.status(500).json({
      message: "Error creating agent",
      error: error
    });
    return;
  }
};
