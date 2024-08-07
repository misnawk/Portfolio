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
