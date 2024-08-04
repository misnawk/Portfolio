import React from "react";
import styled from "styled-components";
import { EducationProps } from "../../Type/Type";
import EducationItem from "../../Atoms/AboutMe/EducationItem";

const StyledEducationList = styled.div`
  margin-top: 20px;
`;

type EducationListProps = {
  educations: EducationProps[];
};

const EducationList = ({ educations }: EducationListProps) => {
  return (
    <StyledEducationList>
      {educations.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </StyledEducationList>
  );
};

export default EducationList;
