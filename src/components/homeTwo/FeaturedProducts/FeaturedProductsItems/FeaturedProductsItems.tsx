'use client'
import React from 'react';
// import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// Import Swiper styles
import "swiper/css";
import ProductCard, { productListType }  from '@/components/shared/allCard/ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetFeaturedProductsQuery } from '@/redux/features/productsList/productslist';



const FeaturedProductsItems = () => {

    const { data, isError, isLoading, isSuccess } = useGetFeaturedProductsQuery('')

    let container;
    if(isLoading){
        container = <>
            <div className=' h-[396px] w-[248px] flex justify-center items-center' > Loading...</div>
            <div className=' h-[396px] w-[248px] flex justify-center items-center' > Loading...</div>
            <div className=' h-[396px] w-[248px] flex justify-center items-center' > Loading...</div>
            <div className=' h-[396px] w-[248px] flex justify-center items-center' > Loading...</div>
            <div className=' h-[396px] w-[248px] flex justify-center items-center' > Loading...</div>
            <div className=' h-[396px] w-[248px] flex justify-center items-center' > Loading...</div>
            <div className=' h-[396px] w-[248px] flex justify-center items-center' > Loading...</div>
            <div className=' h-[396px] w-[248px] flex justify-center items-center' > Loading...</div>
        </>
    }
    if(isSuccess && !isLoading && !isError && data.length > 0) {
        container = data.map((value: productListType) => (
            <SwiperSlide key={value?.product_id} >
                <ProductCard  className='mb-8' data={value}  ></ProductCard >
            </SwiperSlide>
        ))
    }

    return (!isSuccess && !isLoading && isError?
        <div className=' h-[396px] w-full ' > something is wrong... </div>
        :
        isSuccess && !isLoading && !isError && data.length < 1?
        <div className=' h-[396px] w-full ' > No Data Found </div>
        :
        <div className={` flex justify-between items-center `} >
            <Swiper className="mySwiper myfeature "
                slidesPerView={5}
                // loop={true}
                // pagination={true}
                initialSlide={2}
                pagination={{
                    // clickable: true,              // Makes bullets clickable
                    dynamicBullets: true,         // Shows limited bullets dynamically
                }}
                // modules={[Pagination]}
                breakpoints={{
                    320: {
                    slidesPerView: 1, // Show 1 slide on screens smaller than 640px
                    },
                    640: {
                    slidesPerView: 2, // Show 1 slide on screens smaller than 640px
                    },
                    768: {
                    slidesPerView: 3, // Show 2 slides on screens 640px and above
                    },
                    1024: {
                    slidesPerView: 4, // Show 3 slides on screens 768px and above
                    },
                    1280: {
                    slidesPerView: 5, // Show 5 slides on screens 1024px and above
                    },
                }}
            >
                {container}
            </Swiper>
        </div>
    );
};

export default FeaturedProductsItems;