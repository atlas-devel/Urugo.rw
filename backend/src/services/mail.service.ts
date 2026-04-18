import nodemailer from "nodemailer";
import env from "../utils/env";

export const Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});

export async function sendEmail(options: {
  from: string;
  to: string;
  purpose?: string;
  url?: string;
  otp?: string;
  subject?: string;
  message?: string;
}) {
  const { from, to, purpose, url, otp } = options;

  if (purpose === "RESET_OTP") {
    await Transporter.sendMail({
      from,
      to,
      subject: options.subject || "Password Reset Request",
      text:
        options.message ||
        `You requested a password reset. Use the following OTP to reset your password: ${otp}. This OTP is valid for 10 minutes.`,
    });
  } else {
    await Transporter.sendMail({
      from,
      to,
      subject: options.subject || "Default Subject",
      text: options.message || "Default message.",
    });
  }
}
