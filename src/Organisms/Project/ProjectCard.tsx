// Organisms/Project/ProjectCard.tsx
import React from "react";
import styled from "styled-components";
import { ProjectContainer } from "../../Atoms/Project/ProjectContainer";
import { ProjectImageSlider } from "../../Molecules/Project/ProjectImageSlider";
import { ProjectInfo } from "../../Molecules/Project/ProjectInfo";
import { ProjectButton } from "../../Atoms/Project/ProjectButton";

const ProjectButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  learned: string[][];
  technologies: string[];
  images: string[];
  githubLink: string;
  demoLinks?: string;
  demoLink: string;
};

export const ProjectCard = ({
  subtitle,
  description,
  features,
  technologies,
  images,
  githubLink,
  demoLink,
  demoLinks,
  learned,
}: ProjectCardProps) => (
  <ProjectContainer>
    <div>
      <ProjectImageSlider images={images} />
      <ProjectInfo
        title={subtitle}
        description={description}
        features={features}
        learned={learned}
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
        <ProjectButton
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          버전1
        </ProjectButton>

        {demoLinks && (
          <ProjectButton
            href={demoLinks}
            target="_blank"
            rel="noopener noreferrer"
          >
            버전2
          </ProjectButton>
        )}
      </ProjectButtonContainer>
    </div>
  </ProjectContainer>
);
