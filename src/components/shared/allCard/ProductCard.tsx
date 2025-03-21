'use client'
import React, { useEffect, useState } from "react";
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
import saveWishlist from "@/lib/saveWishlist";

export interface productListType {
  id: string;
  product_id: string;
  product_name: string;
  rating: Number;
  price: string | number;
  discount: string | number;
  coverimage?: string;
  category?: string;
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
  
  const sterrange = Array.from({ length: 5 }, (_, i) => i + 1)

  const [wishlist, setWishlist] = useState<string[]>([])
  const saveWishlistwithLocalStorage = async (id: string) => {
    setWishlist(await saveWishlist(id))
  }

  useEffect(()=>{
    const data = localStorage.getItem('wishlist')
    if(data) {
      setWishlist(JSON.parse(data))
    }
  },[])

  return (
    <div className={`${classname}  w-[248px]  `}>
      {data && <Card className=" cursor-pointer hover:border-Primary duration-300 overflow-hidden transition-all hover:shadow-soft_primary/20 group  hover:shadow-xl relative ">
        <div className=" group-hover:top-3 absolute right-3 -top-24 duration-500 transition-all z-[100] ">
          <button onClick={() => saveWishlistwithLocalStorage(data?.product_id)} className={`${wishlist.includes(data.product_id)? " bg-Primary text-white ":""} size-10 mb-2 rounded-full borde border-gray-200 flex justify-center items-center `}>
            <Heart></Heart>
          </button>
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
                src={'/images/categores/productImage.png'} alt={""} width={200} height={260} >
              </FallbackImage>
            </CardHeader>
          </Link>
        </div>
        <CardContent className=" flex justify-between items-center ">
          <Link href={"/shop/e457"}>
            <div className=" text-left ">
              <CardDescription>{data?.product_name}</CardDescription>
              <CardTitle className=" my-1 ">${data.price}</CardTitle>
              <CardDescription className=" flex items-center ">
                {
                  sterrange.map((value) => <TiStar key={value} className={`size-4 ${value <= Number(data?.rating) ? "text-warning" : "text-gray-300"}  `}></TiStar>)
                }
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
