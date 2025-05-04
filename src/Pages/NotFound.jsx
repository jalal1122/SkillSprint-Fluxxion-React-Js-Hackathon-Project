// pages/NotFound.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeContext from "../Context/theme";

const NotFound = () => {
  const { theme, textSwitch, fullBgSwitch } = useContext(ThemeContext);

  return (
    <>
    {fullBgSwitch}
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h1
          className="text-7xl font-bold mb-4 text-indigo-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <p className={`text-xl mb-4 ${textSwitch}`}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-white/10 text-indigo-500 border-2 border-indigo-500 hover:text-white rounded hover:bg-indigo-500 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </>
  );
};

export default NotFound;
