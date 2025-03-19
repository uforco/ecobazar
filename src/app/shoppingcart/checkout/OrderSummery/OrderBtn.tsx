import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/app/hooks';


const OrderBtn = () => {
    const orderpush = useAppSelector(state => state.checkoutSlice.orderpush)
    return (
        <Button disabled={orderpush}  className=' bg-Primary w-full rounded-full text-lg h-10 mt-5 active:scale-95 hover:bg-Primary/95 ' >Place Order</Button>
    );
};

export default OrderBtn;