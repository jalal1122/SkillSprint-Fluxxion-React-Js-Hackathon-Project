import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiBarChart2, FiInfo, FiMail } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import ThemeContext from "../Context/theme";

const NavBar = () => {
  const { theme, bgSwitch, textSwitch } = useContext(ThemeContext);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full flex items-center flex-col sm:flex-row justify-center gap-3 sm:gap-0 sm:justify-around px-6 py-4 ${bgSwitch} z-20 border-b-4 ${
          theme === "dark" ? "border-white" : "border-black"
        }`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
      >
        <span className="text-indigo-500 text-2xl font-bold transform -translate-x-20 sm:translate-0">SkillSprint</span>
        <ul className="flex items-center gap-6">
          <NavLink
            to="/"
            data-tooltip-id="home-tooltip"
            data-tooltip-content="Go to Home"
            className={({ isActive }) =>
              `flex items-center gap-2 text-xl hover:text-indigo-500 transition ${
                isActive ? "text-indigo-500" : textSwitch
              }`
            }
          >
            <FiHome size={20} />
            <span className="hidden sm:inline">Home</span>
          </NavLink>

          <NavLink
            to="/dashboard"
            data-tooltip-id="dashboard-tooltip"
            data-tooltip-content="View Dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 text-xl hover:text-indigo-500 transition ${
                isActive ? "text-indigo-500" : textSwitch
              }`
            }
          >
            <FiBarChart2 size={20} />
            <span className="hidden sm:inline">Dashboard</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-2 text-xl hover:text-indigo-500 transition ${
                isActive ? "text-indigo-500" : textSwitch
              }`
            }
            data-tooltip-id="about-tooltip"
            data-tooltip-content="Learn more about us"
          >
            <FiInfo size={20} />
            <span className="hidden sm:inline">About</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 text-xl hover:text-indigo-500 transition ${
                isActive ? "text-indigo-500" : textSwitch
              }`
            }
            data-tooltip-id="contact-tooltip"
            data-tooltip-content="Get in touch"
          >
            <FiMail size={20} />
            <span className="hidden sm:inline">Contact</span>
          </NavLink>
        </ul>
      </motion.nav>

      {/* Tooltips */}
      <Tooltip id="home-tooltip" place="bottom" effect="solid" />
      <Tooltip id="dashboard-tooltip" place="bottom" effect="solid" />
      <Tooltip id="about-tooltip" place="bottom" effect="solid" />
      <Tooltip id="contact-tooltip" place="bottom" effect="solid" />
    </>
  );
};

export default NavBar;
