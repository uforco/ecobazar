'use client'
import { TableBody, TableRow, TableCell } from "@/components/ui/table";
import { getWishlistId } from "@/lib/saveWishlist";
import { useGetWishlistQuery } from "@/redux/features/wishlist/wishlist";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";


const invoices = [
    {
        name: "Green Capsicum",
        img: "/images/wishlist/Image1.png",
        price: 20.99,
        discount: 10,
        stockStatus: true,
    },
    {
        name: "Chinese Cabbage",
        img: "/images/wishlist/Image2.png",
        price: 45.00,
        discount: 90,
        stockStatus: true,
    },
    {
        name: "Fresh Sujapuri Mango",
        img: "/images/wishlist/Image3.png",
        price: 9.00,
        discount: 0,
        stockStatus: false,
    }
  ]



const ContaineItems = () => {
    const [wishlist, setWishlist] = useState<string[]>([])

    // console.log(wishlist)

    const { isError, isSuccess, isLoading, data, refetch } = useGetWishlistQuery(wishlist)


    useEffect(()=>{
        setWishlist(getWishlistId())
    },[])


  return (
    <TableBody>
      {invoices.map((invoice) => (
        <TableRow key={invoice.img}>
          <TableCell className="font-medium">
            <div className=" flex justify-start items-center ">
              <Image
                className=" w-[100px] h-[100px] "
                width={100}
                height={100}
                src={invoice.img}
                alt={""}
              ></Image>
              <h2 className="ml-3">{invoice.name}</h2>
            </div>
          </TableCell>
          <TableCell>
            {(() => {
              const integerPart = Math.floor(invoice.price);
              const floatingPart = invoice.price - integerPart;
              const discont =
                integerPart -
                (integerPart / 100) * invoice.discount +
                floatingPart;
              return (
                <p>
                  <span>
                    ${invoice.discount > 0 ? discont.toFixed(2) : invoice.price}
                  </span>
                  {invoice.discount > 0 && (
                    <span className="line-through text-gray-500 ml-1 ">
                      ${invoice.price}
                    </span>
                  )}
                </p>
              );
            })()}
          </TableCell>
          <TableCell>
            {invoice.stockStatus ? (
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
              <button
                className={`${
                  !invoice.stockStatus
                    ? " bg-gray-300 text-gray-600 "
                    : " bg-Primary hover:bg-green-600 text-white"
                } rounded-full px-6 py-2 `}
              >
                Add to Cart
              </button>
              <button type='button' onClick={refetch} className=" text-xl border-2 rounded-full p-1 ">
                <IoClose></IoClose>
              </button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default ContaineItems;
