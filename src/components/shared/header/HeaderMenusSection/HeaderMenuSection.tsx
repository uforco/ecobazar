import React from "react";
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import ProfileAccount from "./profile/ProfileAccount";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Badge } from "@/components/ui/badge";
import { FaRegHeart } from "react-icons/fa";
import Manu from "../../Manu/Manu";

const HeaderMenuSection = () => {
  return (
  <div>
    <MaxWidthControls >
      <div className=" flex justify-between items-center bg-gray-900 py-2 px-1  " >
          <div className=" " >
            <Manu ></Manu>
          </div>
        {/* right site */}
          <div className=" hidden sm:flex items-center gap-2    ">
            <div className="  cursor-pointer text-white text-[22px] p-2  relative rounded-full flex justify-center items-center " >
              <FaRegHeart></FaRegHeart>
            </div>
            <div className="  cursor-pointer text-white text-[22px] p-2  relative rounded-full flex justify-center items-center " >
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
