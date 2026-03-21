import type { NotificationData } from "../@types/types";
import { NotificationType } from "../generated/prisma/browser";
import { sendEmail } from "../services/mail.service";
import env from "./env";
import prisma from "./prisma";

async function makeNotification(
  notificationData: NotificationData,
  receiverEmail: string,
) {
  try {
    // Create a new notification in the database
    await prisma.notification.create({
      data: {
        ...notificationData,
        type: notificationData.type as NotificationType,
        isSent: true,
        sentAt: new Date(),
        emailSent: true,
      },
    });
    //send notification email to the receiver
    const mail = {
      from: env.EMAIL_USER,
      to: receiverEmail,
      subject: notificationData.title,
      message: notificationData.message,
    };
    sendEmail(mail);
  } catch (error) {
    console.error("Error creating notification:", error);
  }
}

export default makeNotification;
