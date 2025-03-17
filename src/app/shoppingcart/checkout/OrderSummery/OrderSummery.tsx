'use client'
import React from 'react';
import { cartDataType, useGetShopingCartQuery } from '@/redux/features/MyShoppingCart/shoppingcart';
import {
    Table,
    TableBody
  } from "@/components/ui/table"

import ProductSummary from './ProductSummary';



const OrderSummery = () => {

    const { data, isError, isLoading, isSuccess } = useGetShopingCartQuery(
        "cm80bbde50000dj1kezlho2m6"
      )

      const[hydro, setHydro] = React.useState(false)
      React.useEffect(()=>{
        setHydro(true)
      },[])
      if(!hydro) return null;



  let container;
  if (isLoading) {
    container = (
      <>
        loading...
      </>
    );
  }
  if (!isLoading && isError) {container = <div>something is wrong</div>}
  if (!isLoading && !isError && isSuccess && data.length < 1) {container = <div className=" h-52 w-full " >No Data Found</div>;}
  if (!isLoading && !isError && isSuccess && data.length > 0) {
    container = data.map((item: cartDataType) => (
        <ProductSummary key={item.cart_id} item={item} />
    ));




  }
    

    return (
        <div className=" border rounded-lg p-4  overflow-hidden mb-10 " >
            <h2 className=' text-2xl font-medium mb-4 ' >Order Summery</h2>
            <div className=" w-full h-[350px]  overflow-y-scroll " >
              <Table>
                  <TableBody>
                      {container}
                  </TableBody>
              </Table>
            </div>
            <div>
              <div className=' text-gray-600 flex justify-between items-center py-3 border-b ' ><span>Subtotal:</span> <span className=' text-gray-700 font-semibold ' >${85.00}</span></div>
              <div className=' text-gray-600 flex justify-between items-center py-3 border-b ' ><span>Shipping:</span> <span className=' text-gray-700 font-semibold ' >Free</span></div>
              <div className=' text-gray-600 flex justify-between items-center py-3 ' ><span>Shipping:</span> <span className=' text-gray-900 text-2xl font-semibold ' >${85.00}</span></div>
            </div>
        </div>
    );
};

export default OrderSummery;