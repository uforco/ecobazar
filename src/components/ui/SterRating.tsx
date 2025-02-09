'use client'
import React from 'react'
import { GoStarFill } from "react-icons/go";

interface Props {
    Rating?: string | number
}

function SterRating(props: Props) {
    const {Rating=0} = props

    const components = Array.from({length: 5}, (_, index) => {
        if(index < Number(Rating)){
            return function DynamicComponent() {
                return <span><GoStarFill></GoStarFill></span>;
              };
        }else{
            return function DynamicComponent() {
                return <span className=' text-gray-300 ' ><GoStarFill></GoStarFill></span>;
              };
        }
    })

    return components.map((Stars: any, inx) => (<Stars key={inx} ></Stars>))
}

export default SterRating
