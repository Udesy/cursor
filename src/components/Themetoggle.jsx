import { Monitor, Moon, Sun } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useEffect, useState } from "react";

const Themetoggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "system";
    }
    return "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.setAttribute("data-theme", "dark");
      } else {
        root.setAttribute("data-theme", "light");
      }
    }
  }, [theme]);
  console.log(theme);

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(value) => value && setTheme(value)}
    >
      <ToggleGroupItem value="system" aria-label="Toggle System">
        <Monitor className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Toggle Light">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle Dark">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default Themetoggle;
