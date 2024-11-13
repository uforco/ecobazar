import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
const SliderCard = () => {
    return (
        <div className=" relative flex items-center w-full p-6 md:p-16" >
            <div className=' w-[596px] z-30 text-left ' >
                <h3 className="  font-poppins  text-Primary mb-2 " >Welcome to shopery</h3>
                <h1 className=' text-4xl md:text-7xl font-bold leading-tight ' >Fresh & Healthy Organic Food</h1>
                <p className=' font-poppins my-3 md:my-6 text-xl md:text-[32px]  ' >Sale up to <span className=' font-semibold text-warning ' >30% OFF</span></p>
                <p className='  md:text-gray-800/80  ' >Free shipping on all your order. we deliver, you enjoy</p>
                <Button className=' bg-Primary mt-6 cursor-pointer rounded-full px-8 py-5 flex items-center  ' >Shop now <span  ><GoArrowRight className=' text-5xl ' ></GoArrowRight></span></Button>
            </div>
            <div className=' absolute z-10 hidden w-full md:flex justify-end items-center right-0 top-0 ' >
                <Image className=' w-3/5 ' src='/images/home/slider1.png' alt="" width={720} height={560} ></Image>
            </div>
        </div> 
    );
};

export default SliderCard;