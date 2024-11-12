"use client";
import React from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./styles.scss";
// import CategoryCard from "./CategoryCard";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "@mynaui/icons-react";
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { TiStar } from "react-icons/ti";

const Testimonial = () => {
  const categorylist = [
    {
      image: "/images/home/category/Vegetable.png",
      name: "Vegetable",
      products: "165",
    },
    {
      image: "/images/home/category/fruits.png",
      name: "Fresh fruit",
      products: "137",
    },
    {
      image: "/images/home/category/fish.png",
      name: "River Fish",
      products: "34",
    },
    {
      image: "/images/home/category/meat.png",
      name: "Meat",
      products: "165",
    },
    {
      image: "/images/home/category/soft-drink.png",
      name: "Water and Drinks",
      products: "48",
    },
    {
      image: "/images/home/category/snacks.png",
      name: "Snacks",
      products: "165",
    },
  ];

  return (
    <div className=" my-[80px] py-[90px] bg-hard_primary/5 ">
      <MaxWidthControls className=" max-w-[1360px] overflow-hidden ">
        <div >
          <div className=" flex justify-between items-end mb-8 ">
            <h2 className=" text-center text-[40px] font-semibold ">
              Client Testimonnial
            </h2>
            <div className=" flex justify-between gap-4  ">
              <button
                id="testimonial-slider-btn-prev"
                className="  w-12 bg-white h-12 overflow-hidden hover:bg-Primary hover:text-white rounded-full border border-gray-300 flex justify-center items-center "
              >
                <ArrowLeft />
              </button>
              <button
                id="testimonial-slider-btn-next"
                className="  w-12 h-12 bg-white overflow-hidden hover:bg-Primary hover:text-white rounded-full border border-gray-300 flex justify-center items-center "
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className={` flex justify-between items-center relative `}>
            <Swiper
              className=" testimonial  "
              slidesPerView={3}
              // loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: "#testimonial-slider-btn-prev", // ID selector for prev button
                nextEl: "#testimonial-slider-btn-next", // ID selector for next button
              }}
              initialSlide={1}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 1, // Show 1 slide on screens smaller than 640px
                },
                640: {
                  slidesPerView: 2, // Show 1 slide on screens smaller than 640px
                },
                768: {
                  slidesPerView: 3, // Show 2 slides on screens 640px and above
                },
                1024: {
                  slidesPerView: 3, // Show 3 slides on screens 768px and above
                },
                1280: {
                  slidesPerView: 3, // Show 5 slides on screens 1024px and above
                },
              }}
            >
              {categorylist.map((catagory) => (
                <SwiperSlide key={catagory.name}>
                  {/* <CategoryCard catagory={catagory} ></CategoryCard> */}
                  <TestimonialClientReviweCard></TestimonialClientReviweCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </MaxWidthControls>
    </div>
  );
};

export default Testimonial;

const TestimonialClientReviweCard = () => {
  return (
    <div className=" flex justify-center  w-full mb-10 ">
      <div className=" overflow-hidden w-[424px] shadow-gray-300/40 shadow-xl p-6 rounded-lg cursor-pointer bg-white " >
        <div>
            <Image src={"/images/home/testimonial/dulbequt.png"} width={30} height={30} alt={""}></Image>
        </div>
        <p className=" text-left my-3 text-sm " >Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
        <div className=" flex justify-between items-center " >
            <div className=" flex items-center gap-2 " >
                <Avatar className=" w-14 h-14 " >
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className=" text-left " >
                    <CardTitle className=" text-base font-medium " > Robert Fox </CardTitle>
                    <p className=" text-sm text-gray-500 " >Customer</p>
                </div>
            </div>
            <div>
                <CardDescription className=" flex items-center " >
                    <TiStar className=" size-7 text-warning " ></TiStar>
                    <TiStar className=" size-7 text-warning " ></TiStar>
                    <TiStar className=" size-7 text-warning " ></TiStar>
                    <TiStar className=" size-7 text-gray-300 " ></TiStar>
                    <TiStar className=" size-7 text-gray-300 " ></TiStar>
                </CardDescription>
            </div>
        </div>
      </div>
    </div>
  );
};
