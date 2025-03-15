'use client'
import FallbackImage from '@/components/shared/FallbackImage';
import { TableCell, TableRow } from '@/components/ui/table';
import discountPriceFun from '@/hooks/discountPriceFunction';
import saveWishlist from '@/lib/saveWishlist';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';


 export interface wishItemType {
    id: string;
    product_id: string;
    product_name: string;
    price: string | number;
    discount: string | number;
    stock_Status: string | number;
    coverimage: string;
  }

const WishlistCart = ({ invoice, refetching}: { invoice: wishItemType, refetching: (id: string) => void}) => {
    const discountPrice = discountPriceFun(invoice.discount, invoice.price)
    const[dle, setDle] = useState<boolean>(false)

    const deleteItem = async (product_id: string) => {
          setDle(true)
          await saveWishlist(product_id)
          setTimeout( async ()=>{
            setDle(false)
            refetching(product_id)
          },1000)
    }

    const addtocard = async (product_id: string) => {
      const cartData = {
        userId: "cm80bbde50000dj1kezlho2m6",
        product_id,
        quantity: 1
      }
      const sevecartdata = await fetch('/api/addcart', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData)
      }).then((value) => value.json())
      if(sevecartdata?.product_id && sevecartdata?.cart_id) deleteItem(sevecartdata?.product_id)
    }

    return <TableRow className={`${dle? " absolute w-full flex items-center justify-between right-[100%] duration-1000 " : " right-0 "}  border h-[120px] transition-all z-50 duration-1000 ${dle? "bg-red-600 hover:bg-red-600 border-red-500 ":""} `} key={invoice?.product_id}>
    <TableCell className="font-medium">
      <div className=" flex justify-start items-center ">
        <div className='w-[100px] h-[100px]' >
          <FallbackImage
            className=" w-[100px] h-[100px] "
            width={100}
            height={100}
            src={invoice?.coverimage}
            alt={invoice.product_name}
          ></FallbackImage>
        </div>
        <h2 className="ml-3">{invoice.product_name}</h2>
      </div>
    </TableCell>
    <TableCell>
      {
        <p>
          <span className="text-lg" >
            ${discountPrice}
          </span>

          {Number(invoice.discount) > 0 && (
            <span className="line-through text-gray-500 ml-2 ">
              ${invoice.price}
            </span>
          )}
        </p>
      }
    </TableCell>
    <TableCell>
      {Number(invoice?.stock_Status) > 1 ? (
        <span className=" bg-Primary/10 text-Primary p-2 px-3 rounded-sm">
          In Stock
        </span>
      ) : (
        <span className=" bg-red-600/10 text-red-600 p-2 px-3 rounded-sm">
          Out of Stock
        </span>
      )}
    </TableCell>
    <TableCell>
      <div className=" flex justify-end gap-3 items-center ">
      <Link href={`/categories/${invoice?.product_id}`} className=" text-Primary underline mr-10 " > View Product </Link>
        <button
        disabled={Number(invoice?.stock_Status) < 1}
        onClick={() => addtocard(invoice?.product_id)}
          className={` ${
            Number(invoice?.stock_Status) < 1
              ? " bg-gray-300 text-gray-600 "
              : " bg-Primary hover:bg-green-600 text-white active:scale-95 "
          } rounded-full px-6 py-2 w-[120px] h-[36px] flex justify-center items-center `}
        >
          {
            !dle?
              "Add to Cart" 
            :
            <span className=" w-4 h-4 border-2 animate-spin rounded-full border-gray-300/60 border-t-gray-100 " ></span>
          }

        </button>
        <button type='button' onClick={() => deleteItem(invoice?.product_id)} className=" text-xl border-2 rounded-full p-1 z-[50] ">
          <IoClose></IoClose>
        </button>
      </div>
    </TableCell>
  </TableRow>
};

export default WishlistCart;