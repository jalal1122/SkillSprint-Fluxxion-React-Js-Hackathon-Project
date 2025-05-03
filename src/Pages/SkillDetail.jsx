// pages/SkillDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import {useSkills} from '../Context/skillContext';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { skills, updateSkillProgress } = useSkills();

  const skill = skills.find((s) => s.id === id);

  if (!skill) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold">Skill not found!</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-500 underline">Go Back</button>
      </div>
    );
  }

  const handleChange = (e) => {
    updateSkillProgress(id, parseInt(e.target.value));
  };

  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [skill.progress, 100 - skill.progress],
        backgroundColor: ['#10B981', '#E5E7EB'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-zinc-800 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2">{skill.title}</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">{skill.category}</p>

      <div className="mb-6">
        <label htmlFor="progress" className="block mb-2 font-medium">Progress: {skill.progress}%</label>
        <input
          type="range"
          id="progress"
          min="0"
          max="100"
          value={skill.progress}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div className="w-64 mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default SkillDetail;
