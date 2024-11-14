import React from "react";
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import ProfileAccount from "./profile/ProfileAccount";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const HeaderMenuSection = () => {
  return (
  <div>
    <MaxWidthControls>
      <div className=" flex justify-between items-center " >
          <div>fxtksedt</div>
          <div className=" flex items-center gap-2 " >
            <div className=" bg-black text-white text-2xl p-2 overflow-hidden relative rounded-full flex justify-center items-center " >
              <HiOutlineShoppingBag></HiOutlineShoppingBag>
            </div>
            <ProfileAccount></ProfileAccount>
          </div>
      </div>
    </MaxWidthControls>
  </div>
)
};

export default HeaderMenuSection;
