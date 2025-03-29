import React from 'react';
import { TiStar } from 'react-icons/ti';

const RatingSter = ({ratingNumber, className: classname}: {ratingNumber: number | string, className?: string}) => {

    const sterrange = Array.from({ length: 5 }, (_, i) => i + 1)

    return (
        <>
        {
            sterrange.map((value) => <TiStar key={value} className={`${classname} size-4 ${value <= Number(ratingNumber) ? "text-warning" : "text-gray-300"}  `}></TiStar>)
        }
        </>
    );
};

export default RatingSter;