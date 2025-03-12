import React from "react";
import LeftSideVideosec from "./LeftSideVideosec";

interface Props {
  Weight: string | number;
  scale: string;
  type: string;
  category: string;
  stock: string | number;
  tag?: string | undefined | null;
  discount: string | number;
}

function AdditionalInfo(props: Props) {
  const { Weight, scale, type, category, stock, tag, discount } = props;

  const addinfo: any = {
    Weight: `${Weight} ${scale}`,
    Type: type,
    Category: category,
    "Stock Status": `Available (${stock})`,
    Tags: tag,
  };

  const rest: [string, string][] = Object.entries(addinfo);
  return (
    <>
      <div className=" flex justify-between w-full overflow-hidden gap-5 ">
        <div className=" w-full">
          <ul>
            {rest.map((item: string[]) => (
              <li key={item[0]} className=" grid grid-cols-8 gap-2 my-3  ">
                <span className=" col-span-2 font-semibold ">{item[0]}:</span>
                <p className=" col-span-6 text-gray-600 ">{item[1]}</p>
              </li>
            ))}
          </ul>
        </div>
        <LeftSideVideosec discount={discount}></LeftSideVideosec>
      </div>
    </>
  );
}

export default AdditionalInfo;
