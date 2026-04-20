import type { SidebarSectionProps } from "../../../../@types/types";
import SidebarItem from "./SidebarItem";

function SidebarSections({ items }: SidebarSectionProps) {
  return (
    <div className="mx-1   ">
      <SidebarItem items={items} />
    </div>
  );
}

export default SidebarSections;
