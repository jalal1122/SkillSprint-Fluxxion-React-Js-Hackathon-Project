import React, { useState, useMemo } from "react";
import { Bar, Pie } from "react-chartjs-2";
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
          color: "#374151",
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
            ticks: { color: "#6b7280" },
            grid: { color: "#37415120" },
          },
          y: {
            ticks: { color: "#6b7280" },
            grid: { color: "#37415120" },
          },
        }
      : undefined,
  }), [chartType]);

  return (
    <div className="mt-6 bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-md flex flex-col items-center">
      <div className="flex justify-between items-center mb-4 w-3/4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          Skill Progress Chart
        </h3>
        <button
          onClick={() => setChartType(chartType === "bar" ? "pie" : "bar")}
          className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Switch to {chartType === "bar" ? "Pie" : "Bar"}
        </button>
      </div>
      {skills.length > 0 ? (
        chartType === "bar" ? (
          <Bar data={data} options={options} className="w-full max-w-3xl" />
        ) : (
          <Pie data={data} options={options} className="w-full max-w-3xl" />
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
