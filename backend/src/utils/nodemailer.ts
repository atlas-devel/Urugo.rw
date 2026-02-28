import nodemailer from "nodemailer";
import env from "./env";

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
  purpose: string;
  url?: string;
  otp?: string;
}) {
  const { from, to, purpose, url, otp } = options;

  if (purpose === "RESET_OTP") {
    await Transporter.sendMail({
      from,
      to,
      subject: "Password Reset Request",
      html: `<p>You requested a password reset. Use the following OTP to reset your password:</p>
             <h2>${otp}</h2>
             <p>This OTP is valid for 10 minutes.</p>`,
    });
  } else {
    console.error("Purpose currently not set");
  }
}
