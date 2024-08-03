import React from "react";
import MyProfile from "../Organisms/MyProfile";
import {
  ProfileImgData,
  ProfileInfoData,
  ProfileIntroductionData,
} from "../Data.ts/ProfileData";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>소개</h1>
      <MyProfile
        profileInfo={ProfileInfoData}
        profileImg={ProfileImgData}
        profileIntroduction={ProfileIntroductionData}
      />
    </div>
  );
};

export default HomePage;
