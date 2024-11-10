import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
const SliderCard = () => {
    return (
        <div className=" relative flex items-center w-full  p-10  " >
            <div className=' w-[596px] z-30 text-left ' >
                <h3 className="  font-poppins  text-Primary " >Welcome to shopery</h3>
                <h1 className=' text-7xl font-bold leading-tight ' >Fresh & Healthy Organic Food</h1>
                <p className=' font-poppins text-[32px]  ' >Sale up to <span className=' font-semibold text-warning ' >30% OFF</span></p>
                <p className=' text-gray-500/70 ' >Free shipping on all your order. we deliver, you enjoy</p>
                <Button className=' bg-Primary mt-6 cursor-pointer rounded-full px-8 py-5 flex items-center  ' >Shop now <span  ><GoArrowRight className=' text-5xl ' ></GoArrowRight></span></Button>
            </div>
            <div className=' absolute z-10 w-full flex justify-end right-0 top-1/2 -translate-y-1/2 ' >
                <Image className=' w-3/5 ' src='/images/home/slider1.png' alt="" width={720} height={560} ></Image>
            </div>
        </div> 
    );
};

export default SliderCard;