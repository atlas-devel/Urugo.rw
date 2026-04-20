import { Bell } from "lucide-react";

function NotificationBell() {
  return (
    <div className="max-md:hidden relative  cursor-pointer p-1 ">
      <Bell
        size={18}
        className=" dark:text-gray-500 dark:fill-gray-500 text-gray-black"
      />
      <div className=" absolute top-0.5 left-3.5 bg-destructive w-2 h-2  rounded-full"/>
    </div>
  );
}

export default NotificationBell;
