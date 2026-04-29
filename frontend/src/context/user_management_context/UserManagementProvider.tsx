import { useState } from "react";
import { rwandaUsersData } from "../../data/AdminUsersData";
import { UserManagementContext } from "./UserManagementContext";
import type { RealEstateUser } from "../../@types/types";

export const UserManagementProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [users, setUsers] = useState<RealEstateUser[]>(rwandaUsersData);

  // current page state for paginations
  const [currentPage, setCurrentPage] = useState<number>(1);

  const value = {
    users,
    setUsers,
    currentPage,
    setCurrentPage,
  };
  return (
    <UserManagementContext.Provider value={value}>
      {children}
    </UserManagementContext.Provider>
  );
};
