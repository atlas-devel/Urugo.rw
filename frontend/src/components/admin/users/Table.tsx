import { useContext } from "react";
import { Trash, Eye, Pencil } from "lucide-react";
import { UserManagementContext } from "../../../context/user_management_context/UserManagementContext";

function Table({ start = 0, end = 10 }: { start: number; end: number }) {
  const { users } = useContext(UserManagementContext)!;
  return (
    <table className="w-full min-w-[860px] whitespace-nowrap">
      <thead className="w-full bg-gray-50 dark:bg-gray-800/50 uppercase font-semibold text-xs tracking-wider text-blue-900 dark:text-gray-400 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <tr className="text-left ">
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Phone Number</th>
          <th className="p-3">Role</th>
          <th className="p-3">Status</th>
          <th className="p-3">Banned</th>
          <th className="p-3">Created At</th>
          <th className="p-3">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {users.slice(start, end).map((user) => (
          <tr
            key={user.id}
            className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-colors duration-200 "
          >
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">{user.phoneNumber}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3">
              {user.isActive && (
                <span className="px-3 p-0.5 text-green-400 bg-green-600/15 rounded-full border border-green-400/20">
                  Active
                </span>
              )}
              {!user.isActive && (
                <span className="px-3 p-0.5 text-red-400 bg-red-600/15 rounded-full border border-red-400/20">
                  Not Active
                </span>
              )}
            </td>
            <td className="p-3">
              {user.banned ? (
                <span className="px-3 p-0.5 text-red-400 bg-red-600/15 rounded-full border border-red-400/20">
                  Banned
                </span>
              ) : (
                <span className="px-3 p-0.5 text-green-400 bg-green-600/15 rounded-full border border-green-400/20">
                  Not Banned
                </span>
              )}
            </td>
            <td className="p-3">{new Date(user.createdAt).toDateString()}</td>

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

export default Table;
