// pages/Dashboard.jsx
import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { motion } from 'framer-motion';
import { useSkills } from '../Context/skillContext';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeInOut' }
  })
};

const Dashboard = () => {
  const { skills } = useSkills();

  if (skills.length === 0) {
    return (
      <motion.p 
        className="text-center mt-16 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        No skills added yet.
      </motion.p>
    );
  }

  // Stats
  const totalSkills = skills.length;
  const averageProgress = Math.round(
    skills.reduce((sum, skill) => sum + skill.progress, 0) / totalSkills
  );
  const highest = skills.reduce((prev, curr) =>
    curr.progress > prev.progress ? curr : prev
  );
  const lowest = skills.reduce((prev, curr) =>
    curr.progress < prev.progress ? curr : prev
  );

  // Pie chart: category distribution
  const categoryCounts = skills.reduce((acc, skill) => {
    acc[skill.category] = (acc[skill.category] || 0) + 1;
    return acc;
  }, {});
  const pieData = {
    labels: Object.keys(categoryCounts),
    datasets: [{
      data: Object.values(categoryCounts),
      backgroundColor: ['#3B82F6', '#22C55E', '#F59E0B', '#EF4444', '#8B5CF6'],
    }]
  };
  const pieOptions = {
    responsive: true,
    animation: { duration: 1000, easing: 'easeOutQuart' },
    plugins: { legend: { position: 'bottom' } }
  };

  // Bar chart: progress by skill
  const barData = {
    labels: skills.map(s => s.title),
    datasets: [{
      label: 'Progress %',
      data: skills.map(s => s.progress),
      backgroundColor: '#3B82F6',
    }]
  };
  const barOptions = {
    responsive: true,
    animation: { duration: 1000, easing: 'easeOutQuart' },
    scales: {
      y: { beginAtZero: true, max: 100 }
    },
    plugins: { legend: { display: false } }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 py-10"
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-3xl font-bold mb-6 text-center"
        variants={fadeInUp}
        custom={0}
      >
        📊 Skill Dashboard
      </motion.h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
        {[
          { label: 'Total Skills', value: totalSkills },
          { label: 'Average Progress', value: `${averageProgress}%` },
          { label: 'Top Skill', value: highest.title },
          { label: 'Lowest Skill', value: lowest.title },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            className="bg-white dark:bg-zinc-800 p-6 rounded shadow text-center"
            variants={fadeInUp}
            custom={i + 1}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-xl font-bold dark:text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div 
          className="bg-white dark:bg-zinc-800 p-4 rounded shadow"
          variants={fadeInUp}
          custom={5}
        >
          <h3 className="text-lg font-semibold mb-4">Skill Categories</h3>
          <Pie data={pieData} options={pieOptions} />
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-zinc-800 p-4 rounded shadow"
          variants={fadeInUp}
          custom={6}
        >
          <h3 className="text-lg font-semibold mb-4">Skill Progress</h3>
          <Bar data={barData} options={barOptions} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
