'use client'
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import React, { useState } from "react";
import HeadingTitleSec from "./HeadingTitleSec";
import BrandSection from './BrandSection';
import PayBuy from "./PayBuy";
// import MediaSection from "./MediaSection";
import { useGetSingleProductViewQuery } from "@/redux/features/productsList/productslist";
import ImageMediaSection from "../../ImageMediaSection/ImageMediaSection";

interface productType {
    id: string;
    product_id: string;
    product_name: string;
    stock_Status: string | number;
    rating: string | number;
    price: string | number;
    discount: string | number;
    brand_name: string;
    short_Description: string;
    category: string;
    image: string[];
    description: string;
    qty: string | number;
    scale: string;
    type: string;
    tag?: string | string[] | undefined | null;
  }



const Quick_view = ({productId}: {productId: string}) => {

      const { data, isError, isLoading, isSuccess } = useGetSingleProductViewQuery(productId);

      let container = <div className=' w-full h-full animate-pulse bg-gray-200/50 flex justify-center items-center ' >Loading...</div>;

      if (isLoading) {
        container = <div className=' w-full h-full animate-pulse bg-gray-200/50 flex justify-center items-center ' >Loading...</div>;
      }
      if (!isLoading && !isSuccess && isError) {
        container = <div className='w-full h-full flex justify-center items-center' >something is wrong...data fetch problem</div>;
      }
      if (!isLoading && isSuccess && !isError && !data?.id) {
        container = <div className='w-full h-full flex justify-center items-center' >No Data Found</div>;
      }
      if (!isLoading && isSuccess && !isError && data?.id) {
        container = <MaxWidthControls>
        <div className=" flex w-full gap-6 justify-between  ">
          {/* left site */}
            <ImageMediaSection images={data?.image} ></ImageMediaSection>
          {/* right site */}
          <div className="  w-full " >
            <HeadingTitleSec 
              product_name={data?.product_name} 
              stock_Status={data?.stock_Status} 
              rating={data?.rating}
              price={data?.price}
              discount={data?.discount}
            ></HeadingTitleSec>
            <BrandSection
              brand_name={data?.brand_name}
              short_Description={data?.short_Description}
            ></BrandSection>
            <PayBuy
              id={data?.id}
              product_id={data?.product_id}
              stock_Status={data?.stock_Status}
              price={data?.price}
              discount={data?.discount}
            ></PayBuy>
            <div>
              <p  > Category: <span className=" text-gray-500 " >{data?.category}</span> </p>
              <div className="flex gap-2 mt-1 " >
                <p> Tag: <span className=" text-gray-500 " >Vegetables Healthy</span> </p>
                <p> Chinese <span className=" text-gray-500 " >Cabbage Green Cabbage</span> </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthControls>
      }

  return container

};

export default Quick_view;
