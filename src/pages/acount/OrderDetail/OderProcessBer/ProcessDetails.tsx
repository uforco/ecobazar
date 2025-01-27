import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
interface Props {
  pross: number;
  rang: number;
  title: string;
  processNumber: string;
  complateProcess: number;
}

function ProcessDetails(props: Props) {
  const { pross, rang, title, processNumber, complateProcess } = props;

  return (
    <div className=" flex justify-center items-center flex-col ">
      <div
        className={`  w-10 h-10 ${
          pross >= rang
            ? " bg-primary text-white "
            : " border-Primary bg-white text-Primary border border-dashed divide-dashed "
        } rounded-full flex justify-center items-center relative `}
      >
        { pross >= complateProcess? <IoCheckmarkSharp></IoCheckmarkSharp> : processNumber}
      </div>
      <p
        className={`${
          pross >= rang ? "text-Primary" : "text-gray-700"
        }  capitalize font-semibold mt-1 text-sm `}
      >
        {title}
      </p>
    </div>
  );
}

export default ProcessDetails;
