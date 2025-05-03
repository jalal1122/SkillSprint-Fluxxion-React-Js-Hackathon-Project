import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { FaChartPie, FaPlusCircle, FaUser, FaBullseye } from "react-icons/fa";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.3, ease: "easeInOut" }
  })
};

const About = () => {
  return (
    <div className="text-gray-800 dark:text-white">
      {/* Section 1: What It Does */}
      <Parallax strength={300} >
        <div className="h-[80vh] flex flex-col justify-center items-center px-6 text-center bg-opacity-50 bg-black">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariant}
            custom={0.2}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <FaChartPie /> What SkillSprint Does
            </h1>
            <p className="text-lg">
              SkillSprint is a skill-tracking platform that lets users add new skills, monitor their progress, and visualize learning paths using interactive charts. 
              Built with React and Chart.js for a dynamic experience.
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* Section 2: Visualize Progress */}
      <Parallax strength={200} >
        <div className="h-[60vh] flex flex-col justify-center items-center px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariant}
            custom={0.4}
            className="max-w-3xl"
          >
            <h2 className="text-3xl text-black font-semibold mb-3 flex items-center justify-center gap-2">
              <FaPlusCircle /> Add, Track & Visualize
            </h2>
            <p className="text-black">
              Users can quickly add new skills, adjust their learning progress via sliders, and see live data reflected in pie charts. Simple, intuitive, and motivational.
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* Section 3: About Me */}
      <Parallax strength={250} >
        <div className="h-[60vh] flex flex-col justify-center items-center px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariant}
            custom={0.6}
            className="max-w-3xl"
          >
            <h2 className="text-3xl text-black font-semibold mb-3 flex items-center justify-center gap-2">
              <FaUser /> About Me
            </h2>
            <p className="text-black">
              I'm Muhammad Jalal — a passionate Web developer learning the MERN stack at SMIT. I'm skilled in React, JavaScript, MongoDB, Express, Node Js, and interested in AI & data science.
              I love building tools that help others learn and grow.
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* Section 4: My Vision */}
      <Parallax strength={300} >
        <div className="h-[60vh] flex flex-col justify-center items-center px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariant}
            custom={0.8}
            className="max-w-3xl"
          >
            <h2 className="text-3xl text-black font-semibold mb-3 flex items-center justify-center gap-2">
              <FaBullseye /> My Vision
            </h2>
            <p className="text-black">
              I aim to create impactful digital solutions like SkillSprint that motivate learners, track their skills, and empower them to stay consistent. My goal is to keep innovating and help developers become their best selves.
            </p>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
