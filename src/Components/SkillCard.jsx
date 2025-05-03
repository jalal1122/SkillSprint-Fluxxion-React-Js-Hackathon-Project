import { useNavigate } from 'react-router-dom';

const SkillCard = ({ skill }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/skill/${skill.id}`)}
      className="cursor-pointer p-4 border rounded shadow hover:shadow-lg dark:bg-zinc-800 dark:text-white"
    >
      <h3 className="text-xl font-semibold">{skill.title}</h3>
      <p className="text-zinc-500">{skill.category}</p>
      <p className="mt-2 font-medium">Progress: {skill.progress}%</p>
    </div>
  );
};

export default SkillCard;