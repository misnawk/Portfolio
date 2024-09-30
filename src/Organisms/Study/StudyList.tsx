// organisms/StudyList.tsx
import React from "react";
import styled from "styled-components";
import { StudyProps } from "../../Type/Type";
import { StudyCard } from "../../Molecules/Study/StudyCard";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

interface StudyListProps {
  entries: StudyProps[];
}

export const StudyList: React.FC<StudyListProps> = ({ entries }) => (
  <ListContainer>
    {entries.map((entry) => (
      <StudyCard key={entry.title} {...entry} />
    ))}
  </ListContainer>
);
