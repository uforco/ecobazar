import React from 'react'
import { Button } from '@/components/ui/button';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

interface Props {
    className?: string
}

function Profle(props: Props) {
    const { className:classname } = props

    return (
        <div className={`${classname} `} >
            <div className=' text-center ' >
                <Avatar className=' w-[120px] h-[120px] ' >
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <h2 className=' text-xl font-medium font-poppins mt-2 ' >Dianne Russell</h2>
            <p className=' text-sm font-poppins text-gray-400 my-1 ' >Customer</p>
            <Button  className=' bg-transparent shadow-none text-Primary font-medium hover:shadow-none hover:bg-transparent ' >Edit Profile</Button>
        </div>
    )
}

export default Profle
