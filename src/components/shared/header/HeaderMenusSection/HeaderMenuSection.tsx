import React from "react";
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import ProfileAccount from "./profile/ProfileAccount";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Badge } from "@/components/ui/badge";
import { FaRegHeart } from "react-icons/fa";

const HeaderMenuSection = () => {
  return (
  <div>
    <MaxWidthControls>
      <div className=" flex justify-between items-center bg-black py-2 px-1 " >
          <div>fxtksedt</div>
          <div className=" flex items-center gap-2 ">
            <div className=" bg-black cursor-pointer text-white text-[22px] p-2  relative rounded-full flex justify-center items-center " >
              <FaRegHeart></FaRegHeart>
            </div>
            {/* wish-list */}
            <div className=" bg-black cursor-pointer text-white text-2xl p-2  relative rounded-full flex justify-center items-center " >
              <Badge className=" z-40 absolute w-4 h-4 p-0 flex justify-center items-center rounded-full right-1 top-1 m-0  font-thin  " >2</Badge>
              <HiOutlineShoppingBag></HiOutlineShoppingBag>
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
