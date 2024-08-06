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

const FeatureItem = styled.li`
  margin-bottom: 8px;
  text-indent: -20px;
`;

const FeatureList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style: none;
`;

interface ProjectInfoProps {
  title: string;
  description: string;
  features: string[][];
  technologies: string[];
}

export const ProjectInfo = ({
  title,
  description,
  features,
  technologies,
}: ProjectInfoProps) => (
  <InfoContainer>
    <ProjectSubtitle>{title}</ProjectSubtitle>
    <ProjectText>{description}</ProjectText>
    <ProjectSubtitle>주요 기능</ProjectSubtitle>
    <FeatureList>
      {features.map((feature, index) => (
        <FeatureItem key={index - 1}>
          <ProjectText>{features[index]}</ProjectText>
        </FeatureItem>
      ))}
    </FeatureList>
    <ProjectSubtitle>사용 기술</ProjectSubtitle>
    <TagContainer>
      {technologies.map((tech, index) => (
        <ProjectTag key={index}>{tech}</ProjectTag>
      ))}
    </TagContainer>
  </InfoContainer>
);
