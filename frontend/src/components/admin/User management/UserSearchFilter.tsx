import { useContext } from "react";
import ReusableFilters from "./ReusableFilter";
import UsersSearch from "./UsersSearch";
import { UserManagementContext } from "../../../context/user_management_context/UserManagementContext";
import {
  rwandaUsersData,
  userRoles,
  userStatus,
} from "../../../data/AdminUsersData";

function UserSearchFilter() {
  const defaultRole = "All Roles";
  const defaultStatus = "All Status";

  const ctx = useContext(UserManagementContext);
  if (!ctx) throw new Error("UserManagementContext is undefined");
  const { setUsers, setCurrentPage } = ctx;

  const onFilterChange = (currentRole: string, currentStatus: string) => {
    setCurrentPage(1);
    setUsers(() => {
      // no filter applied
      if (currentRole === defaultRole && currentStatus === defaultStatus) {
        return rwandaUsersData;
      }
      //   filter by role only
      else if (currentRole && currentStatus === defaultStatus) {
        return rwandaUsersData.filter(
          (user) => user.role.toLowerCase() === currentRole.toLowerCase(),
        );
      }
      //   filter by status only
      else if (currentStatus && currentRole === defaultRole) {
        return rwandaUsersData.filter(
          (user) =>
            user.isActive === (currentStatus.toLowerCase() === "active"),
        );
      }
      //   filter by both role and status
      return rwandaUsersData.filter(
        (user) =>
          user.role.toLowerCase() === currentRole.toLowerCase() &&
          user.isActive === (currentStatus.toLowerCase() === "active"),
      );
    });
  };
  return (
    <div className=" dark:bg-gray-800/20  dark:backdrop-blur-3xl border border-gray-100 shadow-sm dark:border-gray-100/12 bg-white w-full p-4  md:p-6 lg:p-8 mt-4 rounded-md flex flex-col max-md:gap-4 max-sm:gap-2 md:flex-row md:items-center md:justify-between ">
      <UsersSearch />
      <ReusableFilters
        firstDefault={defaultRole}
        secondDefault={defaultStatus}
        firstDropdownData={userRoles}
        secondDropdownData={userStatus}
        onFilterChange={onFilterChange}
      />
    </div>
  );
}

export default UserSearchFilter;
