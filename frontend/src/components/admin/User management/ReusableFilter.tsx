import { ChevronDown } from "lucide-react";
import { Button } from "../common/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../common/ui/dropdown-menu";

import { useState } from "react";

interface FilterOption {
  id: number;
  label: string;
}

interface ReusableFilterProps {
  firstDefault: string;
  secondDefault: string;
  firstDropdownData: FilterOption[];
  secondDropdownData: FilterOption[];
  onFilterChange: (firstFilter: string, secondFilter: string) => void;
}

function ReusableFilters({
  firstDefault,
  secondDefault,
  firstDropdownData,
  secondDropdownData,
  onFilterChange,
}: ReusableFilterProps) {
  const [firstFilter, setFirstFilter] = useState(firstDefault);
  const [secondFilter, setSecondFilter] = useState(secondDefault);

  // tell the parent component about the filter changes

  return (
    <div className="flex items-center md:gap-8 max-sm:flex-col flex-row max-sm:gap-2">
      {/* first filter*/}
      <div className="min-h-fit max-md:w-full md:max-w-130 dark:bg-gray-800/60 rounded-lg p-0.5 px-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 font-medium tracking-wider ">
              <span> {firstFilter}</span>{" "}
              <span className="ml-auto  ">
                <ChevronDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 ">
            {firstDropdownData.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => {
                  setFirstFilter(item.label);
                  onFilterChange(item.label, secondFilter);
                }}
                className="dark:hover:bg-secondary-color dark:hover:text-white"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* filter by status */}

      <div className="min-h-fit max-md:w-full md:max-w-130 dark:bg-gray-800/60 rounded-lg p-0.5 px-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full  text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 font-medium tracking-wider ">
              <span> {secondFilter}</span>{" "}
              <span className="ml-auto  ">
                <ChevronDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background text-gray-600 border border-gray-600 dark:border-none dark:text-gray-400 ">
            {secondDropdownData.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => {
                  setSecondFilter(item.label);
                  onFilterChange(firstFilter, item.label);
                }}
                className="dark:hover:bg-secondary-color dark:hover:text-white"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default ReusableFilters;
