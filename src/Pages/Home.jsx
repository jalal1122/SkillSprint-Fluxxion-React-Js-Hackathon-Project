import React from "react";
import BackgroundAnimation from "../Components/BackgroundAnimation";
import ThemeToggle from "../Components/ThemeToggle";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import Explore from "./Explore";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-[#0f172a] transition-colors duration-500">
        {/* Magical 3D Background */}
        <BackgroundAnimation />

        {/* Foreground content */}
        <NavBar />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-20">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to <span className="text-indigo-500">SkillSprint</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Learn like never before — interactive, immersive, and futuristic.
          </motion.p>

          <motion.button
            className="mt-8 px-6 py-3 z-20 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log("Start Learning Clicked")}
          >
            Start Learning
          </motion.button>
        </div>
      </div>
      <Explore />
    </>
  );
};

export default Home;
