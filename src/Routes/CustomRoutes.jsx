import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../Pages/Explore";
import SkillDetail from "../Pages/SkillDetail";
import AddSkill from "../Pages/AddSkill";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import NavBar from "../Components/NavBar";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Explore />
            </>
          }
        />
        <Route
          path="/skill/:id"
          element={
            <>
              <NavBar /> <SkillDetail />
            </>
          }
        />
        <Route
          path="/add"
          element={
            <>
              <NavBar /> <AddSkill />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <NavBar /> <Dashboard />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar /> <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar /> <Contact />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default CustomRoutes;
