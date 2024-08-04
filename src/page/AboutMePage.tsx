import React from "react";
import styled from "styled-components";
import AboutMeSection from "../Organisms/AboutMe/AboutMeSection";
import { AboutMeData } from "../Data.ts/ProfileData";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Arial", sans-serif;
`;

const AboutMePage = () => {
  return (
    <PageContainer>
      <AboutMeSection {...AboutMeData} />
    </PageContainer>
  );
};

export default AboutMePage;
