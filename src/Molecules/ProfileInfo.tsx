import React from "react";
import styled from "styled-components";
import InfoItem from "../Atoms/InfoItem";
import { ProfileInfoProps } from "../Type/Type";

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const ProfileInfo = ({
  name,
  age,
  email,
  phone,
  address,
}: ProfileInfoProps) => (
  <Container>
    <Name>{name}</Name>
    <InfoItem label="Age" value={age} />
    <InfoItem label="Email" value={email} />
    <InfoItem label="Phone" value={phone} />
    <InfoItem label="Address" value={address} />
  </Container>
);

export default ProfileInfo;
