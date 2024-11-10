import React from 'react';
import Image from 'next/image';

const BottomBanner = () => {
    return (
        <div className=" absolute -bottom-14 left-1/2 rounded-lg shadow-lg -translate-x-1/2 w-11/12 h-28 p-8 bg-white z-50 flex justify-between items-center " >
            <div className=' w-[306px] flex gap-3 ' >
                <div>
                    <Image src={'/images/home/delivery-truck.png'} alt={'Free shipping delivery-truck'} width={40} height={40} ></Image>
                </div>
                <div>
                    <h1 className=' font-semibold ' >Free Shipping</h1>
                    <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                </div>
            </div>
            <div className=' w-[306px] flex gap-3 ' >
                <div>
                    <Image src={'/images/home/headphones.png'} alt={'Free shipping delivery-truck'} width={40} height={40} ></Image>
                </div>
                <div>
                    <h1 className=' font-semibold ' >Free Shipping</h1>
                    <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                </div>
            </div>
            <div className=' w-[306px] flex gap-3 ' >
                <div>
                    <Image src={'/images/home/shopping-bag.png'} alt={'Free shipping delivery-truck'} width={40} height={40} ></Image>
                </div>
                <div>
                    <h1 className=' font-semibold ' >Free Shipping</h1>
                    <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                </div>
            </div>
            <div className=' w-[306px] flex gap-3 ' >
                <div>
                    <Image src={'/images/home/package.png'} alt={'Free shipping delivery-truck'} width={40} height={40} ></Image>
                </div>
                <div>
                    <h1 className=' font-semibold ' >Free Shipping</h1>
                    <p className=' text-sm text-gray-400 ' >Free shipping on all your order</p>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;