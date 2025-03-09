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
    
    const [hydro, setHydro] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    const handleError = () => {
      setHydro(false)
    };


    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])


    return (
        <div className="relative w-full h-full overflow-hidden ">
      {loading && <div className="absolute inset-0 flex items-center justify-center bg-gray-200">Loading...</div>}
{isClient && hydro?
      <Image
        className={classname}
        src={hydro? '' : '/images/fullbackImage.png'}
        alt={Alt}
        width={Width}
        height={Height}
        onError={handleError}
        onLoad={() => setLoading(false)}
      /> 
      :
      <Image
        className={classname}
        src={'/images/fullbackImage.png'}
        alt={Alt}
        width={Width}
        height={Height}
        onError={handleError}
        onLoad={() => setLoading(false)}
      />
}
    </div>
    )
}

// export default FallbackImage
