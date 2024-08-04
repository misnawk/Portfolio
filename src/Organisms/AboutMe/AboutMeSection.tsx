import React from "react";
import styled from "styled-components";
import EducationList from "../../Molecules/AboutMe/EducationList";
import SkillList from "../../Molecules/AboutMe/SkillList";
import { AboutMeProps } from "../../Type/Type";

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
`;

const AboutMeSection = ({ skills, education }: AboutMeProps) => {
  return (
    <Section>
      <SectionTitle>About Me</SectionTitle>
      <h3>Skills</h3>
      <SkillList skills={skills} />
      <h3>Education</h3>
      <EducationList educations={education} />
    </Section>
  );
};

export default AboutMeSection;
