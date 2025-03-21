"use client";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { filterSelector, priceReangFilter } from "@/redux/features/filterByProduct/filterproducts";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Range } from "react-range";

interface Props {}

function PriceReang(props: Props) {
  const {} = props;
  const values = useAppSelector(filterSelector).pricerange
  const dispatch = useAppDispatch()

  const maxpricering: number = 100;
  const [swt, setSwt] = React.useState<boolean>(false);

  const priceHandle = (range: number[]) =>{
    dispatch(priceReangFilter(range))
  }

  return (
    <div className="p-3 transition-all border-b ">
      <div
        onClick={() => setSwt((priv) => !priv)}
        className="flex items-center justify-between cursor-pointer "
      >
        <h2 className=" font-semibold " >Price</h2>
        <span
          className={`${
            swt ? "rotate-0" : "-rotate-180"
          } transition-all duration-300 `}
        >
          <IoIosArrowDown></IoIosArrowDown>
        </span>
      </div>
      <div
        className={`  overflow-hidden transition-all mt-3 duration-500 ${
          swt ? "h-0" : " h-[100px] "
        } `}
      >
        <div className=" px-2 " >
          <div className="w-full relative mt-5 ">
            <Range
              step={1}
              min={0}
              max={maxpricering}
              values={values}
              onChange={(range) => priceHandle(range)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-[5px] bg-gray-300 rounded-full relative"
                >
                  <div
                    className="absolute h-[5px] bg-primary rounded-full"
                    style={{
                      left: `${(values[0] / maxpricering) * 100}%`,
                      width: `${((values[1] - values[0]) / maxpricering) * 100}%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-4 h-4 bg-white relative border-2 border-Primary  rounded-full shadow-md flex items-center justify-center cursor-pointer"
                ></div>
              )}
            ></Range>
          </div>
          <div className="mt-7 text-gray-700 ">
            Price : <span className="font-bold text-black " >{values[0]} - {values[1]}</span>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceReang;
