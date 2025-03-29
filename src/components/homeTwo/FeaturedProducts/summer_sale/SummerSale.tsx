'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from "@mynaui/icons-react";
import CategoryItem from './CategoryItem';
import { useGetBestRatedDealsproductQuery } from '@/redux/features/productsList/productslist';



const loaingcompo = <div>
            <h2 className=" text-xl font-medium capitalize mb-4 bg-slate-200 animate-pulse h-6 w-28 rounded "></h2>
            <div className=" grid grid-cols-1 gap-4 ">
                <div className=' w-[312px] h-[116px] bg-slate-200 animate-pulse rounded ' ></div>
                <div className=' w-[312px] h-[116px] bg-slate-200 animate-pulse rounded ' ></div>
                <div className=' w-[312px] h-[116px] bg-slate-200 animate-pulse rounded ' ></div>
            </div>
        </div>





const SummerSale = () => {



    const { data, isError, isLoading, isSuccess } = useGetBestRatedDealsproductQuery('')


    let container;

    // if(isLoading){
        container = <>
            {loaingcompo}
            {loaingcompo}
            {loaingcompo}
        </>
    // }
    if(!isLoading && isError && !isSuccess) {
        container = <div className=' col-span-3 flex justify-center items-center ' >something is wrong</div>
    }
    if(!isLoading && isError && !isSuccess) {
        container = <div className=' col-span-3 flex justify-center items-center ' >something is wrong</div>
    }
    if(!isLoading && !isError && isSuccess && data.length < 1) {
        container = <div className=' col-span-3 flex justify-center items-center ' >No Data Found !</div>
    }
    if(!isLoading && !isError && isSuccess && data.length > 0) {
        // container = <div className=' col-span-3 flex justify-center items-center ' >No Data Found !</div>

        container = data.map((item:any , inx: number, arr: any) =>  {
            const key = Object.keys(arr[inx])[0]
            return <CategoryItem key={key} title={key} data={item[key]}></CategoryItem>
        })


    }
    


    return (
        <div className=' grid grid-cols-4 h-[426px] w-full mt-7 ' >
            {container}
            <div className=' flex justify-center ' >
                <div className=" flex flex-col  rounded-xl overflow-hidden items-center w-[312px] h-full bg-[url('/images/home2/featured/fruit.png')] bg-cover " >
                    <h2 className=' uppercase font-semibold text-xs mt-10 mb-3 ' >HOT SALE</h2>
                    <p className=' text-[32px] mx-4 text-center leading-10 mb-5 ' >
                        <span className=' font-semibold  ' >Save 37%</span> on Every Order
                    </p>
                    <Button className=' rounded-full w-[162px] h-[45px] font-semibold flex justify-center items-center text-md text-Primary bg-white shadow-xl shadow-gray-400/20  hover:text-white transition-all ' > Shop Now <ArrowRight></ArrowRight> </Button>
                </div>
            </div>
        </div>
    );
};

export default SummerSale;