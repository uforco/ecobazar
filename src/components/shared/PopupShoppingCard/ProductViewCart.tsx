import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { cartDataType } from "@/redux/features/MyShoppingCart/shoppingcart";
import discountPriceFun from "@/hooks/discountPriceFunction";

interface Props {
  item: cartDataType
}

function ProductViewCart({item}: Props) {


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
        <p>{item?.product_name}</p>
        <p className=" text-gray-400 mt-1 ">
          <span>{item?.quantity} {item?.scale} x </span>
          <span className=" text-gray-700 font-semibold ">{Number(discountPriceFun(item?.discount, item?.price)).toFixed(2)}</span>
        </p>
      </TableCell>
      <TableCell>x</TableCell>
    </TableRow>
  );
}

export default ProductViewCart;
