import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../Pages/Explore";
import SkillDetail from "../Pages/SkillDetail";
import AddSkill from "../Pages/AddSkill";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Explore />
            </>
          }
        />
        <Route path="/skill/:id" element={<SkillDetail />} />
        <Route path="/add" element={<AddSkill />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default CustomRoutes;
