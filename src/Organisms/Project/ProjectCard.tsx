// Organisms/Project/ProjectCard.tsx
import React from "react";
import styled from "styled-components";
import { ProjectContainer } from "../../Atoms/Project/ProjectContainer";
import { ProjectTitle } from "../../Atoms/Project/ProjectTitle";
import { ProjectImageSlider } from "../../Molecules/Project/ProjectImageSlider";
import { ProjectInfo } from "../../Molecules/Project/ProjectInfo";
import { ProjectButton } from "../../Atoms/Project/ProjectButton";

const ProjectButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  images: string[]; // 변경: imageUrl 대신 images 배열
  githubLink: string;
  demoLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  features,
  technologies,
  images, // 변경: imageUrl 대신 images
  githubLink,
  demoLink,
}) => (
  <ProjectContainer>
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectImageSlider images={images} />{" "}
    {/* 변경: ProjectImage 대신 ProjectImageSlider 사용 */}
    <ProjectInfo
      title={subtitle}
      description={description}
      features={features}
      technologies={technologies}
    />
    <ProjectButtonContainer>
      <ProjectButton
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </ProjectButton>
      <ProjectButton href={demoLink} target="_blank" rel="noopener noreferrer">
        Demo
      </ProjectButton>
    </ProjectButtonContainer>
  </ProjectContainer>
);
