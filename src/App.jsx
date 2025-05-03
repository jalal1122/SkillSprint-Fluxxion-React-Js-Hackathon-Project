import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation";
import Home from "./Pages/Home";
import ThemeContext from "./Context/theme";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Home />
        <button
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:scale-105 transition absolute top-4 right-4 z-50"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-300" />
          ) : (
            <Moon size={20} className="text-gray-900" />
          )}
        </button>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
