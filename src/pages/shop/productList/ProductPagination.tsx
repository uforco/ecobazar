"use client";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  nextPage: Function;
  privousPage: Function;
  totalePage: number;
  currentPage: number;
}

function ProductPagination(props: Props) {
  const { nextPage, privousPage, totalePage, currentPage } = props;
  const pagesNumder = Array.from(
    { length: totalePage < 3 ? 3 : totalePage },
    (_, index) => index + 1
  );

  console.log(totalePage);

  return (
    <div className=" flex justify-center gap-2 items-center p-5 mt-5 ">
      <button
        onClick={() => privousPage()}
       className=" border w-10 h-10 rounded-full flex justify-center items-center text-xl"
      >
        <IoIosArrowBack></IoIosArrowBack>
      </button>
      <div className=" flex justify-center gap-2 items-center min-w-[227px] " >
        {totalePage > 3 && currentPage > 3 ? (
          <>
            <span
              className={` cursor-pointer p-1 border  hover:bg-Primary hover:text-white transition-all duration-300 w-9 h-9 rounded-full flex justify-center items-center `}
            >
              {1}
            </span>
          </>
        ) : (
          ""
        )}
        {currentPage > 2 ? <span className=" text-2xl ">...</span> : ""}
        <ul className=" flex gap-2 text-gray-700 transition-all duration-300 ">
          {pagesNumder
            .map((elem, inx) => (
              <li
                key={elem}
                className={` cursor-pointer ${
                  currentPage == elem
                    ? "bg-Primary text-white"
                    : "hover:bg-Primary hover:text-white"
                } transition-all duration-300 w-9 h-9 rounded-full flex justify-center items-center `}
              >
                {elem}
              </li>
            ))
            .slice(
              Math.max(currentPage - 2, 0),
              Math.max(currentPage - 2, 0) + 3
            )}
        </ul>
        {totalePage > 3 && currentPage < totalePage - 1 ? (
          <>
            <span className=" text-2xl ">...</span>
          </>
        ) : (
          ""
        )}
        {totalePage > 3 && currentPage < totalePage - 2 ? (
          <>
            <span
              className={` cursor-pointer p-1 border  hover:bg-Primary hover:text-white transition-all duration-300 w-9 h-9 rounded-full flex justify-center items-center `}
            >
              {totalePage}
            </span>
          </>
        ) : (
          ""
        )}
      </div>
      <button
        onClick={() => nextPage()}
        className=" border w-10 h-10 rounded-full flex justify-center items-center text-xl  "
      >
        <IoIosArrowForward></IoIosArrowForward>
      </button>
    </div>
  );
}

export default ProductPagination;
