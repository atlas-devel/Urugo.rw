import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import StatsCard from "../../../components/admin/Dashboard/StatsCard";
import UserSearchFilter from "../../../components/admin/User management/UserSearchFilter";

function AdminProperties() {
  const navigate = useNavigate();
  return (
    <section className="w-full p-4 md:p-6 lg:py-2 lg:p-8">
      <div className="mb-4 flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900  dark:text-white md:text-3xl">
            Users Management
          </h1>
          <p className="dark:text-gray-400 text-gray-500">
            Manage all properties in the platform
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/properties/add")}
          className="flex cursor-pointer items-center duration-300 bg-blue-600  dark:hover:bg-secondary-color/70 px-3 py-1 rounded-md text-white font-medium"
        >
          <Plus /> Add Properties
        </button>
      </div>
      <div>
        {/* <StatsCard /> */}
        {/* <UserSearchFilter />s */}
      </div>
    </section>
  );
}

export default AdminProperties;
