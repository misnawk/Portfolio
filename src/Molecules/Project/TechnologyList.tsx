import React from "react";
import styled from "styled-components";
import { ProjectTag } from "../../Atoms/Project/ProjectTag";

const TechContainer = styled.div`
  margin-top: 10px;
`;

interface TechnologyListProps {
  technologies: string[];
}

export const TechnologyList: React.FC<TechnologyListProps> = ({
  technologies,
}) => (
  <TechContainer>
    {technologies.map((tech, index) => (
      <ProjectTag key={index}>{tech}</ProjectTag>
    ))}
  </TechContainer>
);
