import type { Language } from "../@types/types";
import RwandaFlag from "@/assets/images/flags/RwandaFlag.webp";
import UsaFlag from "@/assets/images/flags/Usa.webp";
import FranceFlag from "@/assets/images/flags/france.png";

export const languagesToSwitch: ("Kinyarwanda" | "English" | "French")[] = [
  "Kinyarwanda",
  "English",
  "French",
];

export const languagesToSwitchWithFlags: Language[] = [
  {
    flag: RwandaFlag,
    language: "Kinyarwanda",
  },
  {
    flag: UsaFlag,
    language: "English",
  },
  {
    flag: FranceFlag,
    language: "French",
  },
];

export const navbarLinks = [
  { id: 1, name: "Features", link: "#features" },
  { id: 2, name: "Properties", link: "#properties" },
  { id: 3, name: "How It Works", link: "#how-it-works" },
  { id: 4, name: "Pricing", link: "#pricing" },
];
