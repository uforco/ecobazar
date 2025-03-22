"use client";
import React, { Suspense, useEffect } from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import dynamic from "next/dynamic";

import TopFilterShop from "@/components/categorieFilter/TopFilterShop/TopFilterShop";
import { useGetProductsWithCategoriePageQuery } from "@/redux/features/productsList/productslist";
import ProductCard, {productListType} from "@/components/shared/allCard/ProductCard";
import Loading from "@/components/shared/loading";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { categoriesfilter, filterSelector, productResults } from "@/redux/features/filterByProduct/filterproducts";

import DiscountAds from "@/components/categorieFilter/DiscountAds/DiscountAds";
const AllCategories = dynamic(
  () => import("@/components/categorieFilter/AllCategories/AllCategories"),{loading: () => <p>Loading...</p>,}
);
const PriceReang = dynamic(
  () => import("@/components/categorieFilter/Price/PriceReang"),{loading: () => <p>Loading...</p>,}
);
const Rating = dynamic(
  () => import("@/components/categorieFilter/Rating/Rating"),{loading: () => <p>Loading...</p>,}
);

import { useSearchParams } from 'next/navigation'


const page = () => {
  const dispatch = useAppDispatch()
  const serchparam = useSearchParams()
  
  useEffect(()=>{
    const categorie = serchparam ? serchparam.get('item') : null;
    if (categorie) {
      dispatch(categoriesfilter(''))
      dispatch(categoriesfilter(categorie))
    }
  },[serchparam])

  const {
    data: products,
    isError,
    isLoading,
    isSuccess,
  } = useGetProductsWithCategoriePageQuery(undefined);

  const itemFilter = useAppSelector(filterSelector);


  let container = <div>Loading...</div>;
  if (isLoading) {
    container = <div>Loading...</div>;
  }
  if (!isLoading && !isSuccess && isError) {
    container = <div>something is wrong...data fetch problem</div>;
  }
  if (!isLoading && isSuccess && !isError && products.length < 1) {
    container = <div>No Data Found</div>;
  }
  if (!isLoading && isSuccess && !isError && products.length >= 1) {
    container = products
      .slice()
      .filter((value: productListType) => {
        const pricefilter = (Number(value.price) >= itemFilter.pricerange[0]+1 && Number(value.price) <= itemFilter.pricerange[1])
        const categorefilteritems = itemFilter?.categories.length
          ? value?.category
            ? itemFilter?.categories?.includes(value.category)
            : false
          : true;

        const ratingfilter = itemFilter.rating.length? (itemFilter?.rating.includes(Number(value.rating))) : true

        return categorefilteritems && pricefilter && ratingfilter;
      })
      .map((cardData: productListType, inx: number, arry: productListType[]) => {
        dispatch(productResults(arry.length))
        return(
        <div
          key={cardData.id}
          className=" flex w-full justify-center items-center "
        >
          <ProductCard
            className=" w-[312px]  "
            imageWidth={260}
            imageHeight={260}
            data={cardData}
          ></ProductCard>
        </div>
      )});
  }

  return (
        <MaxWidthControls className=" px-1 ">
          <TopFilterShop></TopFilterShop>
          <div className="flex justify-between my-3  overflow-hidden gap-5 ">
            <div className=" hidden xl:block w-[312px] ">
              <AllCategories />
              <PriceReang />
              <Rating></Rating>
              <DiscountAds></DiscountAds>
            </div>
            <div className=" w-full xl:w-[984px]  min-h-[1024px] ">
              <div
                className={` grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-3 w-full  `}
              >
                {container}
              </div>
              <div>
                {/* <ProductPagination nextPage={nextPage} privousPage={privousPage} currentPage={currentpage} totalePage={Math.ceil(products.length/showProduct)} ></ProductPagination> */}
              </div>
            </div>
          </div>
        </MaxWidthControls>
  );
};

export default page;
