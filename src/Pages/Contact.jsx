import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ThemeContext from "../Context/theme";
import emailjs from "emailjs-com";
import StarryBackground from "../Components/StarryBackground";
import DaySkyWithClouds from "../Components/DaySkyWithCoulds";

const fadeUp = (delay = 0.2) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { theme, textSwitch, fullBgSwitch } =
    useContext(ThemeContext);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_KEY,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(() => {
        alert("Thanks for reaching out! I’ll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Email failed:", err);
        alert("Oops! Something went wrong.");
      });
  };

  const formBgSwitch =
    theme === "dark"
      ? "bg-white/10 border-zinc-700"
      : "bg-white/10 border-white/20";

  const inputBgSwitch = theme === "dark" ? "bg-[#0f172a]" : "bg-[#4a6073]";

  return (
    <>
      {fullBgSwitch}
      <div
        className={`bg-transparent ${textSwitch} scroll-snap snap-y snap-mandatory h-screen overflow-y-scroll mt-7 `}
      >
        {/* <DaySkyWithClouds /> */}
        <Parallax strength={300}>
          <section className="snap-start h-screen flex flex-col justify-center items-center px-6 text-center ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp(0.1)}
              className={`max-w-xl w-full rounded-2xl p-10 bg-transparent ${formBgSwitch} border shadow-2xl`}
            >
              <motion.h1
                variants={fadeUp(0.2)}
                className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
              >
                Contact Me
              </motion.h1>

              <motion.form
                onSubmit={handleSubmit}
                variants={fadeUp(0.3)}
                className="flex flex-col gap-4"
              >
                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`px-4 py-3 rounded-lg ${inputBgSwitch} dark:text-white shadow-inner border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={`px-4 py-3 rounded-lg ${inputBgSwitch} dark:text-white shadow-inner border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`px-4 py-3 rounded-lg ${inputBgSwitch} dark:text-white shadow-inner border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 transition text-white py-3 rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </motion.form>

              <motion.div className="mt-8" variants={fadeUp(0.4)}>
                <p
                  className={` mb-3 flex justify-center items-center gap-2 ${textSwitch}`}
                >
                  <FaEnvelope className={`text-indigo-500 `} />{" "}
                  mjdevstudio@gmail.com
                </p>
                <div className="flex justify-center gap-6 text-2xl">
                  <a
                    href="https://www.linkedin.com/in/mjdevstudio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-blue-600 hover:scale-110 transition" />
                  </a>
                  <a
                    href="https://github.com/jalal1122"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="hover:text-gray-800 dark:hover:text-white hover:scale-110 transition" />
                  </a>
                  <a
                    href="https://www.instagram.com/jalalkhan2084/?igsh=MmowZ215d3pobGUx#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="text-pink-500 hover:scale-110 transition" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </Parallax>
      </div>
    </>
  );
};

export default Contact;
