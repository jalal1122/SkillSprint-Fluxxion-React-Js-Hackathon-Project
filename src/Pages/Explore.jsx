import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';
import SearchBar from '../components/SearchBar';

const skillsData = [
  {
    id: 1,
    title: 'useState Hook',
    description: 'Understand and implement state management in React.',
    difficulty: 'Beginner',
  },
  {
    id: 2,
    title: 'useEffect Hook',
    description: 'Trigger side effects in functional components.',
    difficulty: 'Intermediate',
  },
  {
    id: 3,
    title: 'Build a Stopwatch',
    description: 'Create a functional stopwatch using hooks.',
    difficulty: 'Advanced',
  },
  // Add more dummy skills as needed
];

const Explore = () => {
  const [query, setQuery] = useState('');

  const filteredSkills = skillsData.filter((skill) =>
    skill.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-10 max-w-full mx-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <h1 className="text-4xl font-bold text-center mb-10">Choose Your Challenge</h1>
      <SearchBar query={query} setQuery={setQuery} />

      <div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
