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
        <div className=" border rounded p-4  overflow-hidden mb-10 " >
            <h2 className=' text-2xl font-medium mb-2 ' >Order Summery</h2>
            <div className=" w-full h-[450px]  overflow-y-scroll " >
              <Table>
                  <TableBody>
                      {container}
                  </TableBody>
              </Table>
            </div>
            <div>
              <h2>dfrj</h2>
              <h2>dfrj</h2>
              <h2>dfrj</h2>
              <h2>dfrj</h2>
              <h2>dfrj</h2>
              <h2>dfrj</h2>
              <h2>dfrj</h2>
              <h2>dfrj</h2>
              <h2>dfrj</h2>
            </div>
        </div>
    );
};

export default OrderSummery;