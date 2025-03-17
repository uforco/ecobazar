'use client'
import React from 'react';
import { cartDataType, useGetShopingCartQuery } from '@/redux/features/MyShoppingCart/shoppingcart';
import {
    Table,
    TableBody
  } from "@/components/ui/table"

import ProductSummary from './ProductSummary';

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CustomRadioItem } from '@/components/shared/customRadioItem/CustomRadioItem';
import { Button } from '@/components/ui/button';


const OrderSummery = () => {

    const { data, isError, isLoading, isSuccess } = useGetShopingCartQuery(
        "cm80bbde50000dj1kezlho2m6"
      )

      const[hydro, setHydro] = React.useState(false)

      React.useEffect(()=>{
        setHydro(true)

        const circle = document.querySelector('.paymentRadiobtn');

        console.log(circle)


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
        <div className=" border rounded-lg p-4  overflow-hidden " >
            <h2 className=' text-2xl font-medium mb-4 ' >Order Summery</h2>
            <div className=" w-full min-h-36 max-h-[350px]  overflow-y-scroll " >
              <Table>
                  <TableBody>
                      {container}
                  </TableBody>
              </Table>
            </div>
            <div className="my-4" >
              <div className=' text-gray-600 flex justify-between items-center py-2 border-b ' ><span>Subtotal:</span> <span className=' text-gray-700 font-semibold ' >${85.00}</span></div>
              <div className=' text-gray-600 flex justify-between items-center py-2 border-b ' ><span>Shipping:</span> <span className=' text-gray-700 font-semibold ' >Free</span></div>
              <div className=' text-gray-600 flex justify-between items-center py-2 ' ><span>Total:</span> <span className=' text-gray-900 text-2xl font-semibold ' >${85.00}</span></div>
            </div>
            <div>
              <h2 className=' text-xl font-semibold mb-3 ' >Payment Method</h2>
              <RadioGroup defaultValue="cash-on-delivery">
                <div className="flex items-center space-x-3">
                  <CustomRadioItem className=' paymentRadiobtn ' value="cash-on-delivery" id="cash-on-delivery" />
                  <Label className='text-base ' htmlFor="cash-on-delivery">Cash on Delivery</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <CustomRadioItem value="bkash" id="bkash" />
                  <Label className='text-base ' htmlFor="bkash">Bkash</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <CustomRadioItem value="cart" id="cart" />
                  <Label className='text-base ' htmlFor="cart">Cart</Label>
                </div>
              </RadioGroup>
            </div>
            <Button className=' bg-Primary w-full rounded-full text-lg h-10 mt-5 active:scale-95 hover:bg-Primary/95 ' >Place Order</Button>
        </div>
    );
};

export default OrderSummery;