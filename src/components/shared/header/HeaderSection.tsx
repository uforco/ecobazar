import React from "react";
import TopBarSection from "./TopBarSection/TopBarSection";
import HeaderMiddleSection from "./HeaderMiddleSection/HeaderMiddleSection";
import HeaderMenuSection from "./HeaderMenusSection/HeaderMenuSection";
import MaxWidthControls from "../MaxWidthControls";

const HeaderSection = () => {
  return (
    <div>
      <MaxWidthControls className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <TopBarSection />
        <HeaderMiddleSection />
        <HeaderMenuSection />
      </MaxWidthControls>
    </div>
  );
};

export default HeaderSection;
