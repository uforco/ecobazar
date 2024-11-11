'use client'
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import React, { useRef, useState } from "react";
import SliderCard from "./SliderCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// Import Swiper styles
import "swiper/css";
import "./styles.scss";
import BottomBanner from "./BottomBanner";


const Slider = () => {
  return (
    <MaxWidthControls className=" max-w-[1520px] " >
      <div className=" relative z-40 " >
      <BottomBanner></BottomBanner>
        <div className="  pb-20 sm:pb-24 lg:pb-28 xl:pb-16 pt-4 bg-hard_primary/15 z-30 mb-64 sm:mb-40 md:mb-32 xl:mb-24 rounded-lg " >
            <div className=" w-full h-[500px] flex items-center  ">
                {/* <SliderCard></SliderCard> */}
                <Swiper className="mySwiper "
                    loop={true}
                    pagination={true}
                    modules={[Pagination]}
                >
                    <SwiperSlide className=" " >
                        <SliderCard></SliderCard>
                    </SwiperSlide>
                    <SwiperSlide >
                        <SliderCard></SliderCard>
                    </SwiperSlide>
                    <SwiperSlide  >
                        <SliderCard></SliderCard>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
      </div>
    </MaxWidthControls>
  );
};

export default Slider;
