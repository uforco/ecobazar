'use client'
import React, { useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"
import ProcessDetails from './ProcessDetails'

interface Props {
    order_progress: number
}

function OrderProcessUpdate({order_progress}: Props) {

    const [pross, setPross] = useState<number>(order_progress)

    useEffect(()=>{
        setPross(order_progress)
    },[])

    return (
        <div className=' w-full px-10' >
            <div className=' relative ' >
                <div className=' px-8 ' >
                    <Progress value={pross}  className=' w-full bg-gray-200 ' />
                </div>
                <div className=' w-full absolute flex justify-between -left-2 -top-4  ' >
                    <ProcessDetails pross={pross} rang={1} title={'Order received'} processNumber={'01'} complateProcess={33}></ProcessDetails>
                    <ProcessDetails pross={pross} rang={33} title={'Processing'} processNumber={'02'} complateProcess={66}></ProcessDetails>
                    <ProcessDetails pross={pross} rang={66} title={'On the way'} processNumber={'03'} complateProcess={97}></ProcessDetails>
                    <ProcessDetails pross={pross} rang={97} title={'Delivered'} processNumber={'04'} complateProcess={100}></ProcessDetails>
                </div>
            </div>
        </div>
    )
}

export default OrderProcessUpdate
