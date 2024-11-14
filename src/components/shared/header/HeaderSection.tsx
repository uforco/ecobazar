import React from "react";
import TopBarSection from "./TopBarSection/TopBarSection";
import HeaderMiddleSection from "./HeaderMiddleSection/HeaderMiddleSection";
import HeaderMenuSection from "./HeaderMenusSection/HeaderMenuSection";
import MaxWidthControls from "../MaxWidthControls";

const HeaderSection = () => {
  return (
    <div>
      <MaxWidthControls className="max-w-[1920px] mx-auto">
        <TopBarSection />
        <HeaderMiddleSection />
        <HeaderMenuSection />
      </MaxWidthControls>
    </div>
  );
};

export default HeaderSection;
