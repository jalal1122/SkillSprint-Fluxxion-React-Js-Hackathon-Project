import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import ThemeContext from "../Context/theme";
import { useContext } from "react";
import {
  FaChartPie,
  FaPlusCircle,
  FaUser,
  FaBullseye,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const fadeInSlide = (direction = "left", delay = 0.3) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const About = () => {
  const { theme, bgSwitch, textSwitch } = useContext(ThemeContext);

  const borderSwitch = theme === "dark" ? "border-white" : "border-black";

  return (
    <div className={`${bgSwitch} ${textSwitch} scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen`}>
      {/* Section 1: What It Does */}
      <Parallax strength={300}>
        <section className={`snap-start h-screen flex flex-col justify-center bg-[#0f172a] text-white items-center px-6 text-center border-b-4 ${borderSwitch}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            variants={fadeInSlide("left", 0.2)}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <FaChartPie /> What SkillSprint Does
            </h1>
            <p className="text-lg">
              SkillSprint is a skill-tracking platform that lets users add new skills, monitor progress, and visualize growth using interactive charts. Built using React and Chart.js for an immersive experience.
            </p>
          </motion.div>
        </section>
      </Parallax>

      {/* Section 2: Visualize Progress */}
      <Parallax strength={200}>
        <section className={`snap-start h-screen flex flex-col justify-center items-center px-6 text-center border-b-4 ${borderSwitch}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            variants={fadeInSlide("right", 0.3)}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-semibold mb-3 flex items-center justify-center gap-2">
              <FaPlusCircle /> Add, Track & Visualize
            </h2>
            <p>
              Quickly add skills, update progress with sliders, and view real-time pie charts. It’s simple, powerful, and keeps you motivated.
            </p>
          </motion.div>
        </section>
      </Parallax>

      {/* Section 3: About Me */}
      <Parallax strength={250}>
        <section className={`snap-start h-screen flex flex-col justify-center items-center px-6 text-center border-b-4 ${borderSwitch}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            variants={fadeInSlide("left", 0.4)}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-semibold mb-3 flex items-center justify-center gap-2">
              <FaUser /> About Me
            </h2>
            <p>
              I'm <strong>Muhammad Jalal</strong> — a passionate Web Developer learning the MERN stack at SMIT. I build real-world projects using React, JavaScript, MongoDB, Express, and Node.js. I'm also exploring AI and data science.
            </p>

            {/* Tech Skills Icons */}
            <div className="flex justify-center gap-5 mt-6 text-4xl text-blue-500 dark:text-yellow-400">
              <FaHtml5 title="HTML5" className="hover:text-orange-600 transition" />
              <FaCss3Alt title="CSS3" className="hover:text-blue-600 transition" />
              <FaJs title="JavaScript" className="hover:text-yellow-500 transition" />
              <FaReact title="React" className="hover:text-cyan-400 transition" />
              <FaNodeJs title="Node.js" className="hover:text-green-600 transition" />
              <FaDatabase title="MongoDB" className="hover:text-emerald-600 transition" />
            </div>
          </motion.div>
        </section>
      </Parallax>

      {/* Section 4: My Vision */}
      <Parallax strength={300}>
        <section className={`snap-start h-screen flex flex-col justify-center items-center px-6 text-center border-b-4 ${borderSwitch}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            variants={fadeInSlide("right", 0.5)}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-semibold mb-3 flex items-center justify-center gap-2">
              <FaBullseye /> My Vision
            </h2>
            <p>
              My goal is to create digital tools like SkillSprint that inspire self-learning and track progress efficiently. I envision a world where developers grow with clarity and purpose through smart tools.
            </p>
          </motion.div>
        </section>
      </Parallax>
    </div>
  );
};

export default About;
