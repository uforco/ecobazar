import React from 'react'
// import { FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import RatingProduct from '@/components/shared/RatingProduct/RatingProduct';
import discountPriceFun from '@/hooks/discountPriceFunction';

interface Props {
    name: string;
    stock: string | number
    rating: string | number
    price: string | number
    discount: string | number
}

function HeadingTitleSec(props: Props) {
    const {
        name,
        stock,
        rating,
        price,
        discount
    } = props

    return (
        <div>
            <div className=" flex items-center gap-2 mt-4 " >
                <h1 className=" text-3xl font-semibold " >{name}</h1>
                {
                    Number(stock)? 
                    <Badge className=" text-Primary bg-Primary/20 " variant="outline">In Stock</Badge>
                    :
                    <Badge className=" text-red-500 bg-red-100 " variant="outline">In Stock</Badge>
                }
                    
                </div>
                <div className=" flex items-center gap-2 my-2 " >
                    <div className="flex gap-1 items-center " >
                        <RatingProduct rating={rating}></RatingProduct>
                    </div>
                    <div className=" flex items-center " >
                        <p>{rating} Review </p> <LuDot></LuDot> <p> SKU: 2,51,594</p>
                    </div>
                </div>
                <div className="flex gap-5 border-b border-gray-300 pb-4 ">
                { Number(discount) && <p className=" text-xl font-semibold text-gray-400 " ><s>${price}</s></p>}
                <p className=" text-xl font-semibold text-Primary " >${discountPriceFun(discount, price)}</p>
                {Number(discount) &&  <Badge className=" bg-red-100 text-red-500 " variant="outline">{discount}% Off</Badge>}
            </div>
        </div>
    )
}

export default HeadingTitleSec
