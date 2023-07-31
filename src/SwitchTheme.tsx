"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "react-feather";

export default function SwitchTheme() {
  const themesList = useMemo(() => ["light", "dark"], []);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || themesList[1]
  );

  const toggleTheme = useCallback(() => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === themesList[0]
        ? themesList[1]
        : themesList[0];
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }, [themesList]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  return (
    <div className="flex gap-2">
      <Sun />
      <input
        type="checkbox"
        className="toggle"
        data-toggle-theme={themesList.join(",")}
        checked={theme === themesList[1]}
        onChange={toggleTheme}
      />
      <Moon />
    </div>
  );
}
