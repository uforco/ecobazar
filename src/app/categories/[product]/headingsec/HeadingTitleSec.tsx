import React from 'react'

import { FaStar } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

import { Badge } from "@/components/ui/badge";

interface Props {}

function HeadingTitleSec(props: Props) {
    const {} = props

    return (
        <div>
            <div className=" flex items-center gap-2 mt-4 " >
                <h1 className=" text-3xl font-semibold " >Chinese Cabbage</h1>
                <Badge className=" text-Primary bg-Primary/20 " variant="outline">In Stock</Badge>
                </div>
                <div className=" flex items-center gap-2 " >
                <div className="flex gap-1 items-center " >
                    <FaStar className=" text-warning " ></FaStar>
                    <FaStar className=" text-warning " ></FaStar>
                    <FaStar className=" text-warning " ></FaStar>
                    <FaStar className=" text-warning " ></FaStar>
                </div>
                <div className=" flex items-center " >
                    <p>4 Review </p> <LuDot></LuDot> <p> SKU: 2,51,594</p>
                </div>
                </div>
                <div className="flex gap-5 border-b border-gray-300 pb-4 ">
                <p className=" text-xl font-semibold text-gray-400 " ><s>$48.00</s></p>
                <p className=" text-xl font-semibold text-Primary " >$17.28</p>
                <Badge className=" bg-red-100 text-red-500 " variant="outline">64% Off</Badge>
            </div>
        </div>
    )
}

export default HeadingTitleSec
