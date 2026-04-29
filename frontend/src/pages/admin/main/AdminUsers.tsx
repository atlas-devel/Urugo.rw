import UsersTable from "../../../components/admin/users/UsersTable";
import UserSearchFilter from "../../../components/admin/users/UserSearchFilter";
import { UserManagementProvider } from "../../../context/user_management_context/UserManagementProvider";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminUsers() {
  const navigate = useNavigate();
  return (
    <UserManagementProvider>
      <section className="w-full p-4 md:p-6 lg:py-2 lg:p-8">
        <div className="mb-4 flex justify-between items-start">
          <h1 className="text-2xl font-bold text-gray-900  dark:text-white md:text-3xl">
            Users Management
          </h1>
          <button
            onClick={() => navigate("/admin/users/add")}
            className="flex cursor-pointer items-center duration-300 bg-blue-600  dark:hover:bg-secondary-color/70 px-3 py-1 rounded-md text-white font-medium"
          >
            <Plus /> Add User
          </button>
        </div>
        <UserSearchFilter />
        <UsersTable />
      </section>
    </UserManagementProvider>
  );
}

export default AdminUsers;
