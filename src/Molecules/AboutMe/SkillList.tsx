import React from "react";
import styled from "styled-components";
import SkillItem from "../../Atoms/AboutMe/SkillItem";

const StyledSkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

type SkillListProps = {
  skills: string[];
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <StyledSkillList>
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </StyledSkillList>
  );
};

export default SkillList;
