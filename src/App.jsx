import "./App.css";
import ThemeContext from "./Context/theme";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./Routes/CustomRoutes";

function App() {
  const [theme, setTheme] = useState("dark");

  const bgSwitch = theme === "dark" ? "bg-[#0f172a]" : "bg-gray-100";
  const textSwitch = theme === "dark" ? "text-white" : "text-black";

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Router>
        <ThemeContext.Provider value={{ theme, bgSwitch, textSwitch }}>
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
          <CustomRoutes />

        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
