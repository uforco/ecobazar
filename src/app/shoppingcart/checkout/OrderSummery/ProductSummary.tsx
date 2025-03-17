"use client";
import React from "react";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import discountPriceFun from "@/hooks/discountPriceFunction";
import { cartDataType } from "@/redux/features/MyShoppingCart/shoppingcart";



const ProductSummary = ({item}:{item: cartDataType}) => {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className=" flex justify-start items-center ">
          <Image
            className=" w-[60px] h-[60px] "
            width={100}
            height={100}
            src={"/images/wishlist/Image3.png"}
            alt={""}
          ></Image>
          <h2 className="ml-3 text-gray-600 ">{item?.product_name} <span className=" text-base font-medium text-gray-900" >x{item?.quantity}</span></h2>
        </div>
      </TableCell>

      <TableCell>$ {(Number(discountPriceFun(item?.discount, item?.price))*item?.quantity).toFixed(2)}</TableCell>
    </TableRow>
  );
};

export default ProductSummary;
