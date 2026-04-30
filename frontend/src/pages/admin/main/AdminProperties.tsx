import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropertySearchFilter from "../../../components/admin/Property management/PropertySearchFilter";
import PropertyManagementProvider from "../../../context/property_management_context/PropertyManagementProvider";
import PropertiesTable from "../../../components/admin/Property management/PropertiesTable";
// import StatsCard from "../../../components/admin/Dashboard/StatsCard";

function AdminProperties() {
  const navigate = useNavigate();
  return (
    <PropertyManagementProvider>
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
          <PropertySearchFilter />
          {/* <PropertiesTable /> */}
          <PropertiesTable />
        </div>
      </section>
    </PropertyManagementProvider>
  );
}

export default AdminProperties;
