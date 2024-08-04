// molecules/ProjectInfo.tsx
import React from "react";
import styled from "styled-components";
import { ProjectSubtitle } from "../../Atoms/Project/ProjectSubtitle ";
import { ProjectText } from "../../Atoms/Project/ProjectText";
import { ProjectTag } from "../../Atoms/Project/ProjectTag";

const InfoContainer = styled.div`
  margin-bottom: 20px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

interface ProjectInfoProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({
  title,
  description,
  features,
  technologies,
}) => (
  <InfoContainer>
    <ProjectSubtitle>{title}</ProjectSubtitle>
    <ProjectText>{description}</ProjectText>
    <ProjectSubtitle>주요 기능</ProjectSubtitle>
    <ProjectText>{features.join(", ")}</ProjectText>
    <ProjectSubtitle>사용 기술</ProjectSubtitle>
    <TagContainer>
      {technologies.map((tech, index) => (
        <ProjectTag key={index}>{tech}</ProjectTag>
      ))}
    </TagContainer>
  </InfoContainer>
);
