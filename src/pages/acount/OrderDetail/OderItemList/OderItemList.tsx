import React from 'react'
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import SingleItem from './SingleItem';

interface Props {}

function OderItemList(props: Props) {
    const {} = props

    const invoices = [
        {
          name: "Green Capsicum",
          img: "/images/wishlist/Image1.png",
          price: 20.99,
          discount: 10,
          quantity: 3,
        },
        {
          name: "Chinese Cabbage",
          img: "/images/wishlist/Image2.png",
          price: 45.0,
          discount: 0,
          quantity: 1,
        },
        {
          name: "Fresh Sujapuri Mango",
          img: "/images/wishlist/Image3.png",
          price: 9.0,
          discount: 0,
          quantity: 7,
        },
      ];


    return (
        <div>
            <Table>
                <TableHeader>
                  <TableRow className=' bg-gray-200  ' >
                    <TableHead className="w-[360px] pl-8 text-gray-700 ">Product</TableHead>
                    <TableHead className=' text-gray-700 ' >Price</TableHead>
                    <TableHead className=' text-gray-700 ' >Quantity</TableHead>
                    <TableHead className=' text-gray-700 ' >Subtotal</TableHead>
                  </TableRow>
                </TableHeader>
                    <TableBody className=' w-full ' >
                    {invoices.map((invoice, inx) => (
                        <SingleItem
                        key={`invoice.img${inx}`}
                        invoice={invoice}
                        ></SingleItem>
                    ))}
                    </TableBody>
              </Table>
        </div>
    )
}

export default OderItemList
