'use client'
import React from "react";
import {
  Table,
  TableBody
} from "@/components/ui/table";
import { useGetAllOrderHistoryQuery } from "@/redux/features/orderList/orderlist";


import TableHeaderSection from "@/pages/acount/order_history_list/TableHeaderSection";
import Pagination from "@/pages/acount/order_history_list/Pagination";
import OrderItem, {orderItemsType} from "./OrderItem";

interface Props {}

function Orderhistory (props: Props) {
  const {} = props;

  const {data, isError, isLoading, isSuccess } = useGetAllOrderHistoryQuery('cm80bbde50000dj1kezlho2m6')

console.log(data)

  let containe;
  if(isLoading) containe = <div>Loading...</div>
  if(!isLoading && isError && !isSuccess) containe = <div>something is wrong</div>
  if(!isLoading && !isError && isSuccess && data.length < 1) containe = <div>No Data Found</div>
  if(!isLoading && !isError && isSuccess && data.length > 0) {
    containe = data.map((value: orderItemsType) => <OrderItem key={value.order_id.toString()} item={value}/>)
    
  }


  return (
    <>
      <div className=" px-3 min-h-[450px]">
        <Table>
          <TableHeaderSection/>
          <TableBody>
            {containe}
          </TableBody>
        </Table>
      </div>
      <Pagination/>
    </>
  );
}

export default Orderhistory
