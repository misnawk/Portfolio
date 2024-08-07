import React from "react";
import styled from "styled-components";
import MyProfile from "../../Organisms/Home/MyProfile";
import {
  ProfileImgData,
  ProfileInfoData,
  ProfileIntroductionData,
} from "../../Data.ts/ProfileData";

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px); // 화면 높이에서 네비게이션 높이 뺌
  margin-top: 70px; // 네비게이션 높이만큼 여백
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <MyProfile
        profileInfo={ProfileInfoData}
        profileImg={ProfileImgData}
        profileIntroduction={ProfileIntroductionData}
      />
    </HomePageContainer>
  );
};

export default HomePage;