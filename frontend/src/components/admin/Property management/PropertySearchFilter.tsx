import { useEffect, useState } from "react";
import {
  propertiesDistrictOptions,
  propertiesStatusOptions,
} from "../../../data/PropertiesData";
import ReusableFilters from "../User management/ReusableFilter";
import ReusableSearch from "../User management/ReusableSearch";

function PropertySearchFilter() {
  // search logic

  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    //   Implement the logic to filter properties based on the search query
    //   You can use the debouncedQuery value to filter your properties data
  }, [debouncedQuery]);

  // filtering logic
  const defaultDistrict = "All Districts";
  const defaultStatus = "All Status";

  const filterChange = ({
    currentDistrict,
    currentStatus,
  }: {
    currentDistrict: string;
    currentStatus: string;
  }) => {
    console.log("Selected District:", currentDistrict);
    console.log("Selected Status:", currentStatus);
    // Implement the logic to filter properties based on the selected district and status
    // You can use the currentDistrict and currentStatus values to filter your properties data
  };

  return (
    <div className=" dark:bg-gray-800/20  dark:backdrop-blur-3xl border border-gray-100 shadow-sm dark:border-gray-100/12 bg-white w-full p-4  md:p-6 lg:p-8 mt-4 rounded-md flex flex-col max-md:gap-4 max-sm:gap-2 md:flex-row md:items-center md:justify-between ">
      <ReusableSearch
        setDebouncedQuery={setDebouncedQuery}
        placeholder="Search by property ID, address or landlord"
      />
      <ReusableFilters
        firstDefault={defaultDistrict}
        secondDefault={defaultStatus}
        firstDropdownData={propertiesDistrictOptions}
        secondDropdownData={propertiesStatusOptions}
        onFilterChange={(selectedDistrict: string, selectedStatus: string) =>
          filterChange({
            currentDistrict: selectedDistrict,
            currentStatus: selectedStatus,
          })
        }
      />
    </div>
  );
}

export default PropertySearchFilter;
