// molecules/StudyCard.tsx
import React from "react";
import styled from "styled-components";
import { StudyProps } from "../../Type/Type";
import { StudyImage } from "../../Atoms/Study/StudyImage";
import { StudyTitle } from "../../Atoms/Study/StudyTitle";
import { StudyDescription } from "../../Atoms/Study/StudyDescription";
import { StudyDate } from "../../Atoms/Study/StudyDate";

const Card = styled.a`
  display: block;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 20px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ContentWrapper = styled.div`
  margin-top: 12px;
`;

export const StudyCard: React.FC<StudyProps> = ({
  title,
  description,
  imageUrl,
  date,
  url,
}) => (
  <Card href={url} target="_blank" rel="noopener noreferrer">
    <StudyImage src={imageUrl} alt={title} />
    <ContentWrapper>
      <StudyTitle>{title}</StudyTitle>
      <StudyDescription>{description}</StudyDescription>
      <StudyDate>{date}</StudyDate>
    </ContentWrapper>
  </Card>
);
