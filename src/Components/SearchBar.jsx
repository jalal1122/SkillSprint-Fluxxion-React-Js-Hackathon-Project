import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <input
        type="text"
        placeholder="Search skills..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded-md w-full max-w-md shadow-sm focus:outline-none focus:ring focus:ring-purple-400 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
};

export default SearchBar;
