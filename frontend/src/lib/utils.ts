import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { RealEstateUser } from "../@types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
interface FilterChange {
  defaultRole: string | undefined;
  defaultStatus: string | undefined;
  currentRole: string | undefined;
  currentStatus: string | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setUsers: React.Dispatch<React.SetStateAction<RealEstateUser[]>>;
  usersData: RealEstateUser[];
}
export const filterChange = ({
  defaultRole,
  defaultStatus,
  currentRole,
  currentStatus,
  setCurrentPage,
  setUsers,
  usersData,
}: FilterChange) => {
  setCurrentPage(1);
  setUsers(() => {
    // no filter applied
    if (currentRole === defaultRole && currentStatus === defaultStatus) {
      return usersData;
    }
    //   filter by role only
    else if (currentRole && currentStatus === defaultStatus) {
      return usersData.filter(
        (user) => user.role.toLowerCase() === currentRole.toLowerCase(),
      );
    }
    //   filter by status only
    else if (currentStatus && currentRole === defaultRole) {
      return usersData.filter(
        (user) => user.isActive === (currentStatus.toLowerCase() === "active"),
      );
    }
    //   filter by both role and status
    return usersData.filter(
      (user) =>
        user.role.toLowerCase() === currentRole?.toLowerCase() &&
        user.isActive === (currentStatus?.toLowerCase() === "active"),
    );
  });
};
