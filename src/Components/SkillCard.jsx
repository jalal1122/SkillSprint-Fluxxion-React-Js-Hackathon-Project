import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold">{skill.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.description}</p>
      <p className="text-xs text-purple-500 font-medium mt-2">★ {skill.difficulty}</p>
      <button className="mt-4 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-200">
        Start
      </button>
    </div>
  );
};

export default SkillCard;
