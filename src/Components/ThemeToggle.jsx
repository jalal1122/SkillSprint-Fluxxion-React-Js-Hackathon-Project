import React, { useState} from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:scale-105 transition"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
