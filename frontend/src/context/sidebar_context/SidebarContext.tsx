import { createContext } from "react";
import type { SidebarContextType } from "../../@types/types";

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);
