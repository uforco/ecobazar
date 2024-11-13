import Link from "next/link";
import React from "react";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";
import HeadingTitle from "../HeadingTitle";

const DownloadApp = () => {
  return (
    <div className=" col-span-2  ">
      <HeadingTitle className=" text-xl mb-5 ">
        Download our Mobile App
      </HeadingTitle>
      <div className=" flex items-center gap-2 ">
        <Link href={""}>
          <div className=" flex items-center gap-2 cursor-pointer w-[154px] h-[58px] bg-gray-800 p-1 px-2 rounded ">
            <div className=" text-3xl  text-white ">
              <IoLogoApple></IoLogoApple>
            </div>
            <div>
              <p className=" text-[11px] font-normal text-gray-300 ">
                Download on the
              </p>
              <HeadingTitle className=" text-base text-white ">
                App Store
              </HeadingTitle>
            </div>
          </div>
        </Link>
        <Link href={""}>
          <div className=" flex items-center cursor-pointer gap-2 w-[154px] h-[58px] bg-gray-800 p-1 px-2 rounded ">
            <div className=" text-3xl text-white ">
              <IoLogoGooglePlaystore></IoLogoGooglePlaystore>
            </div>
            <div>
              <p className=" text-[11px] font-normal text-gray-300 ">
                Download on the
              </p>
              <HeadingTitle className=" text-base text-white ">
                Google play
              </HeadingTitle>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DownloadApp;
