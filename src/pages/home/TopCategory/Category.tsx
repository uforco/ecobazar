'use client'
import React from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./style.scss"
import CategoryCard from "./CategoryCard";
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from "@mynaui/icons-react";

const Category = () => {


    const categorylist = [
        {
            image: '/images/home/category/Vegetable.png',
            name: 'Vegetable',
            products: '165'    
        },
        {
            image: '/images/home/category/fruits.png',
            name: 'Fresh fruit',
            products: '137'    
        },
        {
            image: '/images/home/category/fish.png',
            name: 'River Fish',
            products: '34'    
        },
        {
            image: '/images/home/category/meat.png',
            name: 'Meat',
            products: '165'    
        },
        {
            image: '/images/home/category/soft-drink.png',
            name: 'Water and Drinks',
            products: '48'    
        },
        {
            image: '/images/home/category/snacks.png',
            name: 'Snacks',
            products: '165'    
        }
    ]



  return (
    <div className=" my-14 " >
      <MaxWidthControls className=" max-w-[1490px] overflow-hidden " >
            <div className=" px-4 " >
                <div>
                    <h2 className=' text-center text-[40px] font-semibold mb-3 ' >Top Category</h2>
                </div>
                <div className={` flex justify-between items-center relative `} >
                    <button id="custom-prev" className="  w-12 h-11 overflow-hidden rounded-full border border-gray-300 flex justify-center items-center " > <ArrowLeft /> </button>
                    <Swiper className=" ourCategory "
                        slidesPerView={5}
                        // loop={true}
                        // pagination={true}
                        navigation={{
                            prevEl: '#custom-prev',  // ID selector for prev button
                            nextEl: '#custom-next',  // ID selector for next button
                          }}
                        initialSlide={1}
                        pagination={{
                            // clickable: true,              // Makes bullets clickable
                            dynamicBullets: true,         // Shows limited bullets dynamically
                        }}
                        modules={[Pagination, Navigation]}
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
                            slidesPerView: 4, // Show 3 slides on screens 768px and above
                            },
                            1280: {
                            slidesPerView: 5, // Show 5 slides on screens 1024px and above
                            },
                            1536: {
                            slidesPerView: 6, // Show 5 slides on screens 1024px and above
                            },
                        }}
                    >

                        {
                            categorylist.map((catagory) => <SwiperSlide key={catagory.name} >
                            <CategoryCard catagory={catagory} ></CategoryCard>
                        </SwiperSlide> )
                        }


                    </Swiper>
                    <button id="custom-next" className="  w-12 h-11 overflow-hidden rounded-full border border-gray-300 flex justify-center items-center " > <ArrowRight /> </button>
                </div>
            </div>
      </MaxWidthControls>
    </div>
  );
};

export default Category;


