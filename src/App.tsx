import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Molecules/Home/Sidebar";
import HomePage from "./page/HomePage";
import styled, { createGlobalStyle } from "styled-components";
import AboutMePage from "./page/AboutMePage";
import { FirstProjectPage } from "./page/FirstProjectPage";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  transition: margin-left 0.3s ease;
  padding: 20px;
`;

const RouteContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  min-height: calc(100vh - 40px);
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  padding: 30px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Sidebar />
        <MainContent>
          <RouteContainer>
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<AboutMePage />} />
                <Route path="/firstProjects" element={<FirstProjectPage />} />
                {/* 다른 라우트들 */}
              </Routes>
            </ContentWrapper>
          </RouteContainer>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
