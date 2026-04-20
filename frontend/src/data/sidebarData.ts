import { icons } from "lucide-react";
import { CheckCircle } from "lucide-react";

const {
  FileText, // Leases
  ShieldAlert, // Blacklist
  MoveRight, // Move Out Requests
  Gauge,
  MessageCircleMore,
  Warehouse,
  ScrollText, // Admin Logs
  Settings, // Settings
  Banknote,
  ChartNoAxesColumnDecreasing,
  Users,
} = icons;

export const sidebarElements = [
  {
    items: [
      { id: 1, name: "Dashboard", Icon: Gauge, link: "/admin/dashboard" },
      { id: 2, name: "Users", Icon: Users, link: "/admin/users" },
      { id: 3, name: "Properties", Icon: Warehouse, link: "/admin/properties" },
      { id: 4, name: "Payments", Icon: Banknote, link: "/admin/payments" },
      { id: 5, name: "Leases", Icon: FileText, link: "/admin/leases" },
    ],
  },
  {
    items: [
      { id: 1, name: "Blacklist", Icon: ShieldAlert, link: "/admin/blacklist" },
      {
        id: 2,
        name: "Move Out Requests",
        Icon: MoveRight,
        link: "/admin/move-out-requests",
      },
      {
        id: 3,
        name: "Property Verification",
        Icon: CheckCircle,
        link: "/admin/verify-properties",
      },
      {
        id: 4,
        name: "Reports",
        Icon: ChartNoAxesColumnDecreasing,
        link: "/admin/reports",
      },
    ],
  },
  {
    items: [
      { id: 1, name: "Admin Logs", Icon: ScrollText, link: "/admin/logs" },
      { id: 2, name: "Settings", Icon: Settings, link: "/admin/settings" },
      {
        id: 3,
        name: "Support Tickets",
        Icon: MessageCircleMore,
        link: "/admin/support",
      },
    ],
  },
];
