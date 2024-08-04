// Molecules/AboutMe/SkillList.tsx
import React from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Skill = styled.span`
  background-color: #e0f2f1;
  color: #00796b;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

interface SkillListProps {
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <SkillContainer>
      {skills.map((skill, index) => (
        <Skill key={index}>{skill}</Skill>
      ))}
    </SkillContainer>
  );
};

export default SkillList;
