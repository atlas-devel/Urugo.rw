import type React from "react";

export interface SidebarInfo {
  id: number;
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

export interface SidebarContextType {
  isOpen: boolean;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
}

export interface SearchProps {
  forMobile: boolean;
}

export interface SidebarItemsProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}
export interface SidebarSectionProps {
  section?: string;
  items: SidebarInfo[];
}

export interface Language {
  flag: string;
  language: "Kinyarwanda" | "English" | "French";
}

export interface StatsCardProps {
  title: string;
  number: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  rate: number;
  isCurrency?: boolean;
  formatCurrency?: boolean;
}

export interface PaymentStatusData {
  status: string;
  count: number;
  percentage: number;
}
export interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  status: "success" | "pending" | "failed";
}

export interface ThemeProps {
  theme: string;
  changeTheme: () => void;
}

export interface RealEstateUser {
  id: string;
  name: string;
  role: "admin" | "agent" | "landlord" | "renter" | "guest";
  group: string;
  status: "Active" | "Inactive" | "Pending";
  createdAt: string;
}

export interface UserTablePaginationProps {
  currentPage: number;
  totalPages: number;
  totalusers: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
