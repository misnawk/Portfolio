import React from "react";
import styled from "styled-components";
import { EducationProps } from "../../Type/Type";

const StyledEducationItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Period = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

const EducationItem = ({ period, title, description }: EducationProps) => {
  return (
    <StyledEducationItem>
      <Period>{period}</Period>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledEducationItem>
  );
};

export default EducationItem;
