import React from "react";
import SkillCard from "../components/SkillCard";
import { useSkills } from "../Context/skillContext";
import { Link } from "react-router-dom";
import ChartToggle from "../Components/ChartToggle";

const Explore = () => {
  const { skills } = useSkills();
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-700 dark:text-purple-300">
        Your Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
      <Link
        to="/add"
        className="fixed bottom-6 right-6 bg-black text-white p-3 text-4xl rounded-b-full shadow-lg hover:bg-blue-700"
      >
        +
      </Link>
      <ChartToggle />
    </div>
  );
};

export default Explore;
