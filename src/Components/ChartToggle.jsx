import React, { useState, useMemo, useContext } from "react";
import { Bar, Pie } from "react-chartjs-2";
import ThemeContext from "../Context/theme";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useSkills } from "../Context/skillContext";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ChartToggle = () => {
  const { skills } = useSkills();
  const [chartType, setChartType] = useState("bar");

  const { textSwitch } =
      useContext(ThemeContext);

  // ✅ Memoize label and data generation to avoid recalculating on every render
  const labels = useMemo(() => skills.map((skill) => skill.title), [skills]);
  const dataValues = useMemo(() => skills.map((skill) => skill.progress), [skills]);

  // ✅ Memoize chart data and options
  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: "Progress %",
        data: dataValues,
        backgroundColor: [
          "#60A5FA",
          "#FBBF24",
          "#34D399",
          "#F87171",
          "#A78BFA",
          "#F472B6",
        ],
        borderWidth: 1,
        borderColor: "#ffffff10",
      },
    ],
  }), [labels, dataValues]);

  const options = useMemo(() => ({
    responsive: true,
    animation: {
      duration: 600,
      easing: "easeInOutCubic",
    },
    plugins: {
      legend: {
        labels: {
          color: "#000",
        },
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#fff",
        bodyColor: "#e5e7eb",
      },
    },
    scales: chartType === "bar"
      ? {
          x: {
            ticks: { color: "#000" },
            grid: { color: "#000" },
          },
          y: {
            ticks: { color: "#000" },
            grid: { color: "#000" },
          },
        }
      : undefined,
  }), [chartType]);

  return (
    <div className={`mt-6 bg-white/10 rounded-lg p-4 shadow-md flex flex-col items-center`}>
      <div className="flex justify-between items-center mb-4 w-3/4">
        <h3 className={`text-xl font-semibold ${textSwitch}`}>
          Skill Progress Chart
        </h3>
        <button
          onClick={() => setChartType(chartType === "bar" ? "pie" : "bar")}
          className="text-sm px-3 py-1 bg-white/10 text-indigo-500 hover:text-white border-2 border-indigo-500 rounded hover:bg-indigo-500 transition"
        >
          Switch to {chartType === "bar" ? "Pie" : "Bar"}
        </button>
      </div>
      {skills.length > 0 ? (
        chartType === "bar" ? (
          <Bar data={data} options={options} className=" max-w-3xl" />
        ) : (
          <Pie data={data} options={options} className=" max-w-3xl" />
        )
      ) : (
        <p className="text-gray-500 dark:text-gray-300 text-center">
          No skills added yet.
        </p>
      )}
    </div>
  );
};

export default ChartToggle;
