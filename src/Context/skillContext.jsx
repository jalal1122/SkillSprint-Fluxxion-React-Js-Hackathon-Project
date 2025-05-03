import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "skills";
const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState(() => {
    const stored = localStorage.getItem('skills');
    return stored ? JSON.parse(stored) : [];
  });

  // Load from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setSkills(JSON.parse(stored));
  }, []);

  // Sync to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
  }, [skills]);

  const addSkill = ({ title, category, progress = 0 }) => {
    const newSkill = { id: uuidv4(), title, category, progress };
    setSkills((prev) => [...prev, newSkill]);
  };

  const updateSkillProgress = (id, newProgress) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, progress: newProgress } : s))
    );
  };

  return (
    <SkillsContext.Provider value={{ skills, addSkill, updateSkillProgress }}>
      {children}
    </SkillsContext.Provider>
  );
};

// Custom hook to consume
export const useSkills = () => {
  const ctx = useContext(SkillsContext);
  if (!ctx) throw new Error("useSkills must be used within a SkillsProvider");
  return ctx;
};
