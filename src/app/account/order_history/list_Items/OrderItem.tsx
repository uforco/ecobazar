'use client'
import React from 'react';
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Link from 'next/link';

export interface orderItemsType {
    order_id: string;
    order_date: string;
    order_status: string;
    total_price: number;
    total_products: number;
}

const OrderItem = ({item}:{item: orderItemsType}) => {


    return (
        <>
        <TableRow
                style={{ border: 0 }}
                className=" py-5 bottom-0 text-gray-800 "
              >
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
        </>
    );
};

export default OrderItem;