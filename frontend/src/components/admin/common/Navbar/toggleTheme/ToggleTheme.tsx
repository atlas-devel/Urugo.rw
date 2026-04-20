import { useEffect, useState } from "react";
import Theme from "./Theme";

function ToggleTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      return "dark";
    }

    return storedTheme as "light" | "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return <Theme theme={theme} changeTheme={changeTheme} />;
}

export default ToggleTheme;
