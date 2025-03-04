'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
    Src: string;
    alt: string;
    width: number;
    height: number;
    className?: string
}

function FallbackImage(props: Props) {
    const {Src, alt: Alt, width: Width, height: Height, className: classname} = props

    const [loading, setLoading] = useState(true);
    const [src, setSrc] = useState(Src || "/images/fullbackImage.png");

    return (
        <div className="relative w-full h-full overflow-hidden ">
      {loading && <div className="absolute inset-0 flex items-center justify-center bg-gray-200">Loading...</div>}

      <Image
        className={classname}
        src={src}
        alt={Alt}
        width={Width}
        height={Height}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setSrc("/images/fullbackImage.png")}
      />
    </div>
    )
}

export default FallbackImage
