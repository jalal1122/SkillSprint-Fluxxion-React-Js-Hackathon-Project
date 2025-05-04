import React, { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSkills } from "../Context/skillContext";
import { v4 as uuidv4 } from "uuid";
import ThemeContext from "../Context/theme";

const AddSkill = () => {
  const { addSkill } = useSkills();
  const navigate = useNavigate();

  const { theme, textSwitch, fullBgSwitch } =
    useContext(ThemeContext);

  const inputBgSwitch = theme === "dark" ? "bg-[#0f172a]" : "bg-[#4a6073]";

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [progress, setProgress] = useState(0);

  // useCallback ensures the function is not redefined on every render
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newSkill = {
        id: uuidv4(),
        title,
        category,
        progress: parseInt(progress, 10),
      };

      addSkill(newSkill);
      navigate("/");
    },
    [title, category, progress, addSkill, navigate] // Ensures dependencies are stable
  );

  return (
    <>
      {fullBgSwitch}
      <div
        className={`max-w-md mx-auto p-6 bg-white/10 rounded-lg shadow-md mt-30`}
      >
        <h2 className={`text-2xl ${textSwitch} font-bold mb-4 text-center`}>Add New Skill</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Skill Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 outline-none rounded ${textSwitch} ${inputBgSwitch}`}
            required
          />
          <input
            type="text"
            placeholder="Category (e.g., Programming, Design)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`w-full px-4 py-2 outline-none rounded ${textSwitch} ${inputBgSwitch}`}
            required
          />
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            className="w-full"
          />
          <p className="text-indigo-500">Progress: {progress}%</p>
          <button
            type="submit"
            className="w-full bg-white/10 border-2 border-indigo-500 text-indigo-500 font-bold hover:text-white px-4 py-2 rounded hover:bg-indigo-500"
          >
            Add Skill
          </button>
        </form>
      </div>
    </>
  );
};

export default AddSkill;
