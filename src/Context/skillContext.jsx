import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const STORAGE_KEY = "skills";
const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to load skills from localStorage", e);
      return [];
    }
  });

  const debounceRef = useRef(null);

  // Debounced localStorage write
  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
    }, 300); // adjust debounce delay as needed
  }, [skills]);

  const addSkill = useCallback(({ title, category, progress = 0 }) => {
    const newSkill = { id: uuidv4(), title, category, progress };
    setSkills((prev) => [...prev, newSkill]);
    toast.success("Skill added successfully!");
  }, []);

  const updateSkillProgress = useCallback((id, newProgress) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, progress: newProgress } : s))
    );
    toast.success("Skill updated successfully!");
  }, []);

  return (
    <SkillsContext.Provider value={{ skills, addSkill, updateSkillProgress }}>
      {children}
    </SkillsContext.Provider>
  );
};

export const useSkills = () => {
  const ctx = useContext(SkillsContext);
  if (!ctx) throw new Error("useSkills must be used within a SkillsProvider");
  return ctx;
};
