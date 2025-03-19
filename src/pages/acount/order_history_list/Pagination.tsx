import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = () => {
    return (
        <div className=" flex justify-center gap-5 items-center p-5 ">
        <button className=" border w-10 h-10 rounded-full flex justify-center items-center text-xl text-gray-500 ">
          <IoIosArrowBack></IoIosArrowBack>{" "}
        </button>
        <ul className=" flex gap-2 text-gray-700 transition-all ">
          <li className=" cursor-pointer hover:bg-Primary hover:text-white text-white w-8 h-8 rounded-full flex justify-center items-center bg-Primary ">
            1
          </li>
          <li className=" cursor-pointer hover:bg-Primary hover:text-white w-8 h-8 rounded-full flex justify-center items-center ">
            2
          </li>
          <li className=" cursor-pointer hover:bg-Primary hover:text-white w-8 h-8 rounded-full flex justify-center items-center ">
            3
          </li>
        </ul>
        <button className=" border w-10 h-10 rounded-full flex justify-center items-center text-xl  ">
          <IoIosArrowForward></IoIosArrowForward>{" "}
        </button>
      </div>
    );
};

export default Pagination;