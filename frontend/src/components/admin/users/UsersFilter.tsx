import { ChevronDown } from "lucide-react";
import { Button } from "../common/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../common/ui/dropdown-menu";
import {
  rwandaUsersData,
  status,
  UserRoles,
} from "../../../data/AdminUsersData";
import { useContext, useEffect, useState } from "react";
import { UserManagementContext } from "../../../context/user_management_context/UserManagementContext";

function UsersFilter() {
  const [currentRole, setCurrentRole] = useState("All Roles");
  const [currentStatus, setCurrentStatus] = useState("All Status");

  const filterByRole = (role: string) => {
    setCurrentRole(role);
  };
  const filterByStatus = (status: string) => {
    setCurrentStatus(status);
  };

  const ctx = useContext(UserManagementContext);
  if (!ctx) throw new Error("UserManagementContext is undefined");
  const { setUsers, setCurrentPage } = ctx;

  useEffect(() => {
    setCurrentPage(1);
    setUsers(() => {
      if (currentRole === "All Roles" && currentStatus === "All Status") {
        return rwandaUsersData;
      } else if (currentRole && currentStatus === "All Status") {
        return rwandaUsersData.filter(
          (user) => user.role.toLowerCase() === currentRole.toLowerCase(),
        );
      } else if (currentStatus && currentRole === "All Roles") {
        return rwandaUsersData.filter(
          (user) => user.status.toLowerCase() === currentStatus.toLowerCase(),
        );
      }
      return rwandaUsersData.filter(
        (user) =>
          user.role.toLowerCase() === currentRole.toLowerCase() &&
          user.status.toLowerCase() === currentStatus.toLowerCase(),
      );
    });
  }, [currentRole, currentStatus, setUsers, setCurrentPage]);
  useEffect(() => {}, [currentStatus]);
  return (
    <div className="flex items-center md:gap-8 max-sm:flex-col flex-row max-sm:gap-2">
      {/* filter by role */}
      <div className="min-h-fit max-md:w-full md:max-w-130 dark:bg-gray-800/60 rounded-lg p-0.5 px-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 font-medium tracking-wider ">
              <span> {currentRole}</span>{" "}
              <span className="ml-auto  ">
                <ChevronDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 ">
            {UserRoles.map((role) => (
              <DropdownMenuItem
                key={role.id}
                onClick={() => filterByRole(role.role)}
                className="dark:hover:bg-secondary-color dark:hover:text-white"
              >
                {role.role}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* filter by status */}

      <div className="min-h-fit max-md:w-full md:max-w-130 dark:bg-gray-800/60 rounded-lg p-0.5 px-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 font-medium tracking-wider ">
              <span> {currentStatus}</span>{" "}
              <span className="ml-auto  ">
                <ChevronDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 ">
            {status.map((status) => (
              <DropdownMenuItem
                key={status.id}
                onClick={() => filterByStatus(status.status)}
                className="dark:hover:bg-secondary-color dark:hover:text-white"
              >
                {status.status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default UsersFilter;
