import React from "react";

import MaxWidthControls from '@/components/shared/MaxWidthControls';
import ProfileAccount from "./profile/ProfileAccount";
import { FaRegHeart } from "react-icons/fa";
// import Manu from "../../Manu/Manu";
import AllCategorysec from "../../Manu/allCatagorySection/AllCategorysec";
import dynamic from "next/dynamic";
import PopupShoppingCard from "../../PopupShoppingCard/PopupShoppingCard";
import Link from "next/link";


const Manu = dynamic(()=> import('../../Manu/Manu'))

const HeaderMenuSection = () => {
  return (
  <div>
    <MaxWidthControls >
      <div className=" flex justify-between items-center bg-gray-900   h-12  " >
          <div className=" flex items-center h-full  " >
            <AllCategorysec></AllCategorysec>
            <Manu ></Manu>
          </div>
        {/* right site */}
          <div className=" flex items-center gap-2 mx-1  ">
            <Link href={"/wishlist"} className="  cursor-pointer text-white text-[22px] p-2  relative rounded-full flex justify-center items-center "  >
              <FaRegHeart></FaRegHeart>
            </Link>
            <div className="  cursor-pointer text-white text-[22px] p-2  relative rounded-full flex justify-center items-center " >
              <PopupShoppingCard/>
            </div>
            {/* profile */}
            <ProfileAccount></ProfileAccount>
          </div>
      </div>
    </MaxWidthControls>
  </div>
)
};

export default HeaderMenuSection;
