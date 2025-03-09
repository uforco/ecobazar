'use client'
import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
// import ProductList from '@/pages/shop/productList/ProductList';
import dynamic from 'next/dynamic';
import DiscountAds from '@/pages/shop/filterSection/DiscountAds/DiscountAds';
import TopFilterShop from '@/pages/shop/filterSection/TopFilterShop/TopFilterShop';
import { useGetProductsWithCategoriePageQuery } from '@/redux/features/productsList/productslist';
import ProductCard, { productListType } from '@/components/shared/allCard/ProductCard';
import Image from 'next/image';


const AllCategories = dynamic(() => import('@/pages/shop/filterSection/AllCategories/AllCategories'), {
    loading: () => <p>Loading...</p>,
  })
const PriceReang = dynamic(() => import('@/pages/shop/filterSection/Price/PriceReang'), {
    loading: () => <p>Loading...</p>,
  })
const Rating = dynamic(() => import('@/pages/shop/filterSection/Rating/Rating'), {
    loading: () => <p>Loading...</p>,
  })

const page = () => {

    const { data: products, isError, isLoading, isSuccess } =
        useGetProductsWithCategoriePageQuery(undefined);
    

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
        container = products.map((cardData: productListType, inx: number) => (
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
        ))
      }



    return (
        <div  >
            <MaxWidthControls className=' px-1 ' >
                <TopFilterShop></TopFilterShop>
                <div className="flex justify-between my-3  overflow-hidden gap-5 " >
                    <div className=" hidden xl:block w-[312px] " >
                        <AllCategories/>
                        <PriceReang/>
                        <Rating></Rating>
                        <DiscountAds></DiscountAds>
                    </div>
                    <div className=" w-full xl:w-[984px] " >
                        <div
                            className={` grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-3 w-full min-h-[1024px] `}
                        >
                            {container}
                        </div>
                        <div>
                            {/* <ProductPagination nextPage={nextPage} privousPage={privousPage} currentPage={currentpage} totalePage={Math.ceil(products.length/showProduct)} ></ProductPagination> */}
                        </div>
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default page;