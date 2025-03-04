import React from 'react'
import { FaStar } from 'react-icons/fa';

interface Props {
    rating: string | number;
}

function RatingProduct(props: Props) {
    const {rating} = props

    return Array.from({length: 4}, (_, i) => 
         <FaStar key={i} className={` ${i < Number(rating)? "text-warning":" text-gray-300 "}`} ></FaStar>
        )
}

export default RatingProduct
