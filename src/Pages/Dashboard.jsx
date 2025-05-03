// pages/Dashboard.jsx
import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { motion } from 'framer-motion';
import { useSkills } from '../Context/skillContext';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeInOut' }
  })
};

const Dashboard = () => {
  const { skills } = useSkills();
  const [chartType, setChartType] = useState('bar');
  const [refreshKey, setRefreshKey] = useState(Date.now());
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortOption, setSortOption] = useState('progress');

  if (!skills.length) {
    return (
      <motion.p
        className="text-center mt-16 text-lg dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        No skills added yet.
      </motion.p>
    );
  }

  // Filter skills based on category
  const filteredSkills = filterCategory === 'All' ? skills : skills.filter(skill => skill.category === filterCategory);

  // Sort skills by selected option
  const sortedSkills = filteredSkills.sort((a, b) => {
    if (sortOption === 'progress') {
      return b.progress - a.progress; // Sort by progress
    }
    return a.title.localeCompare(b.title); // Sort by title
  });

  // Basic stats
  const total = sortedSkills.length;
  const avg = Math.round(sortedSkills.reduce((sum, s) => sum + s.progress, 0) / total);
  const top = sortedSkills.reduce((a, b) => (b.progress > a.progress ? b : a));
  const low = sortedSkills.reduce((a, b) => (b.progress < a.progress ? b : a));

  // Category distribution
  const catCounts = sortedSkills.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1;
    return acc;
  }, {});
  const pieData = {
    labels: Object.keys(catCounts),
    datasets: [{
      data: Object.values(catCounts),
      backgroundColor: ['#3B82F6', '#22C55E', '#F59E0B', '#EF4444', '#8B5CF6']
    }]
  };
  const pieOpts = {
    responsive: true,
    animation: { duration: 800, easing: 'easeOutQuart' },
    plugins: { legend: { position: 'bottom', labels: { color: '#374151' } } }
  };

  // Progress by skill
  const barData = {
    labels: sortedSkills.map(s => s.title),
    datasets: [{
      label: 'Progress %',
      data: sortedSkills.map(s => s.progress),
      backgroundColor: '#3B82F6'
    }]
  };
  const barOpts = {
    responsive: true,
    animation: { duration: 800, easing: 'easeOutQuart' },
    scales: {
      y: { beginAtZero: true, max: 100, ticks: { color: '#6B7280' } },
      x: { ticks: { color: '#6B7280' } }
    },
    plugins: { legend: { display: false } }
  };

  const stats = [
    { label: 'Total Skills', value: total },
    { label: 'Average Progress', value: `${avg}%` },
    { label: 'Top Skill', value: top.title },
    { label: 'Lowest Skill', value: low.title }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-10"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex justify-between items-center mb-8"
        variants={fadeInUp}
        custom={0}
      >
        <h2 className="text-3xl font-bold text-center dark:text-white">📊 Skill Dashboard</h2>
        <div className="space-x-2">
          <button
            onClick={() => setChartType('bar')}
            className={`px-3 py-1 rounded ${chartType === 'bar' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-zinc-700 dark:text-white'}`}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType('pie')}
            className={`px-3 py-1 rounded ${chartType === 'pie' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-zinc-700 dark:text-white'}`}
          >
            Pie
          </button>
          <button
            onClick={() => setRefreshKey(Date.now())}
            className="px-3 py-1 rounded bg-green-500 text-white"
          >
            Refresh
          </button>
        </div>
      </motion.div>

      {/* Filter and Sort Controls */}
      <motion.div
        className="flex justify-between items-center mb-8"
        variants={fadeInUp}
        custom={1}
      >
        <select
          className="px-3 py-1 rounded bg-gray-200 dark:bg-zinc-700 dark:text-white"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select
          className="px-3 py-1 rounded bg-gray-200 dark:bg-zinc-700 dark:text-white"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="progress">Sort by Progress</option>
          <option value="title">Sort by Title</option>
        </select>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-white dark:bg-zinc-800 p-6 rounded shadow text-center cursor-pointer"
            variants={fadeInUp}
            custom={i + 1}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-xl font-bold dark:text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          className="bg-white dark:bg-zinc-800 p-4 rounded shadow"
          variants={fadeInUp}
          custom={5}
        >
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Skill Categories</h3>
          {chartType === 'bar' ? (
            <Bar key={`bar-${refreshKey}`} data={barData} options={barOpts} />
          ) : (
            <Pie key={`pie-${refreshKey}`} data={pieData} options={pieOpts} />
          )}
        </motion.div>

        <motion.div
          className="bg-white dark:bg-zinc-800 p-4 rounded shadow"
          variants={fadeInUp}
          custom={6}
        >
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Skill Progress</h3>
          {chartType === 'bar' ? (
            <Bar key={`bar2-${refreshKey}`} data={barData} options={barOpts} />
          ) : (
            <Pie key={`pie2-${refreshKey}`} data={pieData} options={pieOpts} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
