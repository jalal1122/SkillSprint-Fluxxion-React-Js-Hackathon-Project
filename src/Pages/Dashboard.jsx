import React, { useState, useMemo, Suspense, lazy, useContext } from "react";
import { motion } from "framer-motion";
import { useSkills } from "../Context/skillContext";
import ThemeContext from "../Context/theme";
import { TextSearch } from "lucide-react";

// Lazy load Chart components
const Pie = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Pie }))
);
const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar }))
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeInOut" },
  }),
};

const Dashboard = () => {
  const { skills } = useSkills();
  const [refreshKey, setRefreshKey] = useState(Date.now());

  const { theme, bgSwitch, textSwitch, fullBgSwitch } =
    useContext(ThemeContext);

  const elementsBgSwitch =
    theme === "dark"
      ? "bg-white/10 border-zinc-700"
      : "bg-white/10 border-white/20";

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

  // Memoize heavy calculations
  const stats = useMemo(() => {
    const total = skills.length;
    const avg = Math.round(
      skills.reduce((sum, s) => sum + s.progress, 0) / total
    );
    const top = skills.reduce((a, b) => (b.progress > a.progress ? b : a));
    const low = skills.reduce((a, b) => (b.progress < a.progress ? b : a));
    return [
      { label: "Total Skills", value: total },
      { label: "Average Progress", value: `${avg}%` },
      { label: "Top Skill", value: top.title },
      { label: "Lowest Skill", value: low.title },
    ];
  }, [skills]);

  const pieData = useMemo(() => {
    const catCounts = skills.reduce((acc, s) => {
      acc[s.category] = (acc[s.category] || 0) + 1;
      return acc;
    }, {});
    return {
      labels: Object.keys(catCounts),
      datasets: [
        {
          data: Object.values(catCounts),
          backgroundColor: [
            "#3B82F6",
            "#22C55E",
            "#F59E0B",
            "#EF4444",
            "#8B5CF6",
          ],
        },
      ],
    };
  }, [skills]);

  const barData = useMemo(
    () => ({
      labels: skills.map((s) => s.title),
      datasets: [
        {
          label: "Progress %",
          data: skills.map((s) => s.progress),
          backgroundColor: "#3B82F6",
        },
      ],
    }),
    [skills]
  );

  const pieOpts = useMemo(
    () => ({
      responsive: true,
      animation: { duration: 800, easing: "easeOutQuart" },
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: textSwitch },
        },
      },
    }),
    []
  );

  const barOpts = useMemo(
    () => ({
      responsive: true,
      animation: { duration: 800, easing: "easeOutQuart" },
      scales: {
        y: { beginAtZero: true, max: 100, ticks: { color: textSwitch } },
        x: { ticks: { color: textSwitch } },
      },
      plugins: { legend: { display: false } },
    }),
    []
  );

  return (
    <>
      {fullBgSwitch}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-10 sm:mt-10 mt-20 z-auto"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex justify-between items-center mb-8 "
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-3xl font-bold text-center text-indigo-500">
            📊 Skill Dashboard
          </h2>
          <button
            onClick={() => setRefreshKey(Date.now())}
            className={`px-4 py-2 rounded text-indigo-500  cursor-pointer border-2 border-indigo-500 bg-white/10 hover:bg-indigo-500 hover:text-white transition duration-300`}
          >
            Refresh
          </button>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`${elementsBgSwitch}  p-6 rounded-md shadow text-center cursor-pointer`}
              variants={fadeInUp}
              custom={i + 1}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              }}
            >
              <p className={`text-sm ${textSwitch}`}>{stat.label}</p>
              <p className="text-xl font-bold text-indigo-500">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className={`${elementsBgSwitch} p-4 rounded shadow`}
            variants={fadeInUp}
            custom={5}
          >
            <h3 className={`text-lg font-semibold mb-4 ${textSwitch}`}>
              Skill Categories
            </h3>
            <Suspense fallback={<p>Loading Pie Chart...</p>}>
              <Pie key={`pie-${refreshKey}`} data={pieData} options={pieOpts} />
            </Suspense>
          </motion.div>

          <motion.div
            className={`${elementsBgSwitch} p-4 rounded shadow`}
            variants={fadeInUp}
            custom={6}
          >
            <h3 className={`text-lg font-semibold mb-4 ${textSwitch}`}>
              Skill Progress
            </h3>
            <Suspense fallback={<p>Loading Bar Chart...</p>}>
              <Bar key={`bar-${refreshKey}`} data={barData} options={barOpts} />
            </Suspense>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;
