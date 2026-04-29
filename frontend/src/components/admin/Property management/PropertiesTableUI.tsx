import { useContext } from "react";
import { Trash, Eye, Pencil } from "lucide-react";
import PropertyManagementContext from "../../../context/property_management_context/PropertyManagementContext";

function PropertiesTableUI({
  start = 0,
  end = 10,
}: {
  start: number;
  end: number;
}) {
  const { properties } = useContext(PropertyManagementContext)!;
  return (
    <table className="w-full min-w-215 whitespace-nowrap">
      <thead className="w-full bg-gray-50 dark:bg-gray-800/50 uppercase font-semibold text-xs tracking-wider text-blue-900 dark:text-gray-400 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <tr className="text-left ">
          <th className="p-3">Property ID</th>
          <th className="p-3">ADDRESS</th>
          <th className="p-3">District</th>
          <th className="p-3">status</th>
          <th className="p-3">monthly rent</th>
          <th className="p-3">landlord</th>
          <th className="p-3">Created At</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {properties?.slice(start, end).map((property: any) => (
          <tr
            key={property.id}
            className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-colors duration-200 "
          >
            <td className="p-3 uppercase font-medium text-green-800 dark:text-green-500">
              {property.id}
            </td>
            <td className="p-3">{property.address}</td>
            <td className="p-3">{property.district}</td>
            <td className="p-3">
              <span
                className={`px-3 p-1 text-xs font-semibold tracking-wide rounded-full border ${
                  property.status?.toUpperCase() === "AVAILABLE"
                    ? "text-green-700 bg-green-100 border-green-200 dark:text-green-400 dark:bg-green-600/15 dark:border-green-400/20"
                    : property.status?.toUpperCase() === "OCCUPIED"
                      ? "text-blue-700 bg-blue-100 border-blue-200 dark:text-blue-400 dark:bg-blue-600/15 dark:border-blue-400/20"
                      : property.status?.toUpperCase() === "PENDING_APPROVAL"
                        ? "text-orange-700 bg-orange-100 border-orange-200 dark:text-orange-400 dark:bg-orange-600/15 dark:border-orange-400/20"
                        : property.status?.toUpperCase() === "REJECTED"
                          ? "text-red-700 bg-red-100 border-red-200 dark:text-red-400 dark:bg-red-600/15 dark:border-red-400/20"
                          : property.status?.toUpperCase() === "RESERVED"
                            ? "text-teal-700 bg-teal-100 border-teal-200 dark:text-teal-400 dark:bg-teal-600/15 dark:border-teal-400/20"
                            : property.status?.toUpperCase() === "MAINTENANCE"
                              ? "text-purple-700 bg-purple-100 border-purple-200 dark:text-purple-400 dark:bg-purple-600/15 dark:border-purple-400/20"
                              : property.status?.toUpperCase() === "OFF_MARKET"
                                ? "text-stone-700 bg-stone-100 border-stone-200 dark:text-stone-400 dark:bg-stone-600/15 dark:border-stone-400/20"
                                : "text-gray-700 bg-gray-100 border-gray-200 dark:text-gray-400 dark:bg-gray-600/15 dark:border-gray-400/20"
                }`}
              >
                {property.status || "Unknown"}
              </span>
            </td>
            <td className="p-3">{property.monthlyRent}</td>
            <td className="p-3">
              {property.landlord?.name || property.landlord}
            </td>
            <td className="p-3">
              {new Date(property.createdAt).toDateString()}
            </td>

            <td className="flex gap-3 items-center p-3">
              <button className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer text-gray-500">
                <Eye size={18} />
              </button>
              <button className="p-1.5 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-blue-500/80">
                <Pencil size={18} />
              </button>
              <button className="p-1.5 rounded-md hover:bg-red-100 dark:hover:bg-red-900/40 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer text-red-500/80">
                <Trash size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PropertiesTableUI;
