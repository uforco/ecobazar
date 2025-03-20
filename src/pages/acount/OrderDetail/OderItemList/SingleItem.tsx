import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
// import Image from "next/image";
import FallbackImage from "@/components/shared/FallbackImage";

export interface itemType {
    item_name: string,
    image: string,
    price: number,
    quantity: number,
    subtotal: number
}

function SingleItem({item}: {item: itemType}) {

  if(!item?.item_name) return null

  return (
    item &&  <TableRow >
      <TableCell className="font-medium">
        <div className=" flex justify-start items-center ml-4 my-2 ">
          <div className=" w-[50px] h-[50px] " >
            <FallbackImage
              className=" w-[50px] h-[50px] "
              width={100}
              height={100}
              src={item?.image}
              alt={""}
            ></FallbackImage>
          </div>
          <h2 className="ml-3">{item?.item_name}</h2>
        </div>
      </TableCell>
      <TableCell>
        <p>{item.price}</p>
      </TableCell>
      <TableCell>
        <p className="ml-2" >x{item?.quantity}</p>
      </TableCell>
      <TableCell className="ml-2" >{item?.subtotal.toFixed(2)}</TableCell>
    </TableRow>
  );
}

export default SingleItem;
