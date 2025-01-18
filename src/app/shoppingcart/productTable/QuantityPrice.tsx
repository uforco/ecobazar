'use client'
import { TableCell } from "@/components/ui/table";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  stockStatus: boolean;
  discontPrice: number;
}

function QuantityPrice(props: Props) {
  const { stockStatus, discontPrice } = props;
  const [qty, setQty] = useState<number>(1)


  const dicriment = () => {
    if(stockStatus && 1 < qty ) setQty((prv) => prv - 1)
  }
  const incriment = () => {
    if(stockStatus) setQty((prv) => prv + 1)
  }

  return (
    <>
      <TableCell>
        <div className=" flex justify-start" >
          <div className="flex items-center justify-center gap-3 border p-1 rounded-full " >
            <button onClick={dicriment} className="bg-gray-300 rounded-full flex items-center justify-center size-7 " >-</button>
            <p className="w-4 flex items-center justify-center" >{qty}</p>
            <button onClick={incriment} className="bg-gray-300 rounded-full flex items-center justify-center size-7 " >+</button>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className=" flex justify-between gap-3 items-center ">
          <p className=" flex items-center ">{(discontPrice*qty).toFixed(2)}</p>
          <button className=" text-xl border-2 rounded-full p-1 ">
            <IoClose></IoClose>
          </button>
        </div>
      </TableCell>
    </>
  );
}

export default QuantityPrice;
