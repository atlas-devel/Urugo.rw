import type { NotificationData } from "../@types/types";
import { NotificationType } from "../generated/prisma/browser";
import { sendEmail } from "../services/mail.service";
import env from "./env";
import prisma from "./prisma";

async function makeNotification(
  notificationData: NotificationData,
  sendMail: {
    isRequired: boolean;
    receiverEmail: string;
  }, // send real email if true, otherwise just create notification in the database without sending email
) {
  try {
    // Create a new notification in the database
    await prisma.notification.create({
      data: {
        ...notificationData,
        type: notificationData.type as NotificationType,
        isSent: true,
        sentAt: new Date(),
        emailSent: sendMail.isRequired, // Use the parameter
      },
    });
    // Send email notification if sendMail is true
    if (sendMail.isRequired) {
      const mail = {
        from: env.EMAIL_USER,
        to: sendMail.receiverEmail,
        subject: notificationData.title,
        message: notificationData.message,
      };
      sendEmail(mail);
    }
  } catch (error) {
    console.error("Error creating notification:", error);
  }
}

export default makeNotification;
