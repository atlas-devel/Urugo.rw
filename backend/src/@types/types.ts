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

export interface NotificationData {
  type: string;
  senderId?: string;
  receiverId: string;
  title: string;
  message: string;
  actionUrl?: string; // Optional URL for the notification action
}

export interface LogData {
  adminId?: string;
  adminName?: string;
  adminEmail?: string;
  action: string;
  details?: string; // Optional field for additional details about the action
  targetType: string; // e.g., "USER", "PROPERTY", "LEASE"
  targetId: string; // ID of the user, property, or lease affected by the action
}
