import type { SidebarInfo } from "../../../../@types/types";
import { NavLink } from "react-router-dom";
import useSidebar from "../../../../hooks/useSidebar";

function SidebarItem({ items }: { items: SidebarInfo[] }) {
  const { isOpen } = useSidebar();

  return (
    <div className=" overflow-auto flex-1 ">
      {items.map(({ id, name, link, Icon }: SidebarInfo) => (
        <div key={id} className="flex items-center group cursor-pointer ">
          {isOpen && (
            <div className="hidden  transition-colors ease-in-out duration-400 dark:group-hover:bg-gradient-to-l from-blue-300 to-blue-600 group-hover:block bg-secondary-color h-full w-1 text-transparent py-4 rounded-r-xl" />
          )}
          <NavLink
            to={link}
            className={({ isActive }) =>
              `flex  items-center gap-4  transform-all text-gray-800        hover:bg-gradient-to-l from-blue-300 to-blue-600 dark:text-gray-100  mb-2  group-hover:bg-secondary-color group-hover:text-white py-2 w-full ${isOpen && "mx-4"} duration-300 overflow-hidden rounded-md px-3 ${
                isActive &&
                "bg-gradient-to-l text-white from-blue-100 to-blue-600 "
              }`
            }
          >
            <span className="text-sm pl-3">
              <Icon width={20} height={20} />
            </span>
            {isOpen && <p className="text-[15px] font-semibold">{name}</p>}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SidebarItem;
