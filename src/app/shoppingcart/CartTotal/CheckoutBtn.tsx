"use client";
import discountPriceFun from '@/hooks/discountPriceFunction';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { cartDataType } from '@/redux/features/MyShoppingCart/shoppingcart';
import { insertOrderItems } from '@/redux/features/orderByCheckout/checkoutSlice';
import React, { useState } from 'react';

const CheckoutBtn = ({data}:{data: cartDataType[] | undefined}) => {
    const chechoutData = useAppSelector((state) => state.checkoutSlice)
    const dispatch = useAppDispatch()

    const[checkoutProcess, setCheckoutProcess] = useState<boolean>(false)

    const dlecartlist: string[] = []
    const sortdat = data?.map((item: cartDataType) => {
        dlecartlist.push(item.cart_id)
        return ({ 
            product_id: item.product_id,
            price: item.price,
            discount: item.discount,
            quantity: item.quantity,
            total_price: Number((Number(discountPriceFun(item.discount, item.price))*item.quantity).toFixed(2))
        })
    })


const saveCheckOutDetails = async () => {
    setCheckoutProcess(true)
    if (sortdat?.length) {
        dispatch(insertOrderItems({ order_items: sortdat, deleteCartlist: dlecartlist }))
    }
    setTimeout(()=>{
        setCheckoutProcess(false)
    },1000)
}

console.log("chechoutData", chechoutData);




    return (
        <button onClick={saveCheckOutDetails} className=" w-full rounded-full relative h-12 bg-Primary flex justify-center items-center text-white font-poppins ">
            {!checkoutProcess? "Proceed to checkout" : <SvgLoader/>}
        </button>
    );
};

export default CheckoutBtn;


const SvgLoader =() => {
    return (
        <div className="  absolute z-50 w-[80px]  -top-4 left-1/2 -translate-x-1/2 " >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="8" r="8" cx="40" cy="100">
                    <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
                </circle>
                <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="8" r="8" cx="100" cy="100">
                    <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
                </circle>
                <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="8" r="8" cx="160" cy="100">
                    <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
                </circle>
            </svg>
        </div>
    )
}