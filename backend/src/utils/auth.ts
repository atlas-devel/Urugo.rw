import { betterAuth, url } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    maxPasswordLength: 128,
    minPasswordLength: 8,
    sendVerificationEmail: async ({
      user,
      url,
    }: {
      user: any;
      url: string;
    }) => {
      // Implement your email sending logic here
      console.log(`Send verification email to ${user.email} with link: ${url}`);
    },
    sendResetPassword: async ({ user, url }: { user: any; url: string }) => {
      // Implement your email sending logic here
      console.log(
        `Send reset password email to ${user.email} with link: ${url}`,
      );
    },
  },
  socialProviders: {
    google: {
      enabled: true,
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      scope: ["profile", "email"],
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set to true in production
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  },
  rateLimit: {
    enabled: true,
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
  trustedOrigins: ["http://localhost:5173"],
});
