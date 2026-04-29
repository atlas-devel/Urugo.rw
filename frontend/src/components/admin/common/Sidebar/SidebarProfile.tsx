import { LogOut } from "lucide-react";
import useSidebar from "../../../../hooks/useSidebar";

function SidebarProfile() {
  const { isOpen } = useSidebar();
  return (
    <div className="w-full border-t border-gray-300 dark:border-gray-800 py-5  h-20 text-white  px-4 flex flex-col justify-center ">
      <div className="flex items-center gap-3">
        {isOpen && (
          <div className="text-white  rounded-full bg-linear-to-l from-blue-500 to-blue-700 w-8 h-8 flex items-center justify-center text-sm font-semibold">
            <div className="uppercase">il</div>
          </div>
        )}
        {isOpen && (
          <div className="text-gray-900 dark:text-white">
            <p className="capitalize font-semibold">Irakarama leon</p>
            <p className="font-mono text-gray-500 ">Admin</p>
          </div>
        )}
        <div
          className={
            isOpen
              ? "ml-auto text-gray-500"
              : "mx-auto text-gray-900 dark:text-gray-200"
          }
        >
          <LogOut size={18} />
        </div>
      </div>
    </div>
  );
}

export default SidebarProfile;
