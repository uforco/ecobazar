'use client'
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { deliveryAddress, orderSubmitAction, submitSuccessfull } from '@/redux/features/orderByCheckout/checkoutSlice';
import React, { ReactNode } from 'react';


const FormSubmitAction = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch()
    const orderDataRedux = useAppSelector((state) => state.checkoutSlice)

    async function onSubmit(values: any) {
        values.preventDefault();
        // dispatch(orderSubmitAction())
        const formData = new FormData(values.target as HTMLFormElement);

        // setTimeout(()=>{
        //     dispatch(submitSuccessfull())
        // },4000)

        const address = {
            name: `${formData.get('firstName')} ${formData.get('lastName')}`,
            address: formData.get('address'),
            state: (formData.get('states') as string).split("-")[1],
            city: formData.get('city'),
            postcode: formData.get('postcode'),
            email: formData.get('email'),
            phone: formData.get('phone')
        }
        dispatch(deliveryAddress(address))
        console.log(orderDataRedux)
      }


    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default FormSubmitAction;