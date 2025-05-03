import React from 'react';
import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.4, ease: 'easeInOut' }
  })
};

const About = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16"
      initial="hidden"
      animate="visible"
      variants={aboutVariants}
      custom={0}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center dark:text-white"
        variants={aboutVariants}
        custom={1}
      >
        About SkillSprint
      </motion.h1>
      
      <motion.p
        className="text-lg mb-4 text-gray-700 dark:text-gray-300"
        variants={aboutVariants}
        custom={2}
      >
        SkillSprint is your personal skill-tracking companion. Whether you’re learning React, Three.js, or tailwind,
        SkillSprint helps you set goals, track progress, and visualize your learning journey—all in one beautiful dashboard.
      </motion.p>
      
      <motion.p
        className="text-lg mb-6 text-gray-700 dark:text-gray-300"
        variants={aboutVariants}
        custom={3}
      >
        Built with React, Three.js, and Chart.js, we aim to make learning engaging and motivating. We believe that
        seeing your progress visually helps you stay on track and reach your goals faster!
      </motion.p>
      
      <motion.div
        className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md"
        variants={aboutVariants}
        custom={4}
      >
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300">
          To empower learners by providing clear, interactive visualizations of their skill development,
          fostering consistency, and celebrating every milestone.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
