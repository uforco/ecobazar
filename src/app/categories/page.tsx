"use client";
import React, { Suspense, useEffect } from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import dynamic from "next/dynamic";

import TopFilterShop from "@/components/categorieFilter/TopFilterShop/TopFilterShop";
import { useGetProductsWithCategoriePageQuery } from "@/redux/features/productsList/productslist";
import ProductCard, {productListType} from "@/components/shared/allCard/ProductCard";
import Loading from "@/components/shared/loading";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { categoriesfilter, currentPageCount, filterSelector, nameSearch, productResults } from "@/redux/features/filterByProduct/filterproducts";

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
import ProductPagination from "@/components/categorieFilter/pagination/ProductPagination";


const page = () => {

  const dispatch = useAppDispatch()
  const serchparam = useSearchParams()
  
  
  useEffect(()=>{
    const categorie = serchparam ? serchparam.get('item') : null;
    const name = serchparam ? serchparam.get('name') : null;
    if (categorie) {
      dispatch(categoriesfilter(''))
      dispatch(categoriesfilter(categorie))
    }
    if (name) {
      dispatch(nameSearch(name))
    }
    return () => {
      if (categorie) {
        dispatch(categoriesfilter(''))
        dispatch(categoriesfilter(categorie))
      }
      if (name) {
        dispatch(nameSearch(name))
      }
    }
  },[serchparam])

  useEffect(()=>{
    const page = serchparam ? serchparam.get('page') : null;
    if (page) {
      dispatch(currentPageCount({ actionType: 'number', page: Number(page)}))
    }
    return () => {
      if (page) {
        dispatch(currentPageCount({ actionType: 'number', page: Number(page)}))
      }
    }
  },[])


  const itemFilter = useAppSelector(filterSelector);
  // const slicep1 = Math.max(0,(itemFilter.currentPage-1)*3)
  // const slicep2 = Math.max(0,(itemFilter.currentPage)*3)


  const {
    data: products,
    isError,
    isLoading,
    isSuccess
  } = useGetProductsWithCategoriePageQuery(itemFilter.currentPage-1);


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
        const namesf = itemFilter.namesearch? value.product_name.toLowerCase().includes(itemFilter.namesearch) : true
        const pricefilter = (Number(value.price) >= itemFilter.pricerange[0]+1 && Number(value.price) <= itemFilter.pricerange[1])
        const categorefilteritems = itemFilter?.categories.length
          ? value?.category
            ? itemFilter?.categories?.includes(value.category)
            : false
          : true;
        const ratingfilter = itemFilter.rating.length? ( Math.min(...itemFilter?.rating) <= Number(value.rating)  ) : true
        return categorefilteritems && pricefilter && ratingfilter && namesf;
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
        <div className=" w-full xl:w-[984px]  min-h-[1024px]  ">
          <div className=" h-[calc(100%-100px)] " > 
            <div className={` grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-3 w-full `}>
              {container}
            </div>
          </div>
          <div>
            <ProductPagination totalproduct={Math.ceil(products?.length/3)} ></ProductPagination>
          </div>
        </div>
      </div>
    </MaxWidthControls>
  );
};

export default page;
