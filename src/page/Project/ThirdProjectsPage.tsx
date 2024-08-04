import React from "react";
import styled from "styled-components";
import { ProjectCard } from "../../Organisms/Project/ProjectCard";
import { SecondprojectData, thirdProjectData } from "../../Data.ts/ProfileData";

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

const PageTitle = styled.h1`
  color: #ffd700;
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
`;

export const ThirdProjectsPage = () => (
  <PageContainer>
    <ContentWrapper>
      <PageTitle>{thirdProjectData.title}</PageTitle>
      <ProjectCard {...thirdProjectData} />
    </ContentWrapper>
  </PageContainer>
);
