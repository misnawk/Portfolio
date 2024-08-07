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
  features: string[][];
  technologies: string[];
  images: string[];
  githubLink: string;
  demoLink: string;
}

export const ProjectCard = ({
  title,
  subtitle,
  description,
  features,
  technologies,
  images,
  githubLink,
  demoLink,
}: ProjectCardProps) => (
  <ProjectContainer>
    <div>
    <ProjectImageSlider images={images} />{" "}
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
    </div>
  </ProjectContainer>
);
