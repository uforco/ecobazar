import Image from 'next/image';
import React from 'react';
import { LiaShippingFastSolid, LiaShoppingBagSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiPackageLight } from "react-icons/pi";

const DaliverySystem = () => {
    return (
        <div className=' mt-3 ' >
            <div className=' w-full flex justify-center' >
                <div className=" px-2 overflow-hidden border-b rounded-lg w-12/12 gap-6 xl:gap-3  bg-white z-50 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 " >   
                    <div className=' group  border-b-2 transition-all duration-300 hover:border-Primary border-white w-[306px] cursor-pointer flex items-center gap-3 p-3 py-4 ' >
                        <div className=' group-hover:text-white group-hover:bg-Primary text-Primary text-4xl p-3 rounded-full flex justify-center items-center bg-gray-200 ' >
                             <LiaShippingFastSolid></LiaShippingFastSolid>
                        </div>
                        <div>
                            <h1 className=' font-semibold ' >Free Shipping</h1>
                            <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                        </div>
                    </div>
                    <div className=' group  border-b-2 transition-all duration-300 hover:border-Primary border-white w-[306px] cursor-pointer flex items-center gap-3 p-3 py-4 ' >
                        <div className=' group-hover:text-white group-hover:bg-Primary text-Primary text-4xl p-3 rounded-full flex justify-center items-center bg-gray-200 ' >
                             <TfiHeadphoneAlt></TfiHeadphoneAlt>
                        </div>
                        <div>
                            <h1 className=' font-semibold ' >Free Shipping</h1>
                            <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                        </div>
                    </div>
                    <div className=' group border-b-2 transition-all duration-300 hover:border-Primary border-white w-[306px] cursor-pointer flex items-center gap-3 p-3 py-4 ' >
                        <div className=' group-hover:text-white group-hover:bg-Primary text-Primary text-4xl p-3 rounded-full flex justify-center items-center bg-gray-200 ' >
                             <LiaShoppingBagSolid></LiaShoppingBagSolid>
                        </div>
                        <div>
                            <h1 className=' font-semibold ' >Free Shipping</h1>
                            <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                        </div>
                    </div>
                    <div className=' group border-b-2 transition-all duration-300 hover:border-Primary border-white w-[306px] cursor-pointer flex items-center gap-3 p-3 py-4 ' >
                        <div className=' group-hover:text-white group-hover:bg-Primary text-Primary text-4xl p-3 rounded-full flex justify-center items-center bg-gray-200 ' >
                             <PiPackageLight></PiPackageLight>
                        </div>
                        <div>
                            <h1 className=' font-semibold ' >Free Shipping</h1>
                            <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaliverySystem;