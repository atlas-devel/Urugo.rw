import { Request } from "express";
interface UserInfo {
  name: string;
  email: string;
  role: string;
}

declare global {
  namespace Express {
    export interface Request {
      userInfo?: UserInfo;
    }
  }
}

export interface LoginCredentials {
  email: string;
  password: string;
  phoneNumber: string;
}
