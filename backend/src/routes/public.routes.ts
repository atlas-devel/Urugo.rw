import type { Router } from "express";
import express from "express";
import {
  login,
  logout,
  resetPassword,
  sendResetPasswordOTP,
  verifyOTP,
} from "../controllers/auth/public.auth.controller";
import {
  getAvailableProperties,
  getAvailablePropertyDetailById,
} from "../controllers/public/property.controller";

export const PublicRoute: Router = express.Router();

PublicRoute.post("/login", login)
  .post("/logout", logout)
  .post("/send-reset-otp", sendResetPasswordOTP)
  .post("/verify-otp", verifyOTP)
  .post("/reset-password", resetPassword);

//no middleware for public routes since they are accessible to everyone, but we can add rate limiting in the future if needed
export const PublicPropertyRoute: Router = express.Router();

PublicPropertyRoute.get("/properties", getAvailableProperties).get(
  "/properties/:id",
  getAvailablePropertyDetailById,
);
