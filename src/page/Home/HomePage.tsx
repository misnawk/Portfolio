import React from "react";
import MyProfile from "../../Organisms/Home/MyProfile";
import {
  ProfileImgData,
  ProfileInfoData,
  ProfileIntroductionData,
} from "../../Data.ts/ProfileData";

const HomePage: React.FC = () => {
  return (
    <div>
      <MyProfile
        profileInfo={ProfileInfoData}
        profileImg={ProfileImgData}
        profileIntroduction={ProfileIntroductionData}
      />
    </div>
  );
};

export default HomePage;
