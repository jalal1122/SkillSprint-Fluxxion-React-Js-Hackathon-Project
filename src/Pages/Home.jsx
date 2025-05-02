import React from 'react';
import BackgroundAnimation from '../Components/BackgroundAnimation'; // Skill orbs animation
import ThemeToggle from '../Components/ThemeToggle'; // light/dark switch
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <div className="absolute inset-0 z-1"> 
        <BackgroundAnimation />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Welcome to <span className="text-indigo-500">SkillSprint</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Level up your skills with an interactive, futuristic learning experience.
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => console.log('Start Learning Clicked')}
        >
          Start Learning
        </motion.button>
      </div>

      {/* Theme toggle button */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Home;
