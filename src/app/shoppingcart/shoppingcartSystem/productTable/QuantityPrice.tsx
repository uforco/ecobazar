"use client";
import { TableCell } from "@/components/ui/table";
import discountPriceFun from "@/hooks/discountPriceFunction";
import { useAppDispatch } from "@/redux/app/hooks";
import {
  cartDataType,
  shoppingcart,
} from "@/redux/features/MyShoppingCart/shoppingcart";
import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  invoice: cartDataType;
}

function QuantityPrice({ invoice }: Props) {
  const dispatch = useAppDispatch();


  const dicriment = (cartid: string) => {
    if(invoice?.stock_Status >= invoice?.quantity && 1 < invoice?.quantity ) {
      dispatch(
        shoppingcart.util.updateQueryData("getShopingCart", invoice?.userId, (draft) => {
          const dicrimentValue = draft.find(
            (value: cartDataType) => value.cart_id == cartid
          );
          dicrimentValue.quantity -= 1
        })
      );
    }
  };

  const incriment = (cartid: string) => {
    if(invoice?.stock_Status > invoice?.quantity) {
      dispatch(
        shoppingcart.util.updateQueryData("getShopingCart", invoice?.userId, (draft) => {
          const dicrimentValue = draft.find(
            (value: cartDataType) => value.cart_id == cartid
          );
          dicrimentValue.quantity += 1
        })
      );
    }
  };






  // DELETE CART ITEM TO SERVER OR REDUX STORE
  const detelecart = async (cart_id: string) => {
    const daleteItem = await fetch(`/api/deletecart/${cart_id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    if (daleteItem?.cart_id) {
      dispatch(
        shoppingcart.util.updateQueryData("getShopingCart", invoice?.userId, (draft) => {
          return draft.filter(
            (value: cartDataType) => value.cart_id != daleteItem?.cart_id
          );
        })
      );
    }
  };

  return (
    <>
      <TableCell>
        <div className=" flex justify-start">
          <div className="flex items-center justify-center gap-3 border p-1 rounded-full ">
            <button
              onClick={() => dicriment(invoice?.cart_id)}
              className="bg-gray-300 rounded-full flex items-center justify-center size-7 "
            >
              -
            </button>
            <p className="w-4 flex items-center justify-center">{invoice?.quantity}</p>
            <button
              onClick={() =>incriment(invoice?.cart_id)}
              className="bg-gray-300 rounded-full flex items-center justify-center size-7 "
            >
              +
            </button>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className=" flex justify-between gap-3 items-center ">
          <p className=" flex items-center ">
            {(
              Number(discountPriceFun(invoice.discount, invoice.price)) * invoice?.quantity
            ).toFixed(2)}
          </p>
          <button
            onClick={() => detelecart(invoice.cart_id)}
            className=" text-xl border-2 rounded-full p-1 "
          >
            <IoClose></IoClose>
          </button>
        </div>
      </TableCell>
    </>
  );
}

export default QuantityPrice;
