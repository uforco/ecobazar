import React from 'react';
import Image from 'next/image';

const BottomBanner = () => {
    return (
        <div className=' w-full flex justify-center absolute left-0 -bottom-64 md:-bottom-24 xl:-bottom-16   ' >
            <div className="  overflow-hidden  rounded-lg shadow-lg w-11/12 gap-6 xl:gap-3  xl:h-28 p-8 bg-white z-50 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 " >
                <div className=' w-[306px] flex items-center gap-3 ' >
                    <div>
                        <Image src={'/images/home/delivery-truck.png'} alt={'Free shipping delivery-truck'} width={40} height={40} ></Image>
                    </div>
                    <div>
                        <h1 className=' font-semibold ' >Free Shipping</h1>
                        <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                    </div>
                </div>
                <div className=' w-[306px] flex items-center gap-3 ' >
                    <div>
                        <Image src={'/images/home/headphones.png'} alt={'Free shipping delivery-truck'} width={40} height={40} ></Image>
                    </div>
                    <div>
                        <h1 className=' font-semibold ' >Free Shipping</h1>
                        <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                    </div>
                </div>
                <div className=' w-[306px] flex items-center gap-3 ' >
                    <div>
                        <Image src={'/images/home/shopping-bag.png'} alt={'Free shipping delivery-truck'} width={40} height={40} ></Image>
                    </div>
                    <div>
                        <h1 className=' font-semibold ' >Free Shipping</h1>
                        <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                    </div>
                </div>
                <div className=' w-[306px] flex items-center gap-3 ' >
                    <div>
                        <Image src={'/images/home/package.png'} alt={'Free shipping delivery-truck'} width={40} height={40} ></Image>
                    </div>
                    <div>
                        <h1 className=' font-semibold ' >Free Shipping</h1>
                        <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;