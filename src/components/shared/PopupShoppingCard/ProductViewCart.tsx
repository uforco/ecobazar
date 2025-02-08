import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";

interface Props {}

function ProductViewCart(props: Props) {
  const {} = props;

  return (
    <TableRow>
      <TableCell className="font-medium  w-[100px] h-[100px] ">
        <div className=" flex justify-start items-center ">
          <Image
            className=" w-[80px] h-[80px] "
            width={100}
            height={100}
            src={"/images/wishlist/Image3.png"}
            alt={""}
          ></Image>
        </div>
      </TableCell>
      <TableCell>
        <p>Fresh Indian Orange</p>
        <p className=" text-gray-400 mt-1 ">
          <span>{"2"} kg x </span>
          <span className=" text-gray-700 font-semibold ">{"16.00"}</span>
        </p>
      </TableCell>
      <TableCell>x</TableCell>
    </TableRow>
  );
}

export default ProductViewCart;
