// Organisms/AboutMe/EducationSection.tsx
import React from "react";
import styled from "styled-components";
import EducationList from "../../Molecules/AboutMe/EducationList";
import { EducationProps } from "../../Type/Type";

const Section = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
`;

interface EducationSectionProps {
  education: EducationProps[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <Section>
      <EducationList educations={education} />
    </Section>
  );
};

export default EducationSection;
