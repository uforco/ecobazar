import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { GiTreeBranch } from "react-icons/gi";
import ReviewVideo from "./ReviewVideo";

const LeftSideVideosec = ({ discount }: { discount: string | number }) => {
  return (
    <div className=" w-full">
      <div className=" w-full flex justify-center   ">
        <ReviewVideo></ReviewVideo>
      </div>
      <div className=" w-full flex justify-center mt-4 ">
        <div className=" w-[536px] overflow-hidden flex justify-between border py-4 px-2 rounded-md ">
          <div className=" flex items-center gap-1 ">
            <div className=" text-Primary text-4xl ">
              <CiDiscount1></CiDiscount1>
            </div>
            <div>
              <h2 className=" text-black font-semibold ">{discount}% Discount</h2>
              <p className=" text-black/90 "> Save your {discount}% money with us</p>
            </div>
          </div>
          <div className=" flex items-center gap-1 ">
            <div className=" text-Primary text-4xl ">
              <GiTreeBranch></GiTreeBranch>
            </div>
            <div>
              <h2 className=" text-black font-semibold ">100% Organic</h2>
              <p className=" text-black/90 ">100% Organic Vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideVideosec;
