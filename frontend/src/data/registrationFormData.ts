import {
  ShieldCheck,
  UserCheck,
  Home,
  User,
  Eye,
  type LucideIcon,
} from "lucide-react";

export const registrationRoles: {
  id: string;
  role: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    id: "1",
    role: "Admin",
    description: "Full access to all features and settings.",
    Icon: ShieldCheck,
  },
  {
    id: "2",
    role: "Agent",
    description: "Manage property listings and assist renters.",
    Icon: UserCheck,
  },
  {
    id: "3",
    role: "Landlord",
    description: "List properties and manage tenant interactions.",
    Icon: Home,
  },
  {
    id: "4",
    role: "Renter",
    description: "Search for properties and manage rentals.",
    Icon: User,
  },
  {
    id: "5",
    role: "Guest",
    description: "Limited access to browse properties.",
    Icon: Eye,
  },
];

export const districts: { id: number; district: string }[] = [
  { id: 0, district: "Select district" },
  { id: 1, district: "BUGESERA" },
  { id: 2, district: "BURERA" },
  { id: 3, district: "GAKENKE" },
  { id: 4, district: "GASABO" },
  { id: 5, district: "GATSIBO" },
  { id: 6, district: "GICUMBI" },
  { id: 7, district: "GISAGARA" },
  { id: 8, district: "HUYE" },
  { id: 9, district: "KAMONYI" },
  { id: 10, district: "KARONGI" },
  { id: 11, district: "KAYONZA" },
  { id: 12, district: "KICUKIRO" },
  { id: 13, district: "KIREHE" },
  { id: 14, district: "MUHANGA" },
  { id: 15, district: "MUSANZE" },
  { id: 16, district: "NGOMA" },
  { id: 17, district: "NGORORERO" },
  { id: 18, district: "NYABIHU" },
  { id: 19, district: "NYAGATARE" },
  { id: 20, district: "NYAMAGABE" },
  { id: 21, district: "NYAMASHEKE" },
  { id: 22, district: "NYANZA" },
  { id: 23, district: "NYARUGENGE" },
  { id: 24, district: "RUBAVU" },
  { id: 25, district: "RUHANGO" },
  { id: 26, district: "RULINDO" },
  { id: 27, district: "RUSIZI" },
  { id: 28, district: "RUTSIRO" },
  { id: 29, district: "RWAMAGANA" },
];
