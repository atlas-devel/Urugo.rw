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
  email: string;
  phoneNumber: string;
  role: "admin" | "agent" | "landlord" | "renter" | "guest";
  banned: boolean;
  isActive: boolean;
  createdAt: Date;
}

export interface UserTablePaginationProps {
  currentPage: number;
  totalPages: number;
  totalusers: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface Property {
  id: string;
  landlordId: string;
  agentId: string;
  property_number: string;
  address: string;
  city: string;
  province: string;
  district: string;
  sector: string;
  cell: string;
  bedrooms: number;
  bathrooms: number;
  hasParking: boolean;
  hasWifi: boolean;
  securityIncluded: boolean;
  monthlyRent: number;
  initialPamentMonths: number;
  initialPaymentPrice: number;
  includesWater: boolean;
  includesElectricity: boolean;
  property_type: "APARTMENT" | "HOUSE" | "STUDIO" | "ROOM" | "COMMERCIAL";
  description: string;
  property_photos: string[];
  amenities: string[];
  contract_url: string | undefined;
  status:
    | "DRAFT"
    | "PENDING_APPROVAL"
    | "REJECTED"
    | "AVAILABLE"
    | "RESERVED"
    | "OCCUPIED"
    | "MAINTENANCE"
    | "OFF_MARKET";
  isActive: boolean;
  approvedAt: Date;
  approvedBy: string;
  createdAt: Date;
  updatedAt: Date;
}
