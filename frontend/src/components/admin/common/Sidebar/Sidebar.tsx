import useSidebar from "../../../../hooks/useSidebar";
import SidebarSections from "./SidebarSections";
import { sidebarElements } from "../../../../data/sidebarData";
import AppLogo from "../ui/AppLogo";
import SidebarProfile from "./SidebarProfile";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`hidden  ${isOpen ? "w-[270px]" : "w-20 pt-15"} gap-4 duration-300 transition-transform  bg-blue-50 dark:bg-background dark:backdrop-blur-3xl  pt-3.5 overflow-auto hide-scrollbar border-r border-gray-100 dark:border-gray-100/10 shadow-sm md:flex flex-col justify-between h-screen `}
    >
      <AppLogo variants=" ml-5 mb-4 pb-4 border-b border-gray-300 dark:border-gray-800" />
      {sidebarElements.map((item, index) => (
        <SidebarSections key={index} items={item.items} />
      ))}
      <SidebarProfile />
    </div>
  );
}

export default Sidebar;
