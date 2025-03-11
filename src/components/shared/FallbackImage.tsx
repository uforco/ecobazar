'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string
}

export default function FallbackImage(props: Props) {
    const {src: Src, alt: Alt, width: Width, height: Height, className: classname} = props
    
    const [hydro, setHydro] = useState<string>(Src);
    const [loading, setLoading] = useState<boolean>(true);

    const handleError = () => {
      setHydro('/images/fullbackImage.png')
    };


    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])


    return (isClient &&
        <div className="relative w-full h-full overflow-hidden ">
      {loading && <div className="absolute inset-0 flex items-center justify-center bg-gray-200">Loading...</div>}
{/* {isClient && hydro? */}
      <img
        className={classname}
        src={hydro}
        alt={Alt}
        width={Width}
        height={Height}
        onError={handleError}
        onLoad={() => setLoading(false)}
      /> 
      {/* :
      <img
        className={classname}
        src={'/images/fullbackImage.png'}
        alt={Alt}
        width={Width}
        height={Height}
        onError={handleError}
        onLoad={() => setLoading(false)}
      />
} */}
    </div>
    )
}

// export default FallbackImage
