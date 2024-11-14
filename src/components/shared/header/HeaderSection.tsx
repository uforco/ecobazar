import React from "react";
import TopBarSection from "./TopBarSection/TopBarSection";
import HeaderMiddleSection from "./HeaderMiddleSection/HeaderMiddleSection";
import HeaderMenuSection from "./HeaderMenusSection/HeaderMenuSection";
import MaxWidthControls from "../MaxWidthControls";

const HeaderSection = () => {
  return (
    <div>
        <TopBarSection />
        <HeaderMiddleSection />
        <HeaderMenuSection />
    </div>
  );
};

export default HeaderSection;
