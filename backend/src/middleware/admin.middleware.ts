import type { NextFunction, Request, Response } from "express";

export const ProtectedRoute = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.userInfo) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  if (req.userInfo.role !== "ADMIN") {
    return res
      .status(403)
      .json({ success: false, message: "Forbidden: Admins only" });
  }
  next();
};
