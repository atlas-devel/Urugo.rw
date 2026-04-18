import type { LogData } from "../@types/types";
import prisma from "./prisma";


async function makeAdminLog(logData: LogData) {
  try {
    await prisma.adminLog.create({
      data: {
        ...logData,
      },
    });
  } catch (error) {
    console.error("Error creating admin log:", error);
  }
}

export default makeAdminLog;