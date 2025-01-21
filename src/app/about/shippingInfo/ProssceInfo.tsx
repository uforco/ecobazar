import React from 'react'

import { PiHeadsetDuotone, PiTreePalmThin  } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiPackage } from "react-icons/tfi";

interface Props {}

function ProssceInfo(props: Props) {
    const {} = props

    return (
        <div className=" grid grid-cols-2 gap-y-8 mt-8 " >
            <div className='flex gap-3 ' >
                <div className=' bg-Primary/20 flex justify-center items-center text-3xl p-2 w-12 h-12 rounded-full text-Primary ' >
                    <PiTreePalmThin></PiTreePalmThin>
                </div>
                <div>
                    <h2 className=' font-semibold ' >Great Support 24/7</h2>
                    <p className=" text-gray-500 " >Instant access to Contact</p>
                </div>
            </div>
            <div className='flex gap-3 ' >
                <div className=' bg-Primary/20 flex justify-center items-center text-3xl p-2 w-12 h-12 rounded-full text-Primary ' >
                    <PiHeadsetDuotone></PiHeadsetDuotone>
                </div>
                <div>
                    <h2 className=' font-semibold ' >Great Support 24/7</h2>
                    <p className=" text-gray-500 " >Instant access to Contact</p>
                </div>
            </div>
            <div className='flex gap-3 ' >
                <div className=' bg-Primary/20 flex justify-center items-center text-3xl p-2 w-12 h-12 rounded-full text-Primary ' >
                    <BsStars></BsStars>
                </div>
                <div>
                    <h2 className=' font-semibold ' >Great Support 24/7</h2>
                    <p className=" text-gray-500 " >Instant access to Contact</p>
                </div>
            </div>

            <div className='flex gap-3 ' >
                <div className=' bg-Primary/20 flex justify-center items-center text-3xl p-2 w-12 h-12 rounded-full text-Primary ' >
                    <HiOutlineShoppingBag></HiOutlineShoppingBag>
                </div>
                <div>
                    <h2 className=' font-semibold ' >Great Support 24/7</h2>
                    <p className=" text-gray-500 " >Instant access to Contact</p>
                </div>
            </div>
            <div className='flex gap-3 ' >
                <div className=' bg-Primary/20 flex justify-center items-center text-3xl p-2 w-12 h-12 rounded-full text-Primary ' >
                    <LiaShippingFastSolid></LiaShippingFastSolid>
                </div>
                <div>
                    <h2 className=' font-semibold ' >Great Support 24/7</h2>
                    <p className=" text-gray-500 " >Instant access to Contact</p>
                </div>
            </div>
            <div className='flex gap-3 ' >
                <div className=' bg-Primary/20 flex justify-center items-center text-3xl p-2 w-12 h-12 rounded-full text-Primary ' >
                    <TfiPackage></TfiPackage>
                </div>
                <div>
                    <h2 className=' font-semibold ' >Great Support 24/7</h2>
                    <p className=" text-gray-500 " >Instant access to Contact</p>
                </div>
            </div>
        </div>
    )
}

export default ProssceInfo
