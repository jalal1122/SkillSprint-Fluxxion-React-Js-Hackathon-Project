import React, { useMemo, Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import SkillCard from "../Components/SkillCard";
import { useSkills } from "../Context/skillContext";
import ThemeContext from "../Context/theme";

const ChartToggle = React.lazy(() => import("../Components/ChartToggle")); // Lazy load

const Explore = () => {
  const { skills } = useSkills();

  const { fullBgSwitch } = useContext(ThemeContext);

  // Memoize the skill list rendering
  const renderedSkills = useMemo(
    () => skills.map((skill) => <SkillCard key={skill.id} skill={skill} />),
    [skills]
  );

  return (
    <>
      {fullBgSwitch}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-indigo-500">Your Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderedSkills}
        </div>

        <Link
          to="/add"
          aria-label="Add new skill"
          className="fixed bottom-6 right-6 bg-black text-indigo-500 hover:text-white p-3 text-4xl rounded-b-full shadow-lg hover:bg-indigo-500 transition-colors"
        >
          +
        </Link>

        <Suspense
          fallback={<div className="text-center mt-8">Loading charts...</div>}
        >
          <ChartToggle />
        </Suspense>
      </div>
    </>
  );
};

export default Explore;
