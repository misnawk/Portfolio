import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px 0;
  color: #666;
  font-size: 1.1em;
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-weight: bold;
  width: 80px;
  color: #444;
`;

type InfoItemProps = {
  label: string;
  value: string | number;
};

const InfoItem = ({ label, value }: InfoItemProps) => (
  <Container>
    <Label>{label}:</Label> {value}
  </Container>
);

export default InfoItem;

// 프로필 정보 입력 정의
