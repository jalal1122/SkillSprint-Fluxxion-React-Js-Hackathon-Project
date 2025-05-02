import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:scale-105 transition"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-gray-900" />}
    </button>
  );
};

export default ThemeToggle;
