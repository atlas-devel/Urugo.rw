import { useRef } from "react";
import type { ReactNode } from "react";
import { NavbarContext } from "./NavbarContext";

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const focusInput = useRef<HTMLDivElement | null>(null);

  const value = { focusInput };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
