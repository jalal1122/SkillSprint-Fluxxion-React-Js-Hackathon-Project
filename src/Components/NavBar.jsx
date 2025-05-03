import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ThemeContext from "../Context/theme";
import { motion } from "framer-motion";

const NavBar = () => {
  const { theme, bgSwitch, textSwitch } = useContext(ThemeContext);

  return (
    <motion.div
      className={`absolute top-0 left-0 w-full flex gap-80 justify-around items-center p-4 ${bgSwitch}  z-20 border-b-2 border-white`}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
    >
      <span className="text-indigo-500 text-2xl font-bold">SkillSprint</span>
      <ul className="flex space-x-4 dark:text-gray-900 text-white">
        <li
          className={`hover:text-indigo-500 cursor-pointer text-xl ${textSwitch}`}
        >
          Home
        </li>
        <li
          className={`hover:text-indigo-500 cursor-pointer text-xl ${textSwitch}`}
        >
          Courses
        </li>
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
