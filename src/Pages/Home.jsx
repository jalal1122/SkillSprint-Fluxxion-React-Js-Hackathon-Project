// pages/Home.jsx
import React, { lazy, Suspense, useCallback } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Link } from "react-scroll";

// Lazy-load heavy components
const BackgroundAnimation = lazy(() =>
  import("../Components/BackgroundAnimation")
);
const NavBar = lazy(() => import("../Components/NavBar"));
// Explore is off-screen on Home; lazy in case you re-enable it later
const Explore = lazy(() => import("./Explore"));

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
  },
};
const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {
  // stable click handler
  const onStartClick = useCallback(() => {
    console.log("Start Learning Clicked");
  }, []);

  return (
    <ParallaxProvider>
      <div className="relative w-full h-screen overflow-hidden  transition-colors duration-500">
        <Suspense fallback={null}>
          <BackgroundAnimation />
        </Suspense>

        <Suspense fallback={null}>
          <NavBar />
        </Suspense>

        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-20">
          <Parallax translateY={[-40, 40]}>
            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow"
              initial="hidden"
              animate="visible"
              variants={headingVariants}
            >
              Welcome to <span className="text-indigo-500">SkillSprint</span>
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
              initial="hidden"
              animate="visible"
              variants={paragraphVariants}
            >
              Learn like never before — interactive, immersive, and futuristic.
            </motion.p>

            <Link to="explore">
              <motion.button
                // to="/explore"
                className="mt-8 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStartClick}
              >
                Lets Explore
              </motion.button>
            </Link>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
