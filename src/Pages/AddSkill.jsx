import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSkills } from "../Context/skillContext";
import { v4 as uuidv4 } from "uuid";

const AddSkill = () => {
  const { addSkill } = useSkills();
  const navigate = useNavigate();

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
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Skill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Skill Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded dark:bg-zinc-700 dark:text-white"
          required
        />
        <input
          type="text"
          placeholder="Category (e.g., Programming, Design)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded dark:bg-zinc-700 dark:text-white"
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
        <p>Progress: {progress}%</p>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default AddSkill;
