'use client'
import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import ProductCard from '@/components/shared/allCard/ProductCard';



import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// Import Swiper styles
import "swiper/css";
import "./sliderStyle.scss";
import SummerSale from './summer_sale/SummerSale';



const FeaturedProducts = () => {
    return (
        <div className={`  mb-6  `} >
            <MaxWidthControls className=' overflow-hidden ' >
                <div>
                    <h2 className=' text-center text-[40px] font-semibold ' >Our Featured Products</h2>
                </div>
                <div className={` flex justify-between items-center `} >
                    <Swiper className="mySwiper myfeature "
                        slidesPerView={5}
                        // loop={true}
                        // pagination={true}
                        initialSlide={2}
                        pagination={{
                            // clickable: true,              // Makes bullets clickable
                            dynamicBullets: true,         // Shows limited bullets dynamically
                        }}
                        modules={[Pagination]}
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
                        }}
                    >
                        <SwiperSlide>
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <SummerSale></SummerSale>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default FeaturedProducts;