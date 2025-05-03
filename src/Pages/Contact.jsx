import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import ThemeContext from '../Context/theme';

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeInOut' }
  })
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const { theme, bgSwitch, textSwitch } = useContext(ThemeContext);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const gradientSwitch = theme === 'dark' ? 'from-zinc-800 to-black' : 'from-gray-100 to-white';

  const handleSubmit = e => {
    e.preventDefault();

    console.log(import.meta.env.VITE_APP_SERVICE_KEY, import.meta.env.VITE_APP_TEMPLATE_ID, import.meta.env.VITE_APP_PUBLIC_KEY);
    

    emailjs.send(
      `${import.meta.env.VITE_APP_SERVICE_KEY}`,
      `${import.meta.env.VITE_APP_TEMPLATE_ID}`,
      form,
      `${import.meta.env.VITE_APP_PUBLIC_KEY}`
    )
    .then(() => {
      alert('Thank you for reaching out!');
      setForm({ name: '', email: '', message: '' });
    })
    .catch(err => {
      console.error('Email failed:', err);
      alert('Oops! Something went wrong.');
    });
  };

  return (
    <div className={`min-h-screen mt-10 flex flex-col justify-center items-center bg-gradient-to-b px-6 ${gradientSwitch}`}>
      <motion.div
        className="max-w-2xl w-full bg-white dark:bg-zinc-900 shadow-xl rounded-lg p-8"
        initial="hidden"
        animate="visible"
        variants={formVariants}
        custom={0}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400"
          variants={formVariants}
          custom={0.2}
        >
          Contact Me
        </motion.h1>

        <motion.form onSubmit={handleSubmit} variants={formVariants} custom={0.4}>
          <label className="block mb-2 text-gray-700 dark:text-gray-300">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 border rounded dark:bg-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.5)] transition"

          />

          <label className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 border rounded dark:bg-zinc-700 dark:text-white"
          />

          <label className="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full mb-4 px-4 py-2 border rounded dark:bg-zinc-700 dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="mt-8 text-center"
          variants={formVariants}
          custom={0.6}
        >
          <p className="text-gray-800 dark:text-gray-300 mb-2 flex justify-center items-center gap-2">
            <FaEnvelope className="text-indigo-500" /> mjdevstudio@gmail.com
          </p>
          <div className="flex justify-center gap-6 text-2xl mt-4">
            <a href="https://www.linkedin.com/in/mjdevstudio/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-600 hover:scale-110 transition" />
            </a>
            <a href="https://github.com/jalal1122" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-800 dark:hover:text-white hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram className="text-pink-500 hover:scale-110 transition" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
