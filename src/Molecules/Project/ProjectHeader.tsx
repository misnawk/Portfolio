import React from "react";
import { ProjectTitle } from "../../Atoms/Project/ProjectTitle";
import { ProjectText } from "../../Atoms/Project/ProjectText";

interface ProjectHeaderProps {
  title: string;
  description: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  description,
}) => (
  <div>
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectText>{description}</ProjectText>
  </div>
);
