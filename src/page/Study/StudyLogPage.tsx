import React from "react";
import styled from "styled-components";
import { studyEntries } from "../../Data.ts/ProfileData";
import { StudyList } from "../../Organisms/Study/StudyList";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 70px auto 0; // 상단 네비게이션 높이만큼 여백
  padding: 40px 20px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const StudyLogPage: React.FC = () => (
  <PageContainer>
    <PageTitle>My Study Log</PageTitle>
    <StudyList entries={studyEntries} />
  </PageContainer>
);
