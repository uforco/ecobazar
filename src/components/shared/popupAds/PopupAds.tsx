"use client";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import HeadingTitle from "../HeadingTitle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { IoClose } from "react-icons/io5";

const PopupAds = () => {
    const [openAds, setOpenAds] = useState<boolean>(false)
    const doNotShowThisWindow = (e: boolean) => {
        if(e) sessionStorage.setItem('popupads', 'false')
    }
    const closeAds = () => {
        const body: any = document.querySelector("body")
        body.classList.remove("fixed")
        setOpenAds(false)
    }

  useEffect(() => {
    const Ads: any = sessionStorage.getItem('popupads')
    const body: any = document.querySelector("body");
    const timeoutId = setTimeout(() => {
        if(!Ads) {
            sessionStorage.setItem('popupads', 'true')
            body.classList.add("fixed");
            setOpenAds(true)
        }
        if(Ads === 'true'){
            body.classList.add("fixed");
            setOpenAds(true)
        }
        if(Ads === "false"){
            body.classList.remove("fixed")
            setOpenAds(false)
        }
      }, 2000);

    return () => clearTimeout(timeoutId);

  }, [setOpenAds]);

  return (
    <div className={` ${openAds? "flex" : "hidden"} absolute top-0 left-0 h-screen w-screen bg-black/70 z-[200] justify-center items-center `}>
      <div className=" flex bg-white p-2 rounded relative  items-center overflow-hidden ">
        <div className=" absolute right-0 top-0  " >
            <button onClick={closeAds} className=" bg-transparent text-gray-500 shadow-none p-3   " >
                <IoClose className=" w-6 h-6 " ></IoClose>
            </button>
        </div>
        <div>
          <Image
            src={"/images/popupAds/BG.png"}
            width={354}
            height={380}
            alt={""}
          ></Image>
        </div>
        <div className=" flex justify-center px-12 ">
            <ContaineBox>
                <div className=" flex justify-center mt-12 ">
                    <div className="flex items-center space-x-2">
                    <Checkbox onCheckedChange={doNotShowThisWindow} id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Do not show this window
                    </label>
                    </div>
                </div>
            </ContaineBox>
        </div>
      </div>
    </div>
  );
};

export default PopupAds;




// ContaineBox

const ContaineBox = ({children}:{children: ReactNode}) => {
  return (
    <div className=" flex flex-col gap-2 w-96 ">
      <h1 className=" text-gray-900 text-[40px] font-semibold text-center leading-tight ">
        Subcribe to Our Newsletter
      </h1>
      <p className=" text-center text-gray-400 my-4 ">
        Subscribe to our newlletter and Save your{" "}
        <span className=" text-warning font-medium ">20% money</span> with
        discount code today.
      </p>
      <div className=" flex justify-between items-center h-12 border rounded-full focus:border-Primary ">
        <Input
          className=" rounded-full z-10 bg-white h-full border-none "
          type="email"
          placeholder="Enter your email"
        />
        <Button className=" rounded-full z-30 -ml-10 h-full bg-Primary px-8 py-[24px] ">
          Subscribe
        </Button>
      </div>
      {/* Dot show Ads this window */}
      {children}
    </div>
  );
};
