'use client'
import React from 'react'
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useGetAllOrderHistoryQuery } from '@/redux/features/orderList/orderlist';


interface orderItemsType {
  order_id: string;
  order_date: string;
  order_status: string;
  total_price: number;
  total_products: number;
}


function RecetOrderHistory() {
    
      const {data, isError, isLoading, isSuccess } = useGetAllOrderHistoryQuery('cm80bbde50000dj1kezlho2m6')
    
  
      let containe;
      if(isLoading) containe = <div>Loading...</div>
      if(!isLoading && isError && !isSuccess) containe = <div>something is wrong</div>
      if(!isLoading && !isError && isSuccess && data.length < 1) containe = <div>No Data Found</div>
      if(!isLoading && !isError && isSuccess && data.length > 0) {
        containe = data.map((item: orderItemsType) => (
          <TableRow style={{border: 0}} className=' py-5 bottom-0 text-gray-800 ' key={item.order_id}>
              <TableCell className="font-medium">
                  {item?.order_id}
                </TableCell>
                <TableCell>{
                  (new Date(item?.order_date)).toLocaleDateString('en-DE',{
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                }</TableCell>
                <TableCell>$ {item?.total_price} {`(${item?.total_products} Products)`}</TableCell>
                <TableCell>{item?.order_status}</TableCell>
                <TableCell className="text-right">
                  <Link
                    className=" text-Primary"
                    href={"/account/order_history/"+item?.order_id.slice(1)}
                  >
                    View Details
                  </Link>
                </TableCell>
          </TableRow>
        ))
      }


    return (
        <div className=' border mt-5 pb-3 rounded-lg h-[404px] ' >
            <div className=' flex justify-between w-full p-4 px-5 ' >
                <h2 className=' font-poppins font-semibold ' >Recet Order History</h2>
                <Link className=' text-Primary ' href={'/account/order_history'}>View All</Link>
            </div>
            <div className=' px-3 ' >
                <Table  >
                    <TableHeader className=' bg-gray-200  ' >
                        <TableRow  >
                            <TableHead className="w-[200px] text-gray-900 ">Order ID</TableHead>
                            <TableHead className='w-[200px] text-gray-900 ' >Date</TableHead>
                            <TableHead className=' text-gray-900 ' >Total</TableHead>
                            <TableHead className=' text-gray-900 ' >Status</TableHead>
                            <TableHead className="text-right text-gray-900 "></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {containe}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default RecetOrderHistory
