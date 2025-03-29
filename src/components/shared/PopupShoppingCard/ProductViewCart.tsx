"use client"
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { cartDataType, shoppingcart } from "@/redux/features/MyShoppingCart/shoppingcart";
import discountPriceFun from "@/hooks/discountPriceFunction";
import { useAppDispatch } from "@/redux/app/hooks";

interface Props {
  item: cartDataType
}

function ProductViewCart({item}: Props) {

const dispatch = useAppDispatch()

  const detelecart = async (cart_id: string) => {
      const daleteItem = await fetch(`/api/deletecart/${cart_id}`, {
        method: "DELETE",
      }).then((res) => res.json());
      if (daleteItem?.cart_id) {
        dispatch(
          shoppingcart.util.updateQueryData("getShopingCart", item?.userId, (draft) => {
            return draft.filter(
              (value: cartDataType) => value.cart_id != daleteItem?.cart_id
            );
          })
        );
      }
    };


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
      <TableCell>
        <button onClick={()=> detelecart(item?.cart_id)} >x</button>
      </TableCell>
    </TableRow>
  );
}

export default ProductViewCart;
