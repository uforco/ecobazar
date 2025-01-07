import MaxWidthControls from '@/components/shared/MaxWidthControls'
import React from 'react'
import { GoHome } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image';
import { IoClose } from "react-icons/io5";

import {

    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  const invoices = [
    {
        img: "/images/wishlist/Image1.png",
        price: 20.99,
        discount: 70,
        stockStatus: true,
    },
    {
        img: "/images/wishlist/Image2.png",
        price: 45.00,
        discount: 0,
        stockStatus: true,
    },
    {
        img: "/images/wishlist/Image3.png",
        price: 9.00,
        discount: 0,
        stockStatus: false,
    }
  ]


interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div>
            <div className=" w-full relative overflow-hidden bg-origin-content h-28 md:bg-cover bg-no-repeat bg-[url('/images/categores/Breadcrumbs.png')]  " >
                <div className='  w-full h-full ' >
                    <MaxWidthControls className='h-full' >
                        <div className=" flex items-center h-full  gap-2 text-base font-poppins text-gray-400 " >
                            <span className=' text-xl ' ><GoHome></GoHome></span> <IoIosArrowForward></IoIosArrowForward> <span className=' text-Primary ' >Wishlist</span>
                        </div>
                    </MaxWidthControls>
                </div>
            </div>
            <div className=' w-full ' > <h2 className=' w-full text-center text-2xl my-8' >My Wishlist</h2> </div>
            <MaxWidthControls>
                <div>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[200px]">Product</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Stock Status</TableHead>
                            <TableHead className=" w-[200px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                            <TableRow key={invoice.img}>
                                <TableCell className="font-medium">
                                    <Image className=' w-[100px] h-[100px] ' width={100} height={100} src={invoice.img} alt={''}></Image>
                                </TableCell>
                                <TableCell>{
                                    (()=>{
                                        const integerPart  = Math.floor(invoice.price);
                                        const floatingPart = invoice.price - integerPart;
                                        const discountPrice = (integerPart / 100) * invoice.discount + floatingPart;
                                        return <p> <span>${invoice.discount > 0? discountPrice.toFixed(2) : invoice.price}</span> {invoice.discount > 0 && <span className='line-through text-gray-500 ml-1 ' >${invoice.price}</span>} </p>;
                                    })()
                                    }</TableCell>
                                <TableCell> {invoice.stockStatus? <span className=' bg-Primary/10 text-Primary p-2 px-3 rounded-sm' >In Stock</span> : <span className=' bg-red-600/10 text-red-600 p-2 px-3 rounded-sm' >Out of Stock</span> }  </TableCell>
                                <TableCell >
                                    <div className=' flex justify-end gap-3 items-center ' >
                                        <button className={`${!invoice.stockStatus? " bg-gray-300 text-gray-600 " : " bg-Primary hover:bg-green-600 text-white"} rounded-full px-6 py-2 `} >Add to Cart</button>
                                        <button className=' text-xl border-2 rounded-full p-1 ' >
                                            <IoClose></IoClose>
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </MaxWidthControls>
            <p className="none"> There will be no effects. Default value </p>
            <p className="underline"> Text will be underlined </p>
            <p className="overline"> A line will be drawn over the text </p>
            <p className="line-through"> Text will be strikethrough </p>
        </div>
    )
}

export default Page
