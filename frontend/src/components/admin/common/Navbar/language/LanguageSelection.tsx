import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/Button";
import { ChevronDown } from "lucide-react";
import { languagesToSwitchWithFlags } from "../../../../../data/navbarData";
import type { Language } from "../../../../../@types/types";
import FranceFlag from "@/assets/images/flags/france.png";

function LanguageSelection() {
  const [language, setLanguage] = useState<Language>({
    language: "French",
    flag: FranceFlag,
  });

  const handleLanguage = (lan: Language) => setLanguage(lan);

  return (
    <section className="hidden lg:flex gap-4 items-center mx-2  ">
      {/* flag */}
      <div className="w-10 ease-in-out duration-300  rounded-sm overflow-hidden">
        <img className="" src={language?.flag} alt="" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="text-gray-800 dark:text-gray-100 font-medium transition-transform border border-gray-300 dark:border-secondary-color/50 duration-500 ease-in-out "
          >
            {language?.language}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border border-transparent  dark:border-secondary-color/40 text-gray-800 dark:text-gray-100 bg-white dark:bg-transparent ">
          {languagesToSwitchWithFlags.map((lan, idx) => (
            <DropdownMenuItem
              className="hover:bg-secondary-color/90 hover:text-white"
              onClick={() => handleLanguage(lan)}
              key={idx}
            >
              {lan.language}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}

export default LanguageSelection;
