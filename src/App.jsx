import "./App.css";
import ThemeContext from "./Context/theme";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./Routes/CustomRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme, setTheme] = useState("dark");

  const bgSwitch = theme === "dark" ? "bg-[#0f172a]" : "bg-gray-100";
  const textSwitch = theme === "dark" ? "text-white" : "text-black";

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  const toastOptions = {
    duration: 2000,
    success: {
      style: {
        background: "#22c55e",
        color: "white",
      },
    },
    error: {
      style: {
        background: "#ef4444",
        color: "white",
      },
    },
  };

  const themeButton =
    theme === "dark" ? (
      <Sun size={20} className="text-yellow-300" />
    ) : (
      <Moon size={20} className="text-gray-900" />
    );

  return (
    <>
      <Router>
        <Toaster position="right" toastOptions={toastOptions} />

        <ThemeContext.Provider value={{ theme, bgSwitch, textSwitch }}>
          <button
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:scale-105 transition absolute top-4 right-4 z-50"
            onClick={toggleTheme}
          >
            {themeButton}
          </button>
          <CustomRoutes />
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
