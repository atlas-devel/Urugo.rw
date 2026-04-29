import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setisOpen((prev) => !prev);
    console.log(isOpen);
  };

  useEffect(() => {
    console.log("rendered");
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth < 800) {
        setisOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = {
    isOpen,
    setisOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
