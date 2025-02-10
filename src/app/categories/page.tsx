import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import ProductList from '@/pages/shop/productList/ProductList';
import dynamic from 'next/dynamic';
import DiscountAds from '@/pages/shop/filterSection/DiscountAds/DiscountAds';
import TopFilterShop from '@/pages/shop/filterSection/TopFilterShop/TopFilterShop';



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
                        <ProductList></ProductList>
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default page;