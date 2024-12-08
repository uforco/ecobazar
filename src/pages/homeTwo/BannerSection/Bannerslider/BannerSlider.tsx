'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './bannerstyles.scss';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GoArrowRight } from "react-icons/go";


const BannerSlider = ({className: classname}:{className?: string}) => {
    return (
        <div className={classname} >
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="bannerSlider"
            >
                <SwiperSlide> <CardSlider></CardSlider> </SwiperSlide>
                <SwiperSlide> <CardSlider></CardSlider> </SwiperSlide>
                <SwiperSlide> <CardSlider></CardSlider> </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;


const CardSlider = () => {
    return(
        <div className=" relative " >
            <div className=' absolute top-0 left-10 w-full h-full flex items-center ' >
                <div className=" w-1/2  " >
                    <h1 className=' text-5xl font-semibold leading-tight mb-3 text-white ' >Fresh & Healthy Organic Food </h1>
                    <div className=' border-l-2 border-Primary ' >
                        <p className=' w-[157px] ml-3 text-gray-400 uppercase font-medium text-2xl ' >Sale Up to <span className=' text-white ' >48%</span> off</p>
                    </div>
                    <Button className=' bg-Primary rounded-full w-[192px] h-[51px] mt-8 ' >Shop now <GoArrowRight></GoArrowRight> </Button>
                </div>
            </div>
            <Image className='w-full h-[560px] ' src={'/images/home/BannerSlider.png'} alt={''} width={900} height={560}  ></Image>
        </div>
    )
}