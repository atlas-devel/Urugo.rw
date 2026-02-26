// middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import { auth } from "../utils/auth"; // your Better Auth instance

// Extend Express Request type to include session & user
declare global {
  namespace Express {
    interface Request {
      session?: any; // full Better Auth session
      user?: any; // shortcut to session.user
    }
  }
}

export const requireAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Get session from request headers (cookies automatically included)
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check role (must be "admin" as configured in admin plugin)
    if (session.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden: Admin role required" });
    }

    // Attach to request for later use
    req.session = session;
    req.user = session.user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
