"use client";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import SingleProduct from "./SingleProduct";
import { cartDataType, useGetShopingCartQuery } from "@/redux/features/MyShoppingCart/shoppingcart";

const invoices = [
  {
    name: "Green Capsicum",
    img: "/images/wishlist/Image1.png",
    price: 20.99,
    discount: 10,
    stockStatus: true,
  },
  {
    name: "Chinese Cabbage",
    img: "/images/wishlist/Image2.png",
    price: 45.0,
    discount: 0,
    stockStatus: true,
  },
  {
    name: "Fresh Sujapuri Mango",
    img: "/images/wishlist/Image3.png",
    price: 9.0,
    discount: 0,
    stockStatus: false,
  },
];

const TableBodyMapData = () => {
  const { data, isError, isLoading, isSuccess } = useGetShopingCartQuery(
    "cm80bbde50000dj1kezlho2m6"
  ); //paramiter user id

  let container;
  if (isLoading) {
    container = (
      <>
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </>
    );
  }
  if (!isLoading && isError) {container = <div>something is wrong</div>}
  if (!isLoading && !isError && isSuccess && data.length < 1) {container = <div>No Data Found</div>;}
  if (!isLoading && !isError && isSuccess && data.length > 0) {
    container = data.map((invoice: cartDataType) => (
      <SingleProduct
        key={`invoice.img${invoice?.cart_id}`}
        invoice={invoice}
      ></SingleProduct>
    ));
  }

  console.log(data);

  return <TableBody>{container}</TableBody>;
};

export default TableBodyMapData;

const LoadingItem = () => {
  return (
    <TableRow className=" bg-gray-200/20 animate-pulse ">
      <TableCell className="font-medium">
        <div className=" flex justify-start items-center ">
          <div className=" w-[100px] h-[100px] rounded-md bg-gray-200  animate-pulse"></div>
          <p className="ml-3 h-7 rounded-md bg-gray-200 w-28 animate-pulse "></p>
        </div>
      </TableCell>
      <TableCell>
        <p className=" w-28 h-5 bg-gray-200 rounded-md "></p>
      </TableCell>
      <TableCell>
        <div className=" flex justify-start">
          <div className="flex items-center justify-center gap-3 border p-1 rounded-full animate-pulse ">
            <div className="bg-gray-200 rounded-full flex items-center justify-center size-7 "></div>
            <p className="w-4 flex items-center justify-center"></p>
            <div className="bg-gray-200 rounded-full flex items-center justify-center size-7 "></div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className=" flex justify-between gap-3 items-center animate-pulse ">
          <p className=" flex items-center h-5 w-28 bg-gray-200 rounded-md "></p>
          <p className=" text-xl border-2 rounded-full p-1 size-8 "></p>
        </div>
      </TableCell>
    </TableRow>
  );
};
