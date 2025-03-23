'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import FallbackImage from '@/components/shared/FallbackImage';
import RatingSter from '@/components/shared/RatingSter/RatingSter';

const SearchProductView = ({productList}:{productList: any}) => {
    const [showfocus, setShowFocus] = useState<boolean>(false)
    const [showHover, setShowHover] = useState<boolean>(false)

    useEffect(()=>{
        const sb: any = document.getElementById('searchber')
        const sdl: any = document.getElementById('searchdatalist')
        if(!sb || !sdl) return

        const handleFocus = () => setShowFocus(true);
        const handleBlur = () => setShowFocus(false);

        const handleMouseenter = () => setShowHover(true);
        const handleMouseleave = () => setShowHover(false);

        sb.addEventListener("focus", handleFocus);
        sb.addEventListener("blur", handleBlur);

        sdl.addEventListener("mouseenter", handleMouseenter);
        sdl.addEventListener("mouseleave", handleMouseleave);

        return () => {
            sb.addEventListener("focus", handleFocus);
            sb.addEventListener("blur", handleBlur);
            sdl.addEventListener("mouseenter", handleMouseenter);
            sdl.addEventListener("mouseleave", handleMouseleave);
        }
    },[])


    return (
        <div id='searchdatalist' className={` ${showfocus || showHover? " block " : " hidden "} absolute top-[38px] max-h-60 z-50 left-1/2 -translate-x-1/2  w-[calc(100%-8px)] bg-gray-100 searchBer_scrollbar-hidden overflow-hidden overflow-y-scroll shadow-lg `} >
            {
                productList.map((item: any) => <div  className=" w-full h-20 overflow-hidden my-1 p-2 flex items-center gap-4 " >
                    <div className=' flex items-center w-full gap-3 ' >
                        <div className=' w-20 h-full ' >
                            <FallbackImage className=' w-full h-full ' src={item?.coverimage} alt={''} width={60} height={60}></FallbackImage>
                        </div>
                        <div>
                            <p className=' text-base mb-1 font-semibold capitalize ' >{item?.product_name}</p>
                            <div className=' flex items-center ' >
                                <RatingSter className=" size-5 " ratingNumber={item?.rating}></RatingSter>
                            </div>
                        </div>
                    </div>
                    <Link  className=' text-Primary flex justify-center text-sm ' href={`/categories/${item?.product_id}`}>View <br/> Details</Link>
                </div>)
            }
        </div>

    );
};

export default SearchProductView;