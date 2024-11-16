import React, { ReactNode } from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@mynaui/icons-react";
import Image from 'next/image';

const OfferCardSection = () => {
  return (
    <div>
      <MaxWidthControls>
        <div className=" grid grid-cols-3 mb-[100px] ">
            <CardWapper bgImage={'/images/home/offer/vegetables.png'} >
                <h2 className=" text-white mt-10 uppercase ">BEST DEALS</h2>
                <h1 className=" text-3xl font-bold text-white my-3 mb-4 ">
                    Sale of the Month
                </h1>
                <div className=" flex justify-between items-center text-3xl text-white w-[290px] ">
                    <div className=" text-center ">
                    <p className=" text-2xl ">00</p> <p className=" text-xs ">DAYS</p>{" "}
                    </div>
                    :
                    <div className=" text-center ">
                    <p className=" text-2xl ">02</p>{" "}
                    <p className=" text-xs ">HOURS</p>{" "}
                    </div>
                    :
                    <div className=" text-center ">
                    <p className=" text-2xl ">18</p> <p className=" text-xs ">MINS</p>{" "}
                    </div>
                    :
                    <div className=" text-center ">
                    <p className=" text-2xl ">46</p> <p className=" text-xs ">SECS</p>{" "}
                    </div>
                </div>
                <Button className=" mt-8 rounded-full px-7 py-5 bg-white hover:text-white text-Primary ">
                    Shop New
                    <span>
                    <ArrowRight />
                    </span>
                </Button>
            </CardWapper>
            <CardWapper  bgImage={"/images/home/offer/meat.png"}>
                <h2 className=" text-white mt-10 uppercase " >85% Fat Free</h2>
                <h1 className=" text-3xl font-bold text-white my-3 " >Low-Fat Meat</h1>
                <p className=" text-white font-light " >Started at <span className=" text-warning font-semibold " >$79.99</span></p>
                <Button className=" mt-8 rounded-full px-7 py-5 bg-white hover:text-white text-Primary ">
                    Shop New
                    <span>
                    <ArrowRight />
                    </span>
                </Button>
            </CardWapper>
            <CardWapper  bgImage={"/images/home/offer/fruit.png"}>
                <h2 className=" text-black mt-10 uppercase " >Summer Sale</h2>
                <h1 className=" text-3xl font-bold text-black my-3 " >Low-Fat Meat</h1>
                <p className=" text-black font-light " >Up to <span className=" text-warning font-semibold bg-black p-2 rounded " >64% OFF</span></p>
                <Button className=" mt-8 rounded-full px-7 py-5 bg-white hover:text-white text-Primary ">
                    Shop New
                    <span>
                    <ArrowRight />
                    </span>
                </Button>
            </CardWapper>
        </div>
      </MaxWidthControls>
    </div>
  );
};

export default OfferCardSection;

const CardWapper = ({children, bgImage}:{children: ReactNode, bgImage: string}) => {
  return (
    <div className=" flex justify-center ">
      <div className={' w-[424px] h-[536px] relative overflow-hidden after:absolute after:w-full after:h-full after:z-40 after:left-0 after:top-0 after:bg-gray-900/15 after:content-[""] flex flex-col items-center rounded-lg  '}>
        <div className=" absolute left-0 top-0 w-full h-full z-20 " >
            <Image src={bgImage} width={500} height={550} alt={""}></Image>
        </div>
        <div className=" text-center z-50 ">
            {children}
        </div>
      </div>
    </div>
  );
};
