import React from "react";
import { FaCheck } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { GiTreeBranch } from "react-icons/gi";
import ReviewVideo from './ReviewVideo';
import LeftSideVideosec from './LeftSideVideosec';

const Descriptions = ({descriptions, discount}:{descriptions: string; discount: string | number}) => {
  const greatrat = [
    "100 g of fresh leaves provides.",
    "Aliquam ac est at augue volutpat elementum.",
    "Quisque nec enim eget sapien molestie.",
    "Proin convallis odio volutpat finibus posuere.",
  ];

  return (
    <div className=" flex justify-between w-full overflow-hidden gap-5 ">
      <div className=" w-full">
        {descriptions}
      </div>
      {/* left site */}
      <LeftSideVideosec discount={discount}></LeftSideVideosec>
    </div>
  );
};

export default Descriptions;
