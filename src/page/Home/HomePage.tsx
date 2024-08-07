import React from "react";
import styled from "styled-components";
import MyProfile from "../../Organisms/Home/MyProfile";
import {
  ProfileImgData,
  ProfileInfoData,
  ProfileIntroductionData,
} from "../../Data.ts/ProfileData";

const HomePage = () => {
  return (
    <MyProfile
      profileInfo={ProfileInfoData}
      profileImg={ProfileImgData}
      profileIntroduction={ProfileIntroductionData}
    />
  );
};

export default HomePage;
