import Image from "next/image";
import React from "react";
import { IoMdPlay } from "react-icons/io";
import videoImg from "../../../../../public/images/categores/videoImg.png";
interface Props {}

function ReviewVideo(props: Props) {
  const {} = props;

  return (
    <div className=" w-[536px] overflow-hidden h-[300px] rounded-md relative ">
      <div className=" w-full h-full absolute bg-black/10 flex justify-center items-center top-0 left-0 ">
        <div className=" text-2xl flex cursor-pointer justify-center items-center w-12 h-12 text-white bg-Primary p-2 rounded-full  ">
          <IoMdPlay className=" ml-1 "></IoMdPlay>
        </div>
      </div>
      <Image className=" w-full" src={videoImg} alt={""}></Image>
    </div>
  );
}

export default ReviewVideo;
