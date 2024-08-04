import React from "react";
import styled from "styled-components";
import { ProfileImgProps } from "../../Type/Type";

const Image = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #f0f0f0;
`;

//ProfileImage 프롭스 지정
const ProfileImage = ({ icon }: ProfileImgProps) => (
  <Image src={icon} alt="Profile" />
);

export default ProfileImage;
