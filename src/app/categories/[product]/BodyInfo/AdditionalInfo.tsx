import React from "react";
import ReviewVideo from "./ReviewVideo";
import { CiDiscount1 } from "react-icons/ci";
import { GiTreeBranch } from "react-icons/gi";

interface Props {}

function AdditionalInfo(props: Props) {
  const {} = props;

  const addinfo: any = {
    Weight: "03",
    Color: "Green",
    Type: "Organic",
    Category: "Vegetables",
    "Stock Status": "Available (5,413)",
    Tags: "Vegetables, Healthy, Chinese, Cabbage,  Green Cabbage,"
  }

  const rest: [string, string][]  = Object.entries(addinfo);

  return (
    <>
      <div className=" flex justify-between w-full overflow-hidden gap-5 ">
        <div className=" w-full">
            <ul >
                {
                    rest.map((item: string[]) => <li key={item[0]} className=" grid grid-cols-8 gap-2 my-3  " > <span className=" col-span-2 font-semibold " >{item[0]}:</span>  <p className=" col-span-6 text-gray-600 " >{item[1]}</p></li>)
                }
            </ul>
        </div>

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
                  <h2 className=" text-black font-semibold ">64% Discount</h2>
                  <p className=" text-black/90 ">Save your 64% money with us</p>
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
      </div>
    </>
  );
}

export default AdditionalInfo;
