// pages/SkillDetail.jsx
import React, { useMemo, useCallback, Suspense, lazy, useContext } from 'react';
import ThemeContext from '../Context/theme';
import { useParams, useNavigate } from 'react-router-dom';
import { useSkills } from '../Context/skillContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Lazy-load Pie
const Pie = lazy(() => import('react-chartjs-2').then(m => ({ default: m.Pie })));

const SkillDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { skills, updateSkillProgress } = useSkills();

  const { theme, bgSwitch, textSwitch, fullBgSwitch } =
        useContext(ThemeContext);

  // Find skill once
  const skill = useMemo(() => skills.find((s) => s.id === id), [skills, id]);

  // Early return if not found (no extra hooks/computation)
  if (!skill) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">Skill not found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-500 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Stable change handler
  const handleChange = useCallback(
    (e) => {
      updateSkillProgress(id, parseInt(e.target.value, 10));
    },
    [id, updateSkillProgress]
  );

  // Memoized chart data
  const chartData = useMemo(() => ({
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [skill.progress, 100 - skill.progress],
        backgroundColor: ['#10B981', '#E5E7EB'],
        
        borderWidth: 1,
      },
    ],
  }), [skill.progress]);

  return (
    <>
    {fullBgSwitch}
    <div className="max-w-2xl mx-auto mt-30 p-6 bg-white/10 rounded shadow-md">
      <h2 className={`text-2xl font-bold mb-2 ${textSwitch}`}>{skill.title}</h2>
      <p className={`${theme === "dark" ? "text-black" : "text-white"} mb-6`}>{skill.category}</p>

      <div className="mb-6">
        <label htmlFor="progress" className="block mb-2 font-medium text-indigo-500">
          Progress: {skill.progress}%
        </label>
        <input
          id="progress"
          type="range"
          min="0"
          max="100"
          value={skill.progress}
          onChange={handleChange}
          className="w-full text-indigo-500 bg-indigo-500"
        />
      </div>

      <div className="w-64 mx-auto">
        <Suspense fallback={<p className="text-center">Loading chart...</p>}>
          <Pie data={chartData} />
        </Suspense>
      </div>
    </div></>
  );
};

export default SkillDetail;
