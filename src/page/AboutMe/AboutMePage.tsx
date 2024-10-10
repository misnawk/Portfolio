import React from "react";
import styled from "styled-components";
import AboutMeSection from "../../Organisms/AboutMe/AboutMeSection";
import { AboutMeData } from "../../Data.ts/ProfileData";
import EducationSection from "../../Organisms/AboutMe/EductionSection";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Roboto", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  line-height: 1.6;
`;

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #3498db;
`;

const AboutMePage = () => {
  return (
    <PageContainer>
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <AboutMeSection {...AboutMeData} />
      </Section>
      <Section>
        <SectionTitle>progress</SectionTitle>
        <EducationSection education={AboutMeData.education} />
      </Section>
    </PageContainer>
  );
};

export default AboutMePage;
