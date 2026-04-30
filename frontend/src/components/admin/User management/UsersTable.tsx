import { useContext } from "react";
import UserTablePaginations from "./UserTablePaginations";
import Table from "./Table";
import { UserManagementContext } from "../../../context/user_management_context/UserManagementContext";

function UsersTable() {
  const ctx = useContext(UserManagementContext);
  if (!ctx) throw new Error("UserManagementContext is undefined");
  const { currentPage, setCurrentPage } = ctx;
  const { users } = useContext(UserManagementContext)!;
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / 10);
  const start = (currentPage - 1) * 10;
  const end = start + 10;

  return (
    <div className="mt-6 w-full max-w-full border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800/30 shadow-sm shadow-secondary-color/10">
      {/* Table Header */}
      <div className="w-full max-w-full overflow-x-auto touch-pan-x overscroll-x-contain">
        <Table start={start} end={end} />
      </div>

      <UserTablePaginations
        currentPage={currentPage}
        totalPages={totalPages}
        totalusers={totalUsers}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default UsersTable;
