import React from "react";
import styled from "styled-components";

import { FirstprojectData } from "../../Data.ts/ProfileData";
import { ProjectCard } from "../../Organisms/Project/ProjectCard";

const PageContainer = styled.div`
  margin-left: 80px; // 사이드바 너비만큼 여백
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const ContentWrapper = styled.div`
  max-width: 62.5rem;
  width: 100%;
`;

const PageTitle = styled.h1`
  color: #ffd700;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.875rem;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const FirstProjectPage = () => (
  <PageContainer>
    <ContentWrapper>
      <PageTitle>{FirstprojectData.title}</PageTitle>
      <ProjectCard {...FirstprojectData} />
    </ContentWrapper>
  </PageContainer>
);
