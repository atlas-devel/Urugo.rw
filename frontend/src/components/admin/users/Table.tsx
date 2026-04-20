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
          <th className="p-3">Role</th>
          <th className="p-3">Group</th>
          <th className="p-3">Status</th>
          <th className="p-3">Actions</th>
          <th className="p-3">Created At</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {users.slice(start, end).map((user) => (
          <tr
            key={user.id}
            className="text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-colors duration-200 "
          >
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3">{user.group}</td>
            <td className="p-3">
              {user.status === "Active" && (
                <span className="px-3 p-0.5 text-green-400 bg-green-600/15 rounded-full border border-green-400/20">
                  {user.status}
                </span>
              )}
              {user.status === "Inactive" && (
                <span className="px-3 p-0.5 text-red-400 bg-red-600/15 rounded-full border border-red-400/20">
                  {user.status}
                </span>
              )}
              {user.status === "Pending" && (
                <span className="px-3 p-0.5 text-yellow-400 bg-yellow-600/15 rounded-full border border-yellow-400/20">
                  {user.status}
                </span>
              )}
            </td>
            <td className="flex gap-3 items-center p-3">
              <button className="  p-1 rounded-md hover:text-gray-600 cursor-pointer text-gray-500">
                <Eye />
              </button>
              <button className="  p-1 rounded-md hover:text-blue-600 cursor-pointer text-blue-500/60">
                <Pencil />
              </button>
              <button className=" p-1 rounded-mdhover:text-red-600 cursor-pointer text-red-500/60">
                <Trash className="" />
              </button>
            </td>
            <td className="p-3">{new Date(user.createdAt).toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
