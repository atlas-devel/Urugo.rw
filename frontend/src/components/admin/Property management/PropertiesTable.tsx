import { useContext } from "react";
import PropertiesTableUI from "./PropertiesTableUI";

function PropertiesTable() {
  return (
    <div className="mt-6 w-full max-w-full border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800/30 shadow-sm shadow-secondary-color/10">
      {/* Table Header */}
      <div className="w-full max-w-full overflow-x-auto touch-pan-x overscroll-x-contain">
        <PropertiesTableUI start={0} end={10} />
      </div>
    </div>
  );
}

export default PropertiesTable;
