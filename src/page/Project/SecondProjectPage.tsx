import React from "react";
import styled from "styled-components";
import { ProjectCard } from "../../Organisms/Project/ProjectCard";
import { SecondprojectData } from "../../Data.ts/ProfileData";
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

export const SecondProjectPage = () => (
  <PageContainer>
    <ContentWrapper>
      <ProjectTitle>{SecondprojectData.title}</ProjectTitle>
      <ProjectCard {...SecondprojectData} />
    </ContentWrapper>
  </PageContainer>
);
