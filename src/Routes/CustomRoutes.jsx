import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../Pages/Explore";
import SkillDetail from "../Pages/SkillDetail";
import AddSkill from "../Pages/AddSkill";

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/skill/:id" element={<SkillDetail />} />
        <Route path="/add" element={<AddSkill />} />
      </Routes>
    </div>
  );
};

export default CustomRoutes;
