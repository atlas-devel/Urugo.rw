import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../utils/env";
import prisma from "../utils/prisma";

export async function userInfo(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const { id } = jwt.verify(accessToken, env.ACCESS_TOKEN_SECRET) as {
      id: string;
    };

    const user = await prisma.user.findUnique({
      where: { id },
      select: { role: true, name: true, email: true },
    });
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.userInfo = user as { role: string; name: string; email: string };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
}
