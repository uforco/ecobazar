import React from 'react'
import Image from 'next/image';
import add from '../../../../public/images/categores/FilterAds.png'
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {}

function DiscountAds(props: Props) {
    const {} = props

    return (
        <div className=' w-full relative overflow-hidden h-[295px] mt-5 rounded-lg bg-gray-100 ' >
            <div className='  overflow-hidden w-full h-full flex items-end ' >
                <Image src={add} alt={''}></Image>
            </div>
            <div className=" absolute w-full left-1/2 top-6 gap-1 -translate-x-1/2 text-center flex flex-col justify-center items-center " >
                <h2 className=" text-xl " > <span className=" text-3xl text-warning font-semibold " >79%</span> Discount</h2>
                <p className="text-gray-500" >on your first order</p>
                <button className=' flex items-center gap-2 text-center text-Primary font-semibold text-xl ' >Shop Now   <span className="text-lg" > <FaArrowRightLong  ></FaArrowRightLong> </span> </button>
            </div>
        </div>
    )
}

export default DiscountAds
