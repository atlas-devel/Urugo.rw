import { SearchIcon } from "lucide-react";
import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { UserManagementContext } from "../../../context/user_management_context/UserManagementContext";
import { rwandaUsersData } from "../../../data/AdminUsersData";

function UsersSearch() {
  const ctx = useContext(UserManagementContext);
  if (!ctx) {
    throw new Error("UserManagementContext is not available");
  }
  const { setUsers } = ctx;
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    setUsers(() => {
      if (!debouncedQuery) return rwandaUsersData;
      return rwandaUsersData.filter((user) =>
        user.name.toLowerCase().includes(debouncedQuery),
      );
    });
  }, [debouncedQuery, setUsers]);

  return (
    <div className=" min-w-0 relative border shadow-inner shadow-gray-50 dark:shadow-none  border-gray-300 dark:border-gray-800  w-full md:max-w-[45%] bg-white  dark:bg-gray-800/60 rounded-2xl overflow-hidden  ">
      <input
        value={searchQuery}
        onChange={handleSearch}
        type="text"
        placeholder="Search by name or email..."
        className="relative w-full h-full z-20 placeholder-gray-500  placeholder:font-medium outline-none border-none p-3 pl-10"
      />
      <span className="absolute  p-3 pb-4 -translate-y-0.5 inset-0 text-gray-500">
        <SearchIcon />
      </span>
    </div>
  );
}

export default UsersSearch;
