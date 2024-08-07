import React from "react";
import styled from "styled-components";
import {
  ProfileImgProps,
  ProfileInfoProps,
  ProfileIntroductionProps,
} from "../../Type/Type";
import ProfileImage from "../../Atoms/Home/ProfileImage";
import ProfileIntroduction from "../../Molecules/Home/ProfileIntroduction";
import ProfileInfo from "../../Molecules/Home/ProfileInfo";

const Container = styled.div`
  overflow-y: hidden;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  width: fit-content;
  margin: 50px auto;
  padding: 40px;
  display: flex;
  gap: 60px;
  background-color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

type MyProfileProps = {
  profileInfo: ProfileInfoProps;
  profileImg: ProfileImgProps;
  profileIntroduction: ProfileIntroductionProps;
};

const MyProfile = ({
  profileInfo,
  profileImg,
  profileIntroduction,
}: MyProfileProps) => (
  <Container>
    <ImageContainer>
      <ProfileImage icon={profileImg.icon} />
    </ImageContainer>

    <ContentContainer>
      <ProfileIntroduction {...profileIntroduction} />

      <Divider />
      <ProfileInfo {...profileInfo} />
    </ContentContainer>
  </Container>
);

export default MyProfile;
