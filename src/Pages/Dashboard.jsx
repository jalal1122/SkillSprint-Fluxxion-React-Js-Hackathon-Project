// pages/Dashboard.jsx
import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import useSkills from '../CustomHooks/useSkills';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const { skills } = useSkills();

  if (skills.length === 0) {
    return <p className="text-center mt-10 text-lg">No skills added yet.</p>;
  }

  // Stats
  const totalSkills = skills.length;
  const averageProgress = Math.round(
    skills.reduce((sum, skill) => sum + skill.progress, 0) / totalSkills
  );
  const highest = skills.reduce((prev, curr) => (curr.progress > prev.progress ? curr : prev));
  const lowest = skills.reduce((prev, curr) => (curr.progress < prev.progress ? curr : prev));

  // Pie chart: category distribution
  const categoryCounts = skills.reduce((acc, skill) => {
    acc[skill.category] = (acc[skill.category] || 0) + 1;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        data: Object.values(categoryCounts),
        backgroundColor: ['#3B82F6', '#22C55E', '#F59E0B', '#EF4444', '#8B5CF6'],
        borderWidth: 1,
      },
    ],
  };

  // Bar chart: progress by skill
  const barData = {
    labels: skills.map((s) => s.title),
    datasets: [
      {
        label: 'Progress %',
        data: skills.map((s) => s.progress),
        backgroundColor: '#3B82F6',
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">📊 Skill Dashboard</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
        <StatCard label="Total Skills" value={totalSkills} />
        <StatCard label="Average Progress" value={`${averageProgress}%`} />
        <StatCard label="Top Skill" value={highest.title} />
        <StatCard label="Lowest Skill" value={lowest.title} />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white dark:bg-zinc-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Skill Categories</h3>
          <Pie data={pieData} />
        </div>
        <div className="bg-white dark:bg-zinc-800 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Skill Progress</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }) => (
  <div className="bg-white dark:bg-zinc-800 p-6 rounded shadow text-center">
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    <p className="text-xl font-bold dark:text-white">{value}</p>
  </div>
);

export default Dashboard;
