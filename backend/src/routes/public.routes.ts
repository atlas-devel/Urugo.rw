import type { Router } from "express";
import express from "express";
import {
  login,
  logout,
  resetPassword,
  sendResetPasswordOTP,
  verifyOTP,
} from "../controllers/public.auth.controller";

const publicRoute: Router = express.Router();

publicRoute
  .post("/login", login)
  .post("/logout", logout)
  .post("/send-reset-otp", sendResetPasswordOTP)
  .post("/verify-otp", verifyOTP)
  .post("/reset-password", resetPassword);

export default publicRoute;
