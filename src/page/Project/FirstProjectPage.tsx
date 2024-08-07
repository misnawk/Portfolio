import React from "react";
import styled from "styled-components";

import { FirstprojectData } from "../../Data.ts/ProfileData";
import { ProjectCard } from "../../Organisms/Project/ProjectCard";
import { ProjectTitle } from "../../Atoms/Project/ProjectTitle";

const PageContainer = styled.div`
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const FirstProjectPage = () => (
  <PageContainer>
    <ContentWrapper>
      <ProjectTitle>{FirstprojectData.title}</ProjectTitle>
      <ProjectCard {...FirstprojectData} />
    </ContentWrapper>
  </PageContainer>
);
