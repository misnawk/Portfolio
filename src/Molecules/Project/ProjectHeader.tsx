import React from "react";
import { ProjectText } from "../../Atoms/Project/ProjectText";

interface ProjectHeaderProps {
  title: string;
  description: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  description,
}) => (
  <div>
    <ProjectText>{description}</ProjectText>
  </div>
);
