import React from "react";

import {
  ProfileImgData,
  ProfileInfoData,
  ProfileIntroductionData,
} from "../Data.ts/ProfileData";
import MyProfile from "../Organisms/Home/MyProfile";

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
