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
import Link from 'next/link';
import { ArrowRight } from '@mynaui/icons-react';

const NewestProducts = () => {
    return (
        <div className={`  mb-6  `} >
            <MaxWidthControls className=' overflow-hidden ' >
                <div className=' flex justify-between items-end mb-1 ' >
                    <h2 className=' text-center text-[40px] font-semibold ' >Newest Products</h2>
                    <Link className=' flex items-center gap-1 text-Primary capitalize ' href={''}>View All <span><ArrowRight /></span> </Link>
                </div>
                <div className={` flex justify-between items-center `} >

                <Swiper className="mySwiper myNewestProducts "
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
            </MaxWidthControls>
        </div>
    );
};

export default NewestProducts;