// src/data/DashboardData.ts
import type { Activity } from "../@types/types";
import type { StatsCardProps } from "../@types/types";
import {
  Users, // Total Users
  UserCheck, // Active Users
  Building, // Active Landlords
  UserRound, // Active Tenants
  Briefcase, // Active Agents
  Warehouse, // Total Properties
  CheckCircle, // Properties Available
  Home, // Properties Occupied
  Banknote, // Monthly Revenue
  Clock, // Pending Verification
  ShieldAlert, // Blacklist Reports
  MoveRight, // Move Out Requests
} from "lucide-react";

export const userGrowthData = [
  { date: "Mar 25", newUsers: 12, activeUsers: 234 },
  { date: "Mar 26", newUsers: 18, activeUsers: 245 },
  { date: "Mar 27", newUsers: 8, activeUsers: 238 },
  { date: "Mar 28", newUsers: 22, activeUsers: 256 },
  { date: "Mar 29", newUsers: 15, activeUsers: 248 },
  { date: "Mar 30", newUsers: 10, activeUsers: 252 },
  { date: "Mar 31", newUsers: 25, activeUsers: 267 },
];

export const revenueData = [
  { month: "Jan", revenue: 4200000, payments: 28 },
  { month: "Feb", revenue: 4850000, payments: 32 },
  { month: "Mar", revenue: 5100000, payments: 35 },
  { month: "Apr", revenue: 4780000, payments: 31 },
  { month: "May", revenue: 5250000, payments: 38 },
  { month: "Jun", revenue: 5600000, payments: 42 },
  { month: "Jul", revenue: 5900000, payments: 45 },
  { month: "Aug", revenue: 6150000, payments: 48 },
  { month: "Sep", revenue: 6450000, payments: 51 },
  { month: "Oct", revenue: 6800000, payments: 54 },
  { month: "Nov", revenue: 7200000, payments: 58 },
  { month: "Dec", revenue: 8500000, payments: 67 },
];

export const paymentStatusData = [
  { status: "Paid", count: 342, percentage: 68 },
  { status: "Grace Period", count: 45, percentage: 9 },
  { status: "Overdue", count: 68, percentage: 14 },
  { status: "Pending", count: 45, percentage: 9 },
];

export const propertyStatsData = [
  { location: "Muhima", available: 8, occupied: 12, total: 20 },
  { location: "Kanombe", available: 5, occupied: 15, total: 20 },
  { location: "Kimironko", available: 3, occupied: 17, total: 20 },
  { location: "Kicukiro", available: 10, occupied: 8, total: 18 },
  { location: "Remera", available: 6, occupied: 14, total: 20 },
  { location: "Nyarugenge", available: 4, occupied: 11, total: 15 },
  { location: "Gasabo", available: 7, occupied: 13, total: 20 },
];

export const topLandlordsData = [
  { name: "Jean Mugisha", properties: 45, tenants: 42, revenue: 5400000 },
  { name: "Alice Uwase", properties: 28, tenants: 26, revenue: 3200000 },
  { name: "John Doe", properties: 15, tenants: 14, revenue: 1800000 },
  { name: "Sarah Nyira", properties: 12, tenants: 11, revenue: 1450000 },
  { name: "Peter Kamali", properties: 8, tenants: 7, revenue: 950000 },
  { name: "Marie Claire", properties: 6, tenants: 6, revenue: 720000 },
  { name: "Eric Nshuti", properties: 4, tenants: 4, revenue: 480000 },
];

