'use client'
import React from 'react';
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Link from 'next/link';

export interface orderItemsType {
    order_id: String;
    order_date: String;
    order_status: String;
    total_price: number;
    total_products: number;
}

const OrderItem = ({item}:{item: orderItemsType}) => {

    // const { 
    //     order_id,
    //     order_date,
    //     order_status,
    //     total_price,
    //     total_products
    //  } = item

     console.log(item.order_id)

    //  ${order_id.slice(1)}

    // const url =  "/account/order_history/"+order_id.slice(1)


    // console.log(url)

    return (
        <>
        <TableRow
                style={{ border: 0 }}
                className=" py-5 bottom-0 text-gray-800 "
              >
                <TableCell className="font-medium">
                  {item?.order_id}
                </TableCell>
                <TableCell>{item?.order_date}</TableCell>
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