import { Moon, Sun } from "lucide-react";
import type { ThemeProps } from "../../../../../@types/types";

function Theme({ theme, changeTheme }: ThemeProps) {
  return (
    <div
      onClick={changeTheme}
      className="hidden md:block  p-1.5 hover:bg-gray-900/10 dark:hover:bg-gray-900/10   cursor-pointer  shadow-secondary-color   border-gray-200 dark:border-secondary-color/40 rounded-full "
    >
      <span
        className={` text-gray-300   ${theme === "light" && "text-gray-900"}`}
      >
        {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </div>
  );
}

export default Theme;
