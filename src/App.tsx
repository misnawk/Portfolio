import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Molecules/Sidebar";
import HomePage from "./page/HomePage";
import styled from "styled-components";

// 전체 앱 컨테이너
const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

// 메인 콘텐츠 영역
const MainContent = styled.main`
  flex-grow: 1;
  margin-left: 80px;
  padding: 20px;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }
`;

// 라우트를 감싸는 컨테이너
const RouteContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  min-height: calc(100vh - 40px);
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Sidebar />
        <MainContent>
          <RouteContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/profile" element={<ProfilePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} /> */}
            </Routes>
          </RouteContainer>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
//되나
