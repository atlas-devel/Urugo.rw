import UsersFilter from "./UsersFilter";
import UsersSearch from "./UsersSearch";

function UserSearchFilter() {
  return (
    <div className=" dark:bg-gray-800/20  dark:backdrop-blur-3xl border border-gray-100 shadow-sm dark:border-gray-100/12 bg-white w-full p-4  md:p-6 lg:p-8 mt-4 rounded-md flex flex-col max-md:gap-4 max-sm:gap-2 md:flex-row md:items-center md:justify-between ">
      <UsersSearch />
      <UsersFilter />
    </div>
  );
}

export default UserSearchFilter;
