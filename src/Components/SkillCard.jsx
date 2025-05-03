import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const SkillCard = React.memo(({ skill }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/skill/${skill.id}`);
  }, [navigate, skill.id]);

  const { title, category, progress } = skill;

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer p-4 border rounded shadow hover:shadow-lg dark:bg-zinc-800 dark:text-white transition-shadow"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-zinc-500">{category}</p>
      <p className="mt-2 font-medium">Progress: {progress}%</p>
    </div>
  );
});

export default SkillCard;
