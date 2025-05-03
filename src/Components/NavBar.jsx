import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Context/theme";
import { motion } from "framer-motion";

const NavBar = () => {
  const { theme, bgSwitch, textSwitch } = useContext(ThemeContext);

  return (
    <motion.div
      className={`absolute top-0 left-0 w-full flex gap-80 justify-around items-center p-4 ${bgSwitch}  z-20 border-b-4 ${
        theme === "dark" ? " border-white" : " border-black"
      }`}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
    >
      <span className="text-indigo-500 text-2xl font-bold">SkillSprint</span>
      <ul className="flex space-x-4 dark:text-gray-900 text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-indigo-500 cursor-pointer text-xl ${
                isActive
                  ? "text-indigo-500"
                  : textSwitch}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `hover:text-indigo-500 cursor-pointer text-xl ${
                isActive
                  ? "text-indigo-500"
                  : textSwitch}`
          }
        >
          Dashboard
        </NavLink>
        <li
          className={`hover:text-indigo-500 cursor-pointer text-xl ${textSwitch}`}
        >
          About
        </li>
        <li
          className={`hover:text-indigo-500 cursor-pointer text-xl ${textSwitch}`}
        >
          Contact
        </li>
      </ul>
    </motion.div>
  );
};

export default NavBar;
