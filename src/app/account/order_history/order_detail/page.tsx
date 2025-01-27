import React from 'react'
import ShippingAddress from '@/pages/acount/OrderDetail/ShippingAddress';
import PaymentDetails from '@/pages/acount/OrderDetail/PaymentDetails';
import OrderProcessUpdate from '@/pages/acount/OrderDetail/OderProcessBer/OrderProcessUpdate';
import OderItemList from '@/pages/acount/OrderDetail/OderItemList/OderItemList';

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div className=' border rounded-lg ' >
            <div className=' flex items-center justify-between p-4 border-b ' >
                <div className=' flex items-center gap-2 text-gray-500 ' >
                    <h2 className=' text-xl font-semibold text-gray-900 ' >Order Detail</h2> • <p>April 24, 2021</p> • <p>3 Products</p>
                </div>
                <button className=' text-Primary ' >Back to List</button>
            </div>
            <div className=' p-5 flex justify-between items-start '>
                <ShippingAddress></ShippingAddress>
                <PaymentDetails></PaymentDetails>
            </div>
            <div className=' flex justify-center items-center h-28 overflow-hidden mb-5 ' >
                 <OrderProcessUpdate></OrderProcessUpdate>
            </div>
            <div>
                <OderItemList></OderItemList>
            </div>
        </div>
    )
}

export default Page
