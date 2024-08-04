// pages/AboutMePage.tsx
import React from "react";
import styled from "styled-components";
import AboutMeSection from "../../Organisms/AboutMe/AboutMeSection";
import { AboutMeData } from "../../Data.ts/ProfileData";
import EducationSection from "../../Organisms/AboutMe/EductionSection";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Arial", sans-serif;
`;

const AboutMePage: React.FC = () => {
  return (
    <PageContainer>
      <AboutMeSection {...AboutMeData} />
      <EducationSection education={AboutMeData.education} />
    </PageContainer>
  );
};

export default AboutMePage;
