import React, { useState } from 'react';
import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeInOut' }
  })
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for reaching out!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="max-w-md mx-auto px-6 py-16"
      initial="hidden"
      animate="visible"
      variants={formVariants}
      custom={0}
    >
      <motion.h1
        className="text-3xl font-bold mb-6 text-center dark:text-white"
        variants={formVariants}
        custom={1}
      >
        Contact Us
      </motion.h1>

      <motion.form onSubmit={handleSubmit} variants={formVariants} custom={2}>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded dark:bg-zinc-700 dark:text-white"
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
    </motion.div>
  );
};

export default Contact;
