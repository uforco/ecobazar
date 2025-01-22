"use client";
import React from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import TeamCard from "./TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

interface Props {}

function OurTeam(props: Props) {
  const {} = props;

  return (
    <div className=" bg-slate-100 pt-20 pb-10 ">
      <MaxWidthControls>
        <div className=" w-full flex justify-center  " >
            <div className=" max-w-[640px] text-center " >
                <h2 className="text-5xl font-semibold mb-5 " >Our Awesome Team</h2>
                <p className="text-gray-500" >Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
            </div>
        </div>
        <div
          className={` flex justify-between items-center relative py-10 w-full `}
        >
          <Swiper
            className=" testimonial w-full  "
            slidesPerView={4}
            // loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: "#testimonial-slider-btn-prev", // ID selector for prev button
              nextEl: "#testimonial-slider-btn-next", // ID selector for next button
            }}
            initialSlide={1}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1, // Show 1 slide on screens smaller than 640px
              },
              640: {
                slidesPerView: 2, // Show 1 slide on screens smaller than 640px
              },
              768: {
                slidesPerView: 2, // Show 2 slides on screens 640px and above
              },
              1024: {
                slidesPerView: 3, // Show 3 slides on screens 768px and above
              },
              1280: {
                slidesPerView: 4, // Show 3 slides on screens 1024px and above
              }
            }}
          >
            <SwiperSlide>
              <TeamCard></TeamCard>
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard></TeamCard>
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard></TeamCard>
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard></TeamCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </MaxWidthControls>
    </div>
  );
}

export default OurTeam;
