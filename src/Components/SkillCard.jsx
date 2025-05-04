import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../Context/theme"; // Assuming you have a theme context

const SkillCard = React.memo(({ skill }) => {
  const navigate = useNavigate();

  const { theme, bgSwitch, textSwitch, fullBgSwitch } =
    useContext(ThemeContext);

  const handleClick = useCallback(() => {
    navigate(`/skill/${skill.id}`);
  }, [navigate, skill.id]);

  const { title, category, progress } = skill;

  return (
    <div
      onClick={handleClick}
      className={`bg-white/10 cursor-pointer p-4 rounded-lg shadow hover:shadow-lg transition-shadow`}
    >
      <h3 className={`text-2xl font-semibold ${textSwitch}`}>{title}</h3>
      <p className={`${theme === "dark" ? "text-black" : "text-white"}`}>{category}</p>
      <p className="mt-2 font-medium text-indigo-500">Progress: {progress}%</p>
    </div>
  );
});

export default SkillCard;