export const recentActivities: Activity[] = [
  {
    id: 1,
    user: "Jean Mugisha",
    action: "Created property",
    target: "2BR Apartment, Kimironko",
    timestamp: "2024-03-31T10:30:00",
    status: "success",
  },
  {
    id: 2,
    user: "Alice Uwase",
    action: "Made payment",
    target: "150,000 RWF",
    timestamp: "2024-03-31T09:15:00",
    status: "success",
  },
  {
    id: 3,
    user: "Admin",
    action: "Verified property",
    target: "Studio, Muhima",
    timestamp: "2024-03-30T14:45:00",
    status: "success",
  },
  {
    id: 4,
    user: "John Doe",
    action: "Submitted blacklist report",
    target: "Tenant: Peter Kamali",
    timestamp: "2024-03-30T11:20:00",
    status: "pending",
  },
  {
    id: 5,
    user: "Sarah Nyira",
    action: "Registered as landlord",
    target: "3 properties added",
    timestamp: "2024-03-29T16:00:00",
    status: "success",
  },
  {
    id: 6,
    user: "Eric Nshuti",
    action: "Requested move out",
    target: "Property: Kanombe House B",
    timestamp: "2024-03-29T08:30:00",
    status: "pending",
  },
  {
    id: 7,
    user: "Marie Claire",
    action: "Made payment",
    target: "200,000 RWF",
    timestamp: "2024-03-28T13:45:00",
    status: "success",
  },
  {
    id: 8,
    user: "Peter Kamali",
    action: "Updated property",
    target: "Added parking and WiFi",
    timestamp: "2024-03-28T10:00:00",
    status: "success",
  },
];

const StatsCardData: StatsCardProps[] = [
  {
    title: "Total Users",
    number: 1247,
    Icon: Users,
    bgColor:
      "bg-violet-100 dark:bg-gradient-to-r dark:from-violet-500 dark:to-violet-600",
    rate: 8.2,
  },
  {
    title: "Active Users",
    number: 892,
    Icon: UserCheck,
    bgColor:
      "bg-blue-100 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-600",
    rate: 5.4,
  },
  {
    title: "Active Landlords",
    number: 45,
    Icon: Building,
    bgColor:
      "bg-emerald-100 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600",
    rate: 2.1,
  },
  {
    title: "Active Tenants",
    number: 892,
    Icon: UserRound,
    bgColor:
      "bg-green-100 dark:bg-gradient-to-r dark:from-green-500 dark:to-green-600",
    rate: 6.5,
  },
  {
    title: "Active Agents",
    number: 8,
    Icon: Briefcase,
    bgColor:
      "bg-cyan-100 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-cyan-600",
    rate: 0.5,
  },
  {
    title: "Total Properties",
    number: 156,
    Icon: Warehouse,
    bgColor:
      "bg-amber-100 dark:bg-gradient-to-r dark:from-amber-500 dark:to-amber-600",
    rate: 4.3,
  },
  {
    title: "Properties Available",
    number: 42,
    Icon: CheckCircle,
    bgColor:
      "bg-teal-100 dark:bg-gradient-to-r dark:from-teal-500 dark:to-teal-600",
    rate: -2.1,
  },
  {
    title: "Properties Occupied",
    number: 114,
    Icon: Home,
    bgColor:
      "bg-indigo-100 dark:bg-gradient-to-r dark:from-indigo-500 dark:to-indigo-600",
    rate: 3.7,
  },
  {
    title: "Monthly Revenue",
    number: 8500000,
    Icon: Banknote,
    bgColor:
      "bg-purple-100 dark:bg-gradient-to-r dark:from-purple-500 dark:to-purple-600",
    rate: 12.5,
    isCurrency: true,
  },
  {
    title: "Pending Verification",
    number: 7,
    Icon: Clock,
    bgColor:
      "bg-red-100 dark:bg-gradient-to-r dark:from-red-500 dark:to-red-600",
    rate: -1,
  },
  {
    title: "Blacklist Reports",
    number: 4,
    Icon: ShieldAlert,
    bgColor:
      "bg-rose-100 dark:bg-gradient-to-r dark:from-rose-500 dark:to-rose-600",
    rate: 2,
  },
  {
    title: "Move Out Requests",
    number: 3,
    Icon: MoveRight,
    bgColor:
      "bg-orange-100 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-600",
    rate: 1.5,
  },
];

const DashboardData = {
  userGrowthData,
  revenueData,
  paymentStatusData,
  propertyStatsData,
  topLandlordsData,
  recentActivities,
  StatsCardData,
};

export default DashboardData;
