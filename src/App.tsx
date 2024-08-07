import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Molecules/Home/Sidebar";

import styled, { createGlobalStyle } from "styled-components";
import AboutMePage from "./page/AboutMe/AboutMePage";
import { FirstProjectPage } from "./page/Project/FirstProjectPage";
import { SecondProjectPage } from "./page/Project/SecondProjectPage";
import { ThirdProjectsPage } from "./page/Project/ThirdProjectsPage";
import HomePage from "./page/Home/HomePage";
import { StudyLogPage } from "./page/Study/StudyLogPage";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutMePage />} />
        <Route path="/FirstProjectPage" element={<FirstProjectPage />} />
        <Route path="/SecondProjectPage" element={<SecondProjectPage />} />
        <Route path="/ThirdProjectsPage" element={<ThirdProjectsPage />} />
        <Route path="/StudyLogPage" element={<StudyLogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
