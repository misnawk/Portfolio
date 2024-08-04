import React from "react";
import styled from "styled-components";

const StyledSkillItem = styled.span`
  background-color: #e0f2f1;
  color: #00796b;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
`;

type SkillItemProps = {
  skill: string;
};

const SkillItem = ({ skill }: SkillItemProps) => {
  return <StyledSkillItem>{skill}</StyledSkillItem>;
};

export default SkillItem;
