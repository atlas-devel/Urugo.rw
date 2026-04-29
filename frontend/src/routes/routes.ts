export const routes = {
  // Main
  DASHBOARD: "/admin/dashboard",
  USERS: "/admin/users",
  PROPERTIES: "/admin/properties",
  PAYMENTS: "/admin/payments",
  LEASES: "/admin/leases",

  // Management
  BLACKLIST: "/admin/blacklist",
  MOVE_OUT_REQUESTS: "/admin/move-out-requests",
  VERIFY_PROPERTIES: "/admin/verify-properties",
  REPORTS: "/admin/reports",
  ADDUSER: "/admin/users/add",

  // System
  ADMIN_LOGS: "/admin/logs",
  SETTINGS: "/admin/settings",
  SUPPORT: "/admin/support",
} as const;
