import React from "react";
import BannerCategory from "./BannerCategory/BannerCategory";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import BannerSlider from "./Bannerslider/BannerSlider";
import DaliverySystem from "./dalivery/DaliverySystem";

const BannerSection = () => {
  return (
    <MaxWidthControls>
      <div className=" my-4 mb-10 " >
        <div className=" grid grid-cols-12 gap-4 " >
          <BannerCategory className=" border  col-span-3 " ></BannerCategory>
          <BannerSlider className=" border col-span-9 " ></BannerSlider>
        </div>
        <div>
          <DaliverySystem></DaliverySystem>
        </div>
      </div>
    </MaxWidthControls>
  );
};

export default BannerSection;
