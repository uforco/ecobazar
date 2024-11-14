import React from "react";
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import ProfileAccount from "./profile/ProfileAccount";

const HeaderMenuSection = () => {
  return (
  <div>
    <MaxWidthControls>
      <div className=" flex justify-between items-center " >
          <div>fxtksedt</div>
          <div>
            <ProfileAccount></ProfileAccount>
          </div>
      </div>
    </MaxWidthControls>
  </div>
)
};

export default HeaderMenuSection;
