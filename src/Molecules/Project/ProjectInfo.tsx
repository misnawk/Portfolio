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
  padding-left: 50px;
  list-style: none;
`;

type ProjectInfoProps = {
  title: string;
  description: string[];
  features: string[];
  technologies: string[];
  learned: string[][];
};

export const ProjectInfo = ({
  title,
  description,
  features,
  technologies,
  learned,
}: ProjectInfoProps) => (
  <InfoContainer>
    <ProjectSubtitle>{title}</ProjectSubtitle>

    <FeatureList>
      {description.map((description, index) => (
        <FeatureItem key={index}>
          <ProjectText>{description}</ProjectText>
        </FeatureItem>
      ))}
    </FeatureList>

    <ProjectSubtitle>주요 기능</ProjectSubtitle>
    <FeatureList>
      {features.map((features, index) => (
        <FeatureItem key={index}>
          <ProjectText>{features}</ProjectText>
        </FeatureItem>
      ))}
    </FeatureList>

    <ProjectSubtitle>배운점</ProjectSubtitle>
    <FeatureList>
      {learned.map((learned, index) => (
        <FeatureItem key={index}>
          <ProjectText>{learned}</ProjectText>
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
