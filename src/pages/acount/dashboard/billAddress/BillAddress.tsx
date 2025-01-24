import { Button } from '@/components/ui/button'
import React from 'react'

interface Props {
    className?: string
}

function BillAddress(props: Props) {
    const { className:classname } = props

    return (
        <div className={`${classname}  `} >
            <div className='p-5 flex flex-col justify-between w-full h-full ' >
                <p className=' text-gray-500 ' >Billing Address</p>
                <h2 className=' text-xl font-medium font-poppins mt-2 ' >Dianne Russell</h2>
                <p className=' text-gray-500 ' >4140 Parker Rd. Allentown, New Mexico 31134</p>
                <p >dainne.ressell@gmail.com</p>
                <p>{'(671) 555-0110'}</p>
                <div>
                    <Button  className=' bg-transparent p-0 shadow-none text-Primary font-medium hover:shadow-none hover:bg-transparent ' >Edit Profile</Button>
                </div>
            </div>
        </div>
    )
}

export default BillAddress
