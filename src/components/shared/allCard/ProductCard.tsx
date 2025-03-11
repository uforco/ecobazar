'use client'
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingBag, Heart, Eye } from "@mynaui/icons-react";
import { TiStar } from "react-icons/ti";
import Quick_Product_View from "./../quick_product_view/Quick_Product_View";
import Link from "next/link";
import FallbackImage from "../FallbackImage";

export interface productListType {
  id: string;
  product_id: string;
  product_name: string;
  rating: Number;
  price: string | number;
  discount: string | number;
  coverimage?: string;
}


const ProductCard = ({
  className: classname,
  imageWidth,
  imageHeight,
  data
}: {
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  data: productListType | undefined;
}) => {


  return (
    <div className={`${classname}  w-[248px]  `}>
      {data && <Card className=" cursor-pointer hover:border-Primary duration-300 overflow-hidden transition-all hover:shadow-soft_primary/20 group  hover:shadow-xl relative ">
        <div className=" group-hover:top-3 absolute right-3 -top-24 duration-500 transition-all z-[100] ">
          <div className=" size-10 mb-2 rounded-full border border-gray-200 flex justify-center items-center ">
            <Heart></Heart>
          </div>
          <>
            <Quick_Product_View productId={data?.product_id} ></Quick_Product_View>
          </>
        </div>
        <div className=" flex justify-center ">
          <Link href={`/categories/${data?.product_id}`}>
            <CardHeader
              className={` ${imageWidth ? `w-[${imageWidth}px]` : "w-[248px]"}`}
            >
                   <FallbackImage 
                    className={` w-full ${
                      imageHeight ? `w-[${imageHeight}px]` : "h-[200px]"
                    }`} 
                    src={'/images/categores/productImag.png'} alt={""} width={200} height={260} >
                  </FallbackImage>
                  
            </CardHeader>
          </Link>
        </div>
        <CardContent className=" flex justify-between items-center ">
          <Link href={"/shop/e457"}>
            <div className=" text-left ">
              <CardDescription>{data?.product_name}</CardDescription>
              <CardTitle className=" my-1 ">$14.99</CardTitle>
              <CardDescription className=" flex items-center ">
                <TiStar className=" size-4 text-warning "></TiStar>
                <TiStar className=" size-4 text-warning "></TiStar>
                <TiStar className=" size-4 text-warning "></TiStar>
                <TiStar className=" size-4 text-gray-300 "></TiStar>
                <TiStar className=" size-4 text-gray-300 "></TiStar>
              </CardDescription>
            </div>
          </Link>
          <div className=" group-hover:bg-Primary transition-all duration-300 size-10 bg-gray-100 flex justify-center items-center rounded-full ">
            <ShoppingBag className=" group-hover:text-white transition-all " />
          </div>
        </CardContent>
      </Card>}
    </div>
  );
};

export default ProductCard;
