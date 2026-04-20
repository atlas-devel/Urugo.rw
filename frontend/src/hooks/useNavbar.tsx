import { useContext } from "react";
import { NavbarContext } from "../context/navbar_context/NavbarContext";

function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within <NavbarProvider>");
  }
  return { focusInput: context.focusInput };
}

export default useNavbar;
