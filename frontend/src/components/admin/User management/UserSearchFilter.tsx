import { useContext, useState, useEffect } from "react";
import ReusableFilters from "./ReusableFilter";
import { UserManagementContext } from "../../../context/user_management_context/UserManagementContext";
import {
  rwandaUsersData,
  userRoles,
  userStatus,
} from "../../../data/AdminUsersData";
import ReusableSearch from "./ReusableSearch";
import { filterChange } from "../../../lib/utils";

function UserSearchFilter() {
  const ctx = useContext(UserManagementContext);
  if (!ctx) throw new Error("UserManagementContext is undefined");
  const { setUsers, setCurrentPage } = ctx;

  // search logic
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    setUsers(() => {
      if (!debouncedQuery) return rwandaUsersData;
      return rwandaUsersData.filter((user) =>
        user.name.toLowerCase().includes(debouncedQuery),
      );
    });
  }, [debouncedQuery, setUsers]);

  // filtering logic
  const defaultRole = "All Roles";
  const defaultStatus = "All Status";

  return (
    <div className=" dark:bg-gray-800/20   dark:backdrop-blur-3xl border border-gray-100 shadow-sm dark:border-gray-100/12 bg-white w-full p-4  md:p-6 lg:p-8 mt-4 rounded-md flex flex-col max-md:gap-4 max-sm:gap-2 md:flex-row md:items-center md:justify-between ">
      <ReusableSearch
        setDebouncedQuery={setDebouncedQuery}
        placeholder="Search by name or email"
      />
      <ReusableFilters
        firstDefault={defaultRole}
        secondDefault={defaultStatus}
        firstDropdownData={userRoles}
        secondDropdownData={userStatus}
        onFilterChange={(selectedRole: string, selectedStatus: string) =>
          filterChange({
            defaultRole,
            defaultStatus,
            currentRole: selectedRole,
            currentStatus: selectedStatus,
            setCurrentPage,
            setUsers,
            usersData: rwandaUsersData,
          })
        }
      />
    </div>
  );
}

export default UserSearchFilter;
