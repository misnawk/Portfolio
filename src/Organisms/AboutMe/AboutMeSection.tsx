// Organisms/AboutMe/AboutMeSection.tsx
import React from "react";
import styled from "styled-components";
import EducationList from "../../Molecules/AboutMe/EducationList";
import SkillList from "../../Molecules/AboutMe/SkillList";
import { AboutMeProps } from "../../Type/Type";

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
`;

const SubTitle = styled.h3`
  font-size: 22px;
  color: #444;
  margin-top: 20px;
  margin-bottom: 15px;
`;

const AboutMeSection = ({ skills }: AboutMeProps) => {
  return (
    <Section>
      {/* <SectionTitle>About Me</SectionTitle> */}
      <SubTitle>Skills</SubTitle>
      <SkillList skills={skills} />
      {/* <SubTitle>Education</SubTitle> */}
    </Section>
  );
};

export default AboutMeSection;
