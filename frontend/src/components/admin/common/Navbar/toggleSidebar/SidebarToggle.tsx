import { Menu } from "lucide-react";
import useSidebar from "../../../../../hooks/useSidebar";

function SidebarToggle() {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      onClick={toggleSidebar}
      className="hidden md:block  dark:hover:bg-neutral-800/50 dark:text-gray-500 hover:bg-neutral-100 duration-300 cursor-pointer rounded-md p-2"
    >
      <Menu />
    </button>
  );
}

export default SidebarToggle;
