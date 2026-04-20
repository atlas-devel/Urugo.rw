import { createContext, type RefObject } from "react";

interface NavbarContextProps {
  focusInput: RefObject<null | HTMLDivElement>;
}
export const NavbarContext = createContext<undefined | NavbarContextProps>(
  undefined,
);
