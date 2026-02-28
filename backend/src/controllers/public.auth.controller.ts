import type { Request, Response } from "express";
import { generateTempToken, generateTokens } from "../utils/jwt";
import prisma from "../utils/prisma";
import env from "../utils/env";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { generateOTP } from "../utils/otp_generator";
import type { LoginCredentials } from "../@types/types";
import { sendEmail } from "../utils/nodemailer";
import jwt from "jsonwebtoken";

const setCookies = (
  res: Response,
  refreshToken: string,
  accessToken: string,
) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "development" ? "lax" : "none",
    maxAge: 15 * 60 * 1000,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "development" ? "lax" : "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const login = async (
  req: Request<{}, {}, LoginCredentials, {}>,
  res: Response<{ success: boolean; message: string; error?: unknown }>,
): Promise<void> => {
  const { email, password, phoneNumber } = req.body;

  if ((!email && !phoneNumber) || !password) {
    res.status(404).json({ success: false, message: "Invalid Credentials" });
    return;
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phoneNumber }],
      },
    });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(404).json({ success: false, message: "Invalid Credentials" });
      return;
    }

    if (user.banned) {
      res.json({
        success: false,
        message: user.banReason || "your account is banned",
      });
      return;
    }
    if (
      (!user.emailVerified && user.role === "ADMIN") ||
      user.role === "AGENT"
    ) {
      res.status(400).json({
        success: false,
        message: "Please verify your email before logging in",
      });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({ id: user.id });

    const saveToken = await prisma.refreshToken.create({
      data: {
        hashedToken: crypto
          .createHash("sha256")
          .update(refreshToken)
          .digest("hex"),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        userId: user.id,
      },
    });

    setCookies(res, refreshToken, accessToken);

    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const logout = async (
  req: Request,
  res: Response<{ success: boolean; message: string }>,
): Promise<void> => {
  const refreshToken: string = req.cookies.refreshToken;

  if (refreshToken) {
    const hashedRefreshToken: string = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    try {
      await prisma.refreshToken.deleteMany({
        where: { hashedToken: hashedRefreshToken },
      });
    } catch (error) {
      console.error("Error at logout controller: ", error);
    }
  }

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "development" ? "lax" : "none",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "development" ? "lax" : "none",
  });
  res.status(200).json({ success: true, message: "Logout successful" });
};

export const sendResetPasswordOTP = async (
  req: Request<
    {},
    {},
    { email?: string; phoneNumber?: string; nationalId: string },
    {}
  >,
  res: Response<{ success: boolean; message: string }>,
): Promise<void> => {
  const { email, phoneNumber, nationalId } = req.body;
  if (!email && !phoneNumber) {
    res
      .status(400)
      .json({ success: false, message: "Email or phone Number is required" });
    return;
  }
  if (!nationalId) {
    res
      .status(400)
      .json({ success: false, message: "National ID is required" });
    return;
  }
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { phoneNumber }],
    },
  });
  if (!user) {
    res.status(404).json({ success: false, message: "User not found" });
    return;
  }
  if (user?.nationalId !== nationalId) {
    res.status(400).json({ success: false, message: "Invalid National ID" });
    return;
  }
  const otp = generateOTP();
  const newOtp = await prisma.user.update({
    where: { id: user.id },
    data: {
      otp,
      otp_expiry: new Date(Date.now() + 10 * 60 * 1000),
    },
  });
  if (!newOtp) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
    return;
  }
  try {
    // const option = {
    //   from: env.EMAIL_USER,
    //   to: user.email,
    //   purpose: "RESET_OTP",
    //   otp,
    // };
    // await sendEmail(option);
    const { tempToken } = generateTempToken({
      id: user.id,
      purpose: "RESET_OTP_TOKEN",
    });
    res.cookie("RESET_OTP_TOKEN", tempToken, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: env.NODE_ENV === "development" ? "lax" : "none",
      maxAge: 10 * 60 * 1000,
    });
    res.status(200).json({ success: true, message: "OTP sent to your email" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
    return;
  }
};

export const verifyOTP = async (
  req: Request<{}, {}, { otp: string }, {}>,
  res: Response,
): Promise<void> => {
  const { otp } = req.body;
  if (!otp) {
    res.status(400).json({ success: false, message: "OTP is required" });
    return;
  }
  const RESET_OTP_TOKEN = req.cookies.RESET_OTP_TOKEN;

  if (!RESET_OTP_TOKEN) {
    res.status(400).json({ success: false, message: "No reset token found" });
    return;
  }
  try {
    const { id, purpose } = jwt.verify(
      RESET_OTP_TOKEN,
      env.TEMP_TOKEN_SECRET,
    ) as { id: string; purpose: string };

    if (!id && purpose !== "RESET_OTP_TOKEN") {
      res.status(400).json({ success: false, message: "Invalid token" });
      return;
    }
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    if (!user.otp) {
      res.status(400).json({ success: false, message: "No OTP Generated" });
      return;
    }
    if (user.otp !== otp) {
      res.status(400).json({ success: false, message: "Invalid OTP" });
      return;
    }
    if (user.otp_expiry && user.otp_expiry < new Date()) {
      res.status(400).json({ susccess: false, message: "OTP is expired" });
      return;
    }
    const RESET_PASSWORD_TOKEN = generateTempToken({
      id: user.id,
      purpose: "RESET_PASSWORD_TOKEN",
    });

    if (!RESET_PASSWORD_TOKEN) {
      throw new Error("Missing reset Token");
    }

    res.cookie("RESET_PASSWORD_TOKEN", RESET_PASSWORD_TOKEN, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: env.NODE_ENV === "development" ? "lax" : "none",
      maxAge: 10 * 60 * 1000,
    });
    res.clearCookie("RESET_OTP_TOKEN", {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: env.NODE_ENV === "development" ? "lax" : "none",
    });
    res
      .status(200)
      .json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Invalid or expired token" });
    return;
  }
};

export const resetPassword = async (
  req: Request<{}, {}, { newPassword: string; confirmPassword: string }, {}>,
  res: Response<{ success: boolean; message: string }>,
) => {
  const { newPassword, confirmPassword } = req.body;
  if (!newPassword || !confirmPassword) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
    return;
  }
  if (newPassword !== confirmPassword) {
    res.status(400).json({ success: false, message: "Passwords do not match" });
    return;
  }
  const RESET_PASSWORD_TOKEN = req.cookies.RESET_PASSWORD_TOKEN;
  if (!RESET_PASSWORD_TOKEN.tempToken) {
    res.status(400).json({ success: false, message: "No reset token found" });
    return;
  }
  try {
    const { id, purpose } = jwt.verify(
      RESET_PASSWORD_TOKEN.tempToken,
      env.TEMP_TOKEN_SECRET,
    ) as { id: string; purpose: string };

    if (!id && purpose !== "RESET_PASSWORD_TOKEN") {
      res.status(400).json({ success: false, message: "Invalid token" });
      return;
    }

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updatedPassword = await prisma.user.update({
      where: { id },
      data: {
        password: hashedPassword,
        otp: null,
        otp_expiry: null,
      },
    });
    if (!updatedPassword) {
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
      return;
    }

    // clear password reset cookies
    res.clearCookie("RESET_PASSWORD_TOKEN", {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: env.NODE_ENV === "development" ? "lax" : "none",
    });

    res
      .status(200)
      .json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.log("Error at resetPassword controller: ", error);
    res
      .status(400)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
