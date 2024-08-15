import React from "react";
import styled from "styled-components";
import { studyEntries } from "../../Data.ts/ProfileData";
import { StudyList } from "../../Organisms/Study/StudyList";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 70px auto 0;
  padding: 40px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const PageTitle = styled.h1`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 12px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #e74c3c;
  }
`;

export const StudyLogPage: React.FC = () => (
  <PageContainer>
    <PageTitle>My Study Log</PageTitle>
    <StudyList entries={studyEntries} />
  </PageContainer>
);
