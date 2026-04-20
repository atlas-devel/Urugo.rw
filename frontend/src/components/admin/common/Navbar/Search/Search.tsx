import { Search as SearchIcon } from "lucide-react";
import type { SearchProps } from "../../../../../@types/types";
import useNavbar from "../../../../../hooks/useNavbar";

function Search({ forMobile }: SearchProps) {
  const { focusInput } = useNavbar();
  return (
    <div
      ref={forMobile ? focusInput : null}
      className={`${!forMobile && "max-md:hidden"}  relative border border-primary-muted rounded-full bg-white dark:bg-secondary-color/12 dark:border-secondary-color/20  grow max-w-xl hover:outline-secondary-color/30 hover:outline-2 `}
    >
      <div className="absolute inset-y-0 text-neutral-400 dark:text-gray-500 flex items-center pl-3 ">
        <SearchIcon />
      </div>
      <input
        type="text"
        name="browse"
        className=" w-full pl-10 py-2 border-none placeholder-neutral-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-secondary-color rounded-full "
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
