import React from "react";
import BannerCategory from "./BannerCategory/BannerCategory";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import BannerSlider from "./Bannerslider/BannerSlider";

const BannerSection = () => {
  return (
    <MaxWidthControls>
      <div className=" grid grid-cols-12 gap-4 my-4 " >
        <BannerCategory className=" border  col-span-3 " ></BannerCategory>
        <BannerSlider className=" border col-span-9 " ></BannerSlider>
      </div>
    </MaxWidthControls>
  );
};

export default BannerSection;
