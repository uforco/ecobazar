'use client'
import React from 'react'
import ShippingAddress from '@/pages/acount/OrderDetail/ShippingAddress';
import PaymentDetails from '@/pages/acount/OrderDetail/PaymentDetails';
import OrderProcessUpdate from '@/pages/acount/OrderDetail/OderProcessBer/OrderProcessUpdate';
import OderItemList from '@/pages/acount/OrderDetail/OderItemList/OderItemList';
import Link from 'next/link';
import { useGetOrderDetailsQuery } from '@/redux/features/orderList/orderlist';
import { useParams } from 'next/navigation';

interface Props {
}

function Page({}: Props) {
   const params = useParams();
   const id = params?.id as string;

   const {data, isError, isLoading, isSuccess } = useGetOrderDetailsQuery(id)


    
   if(isLoading) return <div>Loading...</div>
   if(!isLoading && isError && !isSuccess) return <div>something wrong</div>
   if(!isLoading && !isError && isSuccess && data.length < 1) return <div>No Data Found</div>

   if(!isLoading && !isError && isSuccess && data.length > 0) {

        //console.log(data[0])

        const paymentdetails = {
            orderid: data[0]?.order_id,
            subtotal: data[0]?.subtotal,
            total_discount: data[0]?.total_discount,
            total: data[0]?.total,
        }

        return (
            <div className=' border rounded-lg ' >
                <div className=' flex items-center justify-between p-4 border-b ' >
                    <div className=' flex items-center gap-2 text-gray-500 ' >
                        <h2 className=' text-xl font-semibold text-gray-900 ' >Order Detail</h2> • <p>April 24, 2021</p> • <p>3 Products</p>
                    </div>
                    <Link className=' text-Primary ' href={'/account/order_history'} >Back to List</Link>
                </div>
                <div className=' p-5 flex justify-between items-start '>
                    <ShippingAddress deliyveryaddress={data[0]?.deliyveryaddress} ></ShippingAddress>
                    <PaymentDetails paymentdetails={paymentdetails} ></PaymentDetails>
                </div>
                <div className=' flex justify-center items-center h-28 overflow-hidden mb-5 ' >
                    <OrderProcessUpdate order_progress={data[0]?.order_progress} ></OrderProcessUpdate>
                </div>
                <div>
                   {data[0]?.orderhistory.length && <OderItemList items={data[0]?.orderhistory} ></OderItemList>}
                </div>
            </div>
        )
    }
    else return null
}

export default Page
