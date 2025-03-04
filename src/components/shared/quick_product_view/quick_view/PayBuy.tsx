'use client'
import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

interface Props {
  id: string;
  product_id: string;
  stock_Status: string | number;
}

function PayBuy(props: Props) {
    const {id,
      product_id,
      stock_Status} = props

      

    const[qty, setQty] = useState<number>(1)

    return (
        <div className="flex w-full items-center gap-5 my-5 border-b pb-5  " >
            <div className=" flex items-center gap-2 ">
              <div className=" flex gap-4 items-center rounded-full border p-2  ">
                <button onClick={()=> setQty((privous) => privous > 0? privous-1 : privous ) } className=" bg-gray-300 text-gray-600 w-8 h-8 flex justify-center items-center rounded-full " >-</button>
                <p className=" text-xl w-8 flex justify-center font-semibold " >{qty}</p>
                <button onClick={()=> setQty((privous) => privous < Number(stock_Status)? privous+1 : privous ) } className=" bg-gray-300 text-gray-600 w-8 h-8 flex justify-center items-center rounded-full " >+</button>
              </div>
            </div>
            <div className=" flex items-center gap-2  w-full " >
              <button className=" active:scale-95 bg-Primary text-white w-full h-12  rounded-full flex justify-center items-center " >
                Add to Cart
                <HiOutlineShoppingBag className=" text-white ml-2 -mt-1 "></HiOutlineShoppingBag>
              </button>
              <button className=" bg-Primary/20 text-Primary text-xl p-3 rounded-full " >
               <FaRegHeart></FaRegHeart>
              </button>
            </div>
          </div>
    )
}

export default PayBuy
