// Molecules/AboutMe/EducationList.tsx
import React from "react";
import styled from "styled-components";
import { EducationProps } from "../../Type/Type";

const EducationItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const Period = styled.p`
  font-weight: bold;
  color: #666;
  margin-bottom: 10px;
`;

const Title = styled.h4`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

interface EducationListProps {
  educations: EducationProps[];
}

const EducationList = ({ educations }: EducationListProps) => {
  return (
    <div>
      {educations.map((edu, index) => (
        <EducationItem key={index}>
          <Period>{edu.period}</Period>
          <Title>{edu.title}</Title>
          <Description>{edu.description}</Description>
        </EducationItem>
      ))}
    </div>
  );
};

export default EducationList;
