import MaxWidthControls from '@/components/shared/MaxWidthControls'
import Image from 'next/image'
import React from 'react'
import ProssceInfo from './ProssceInfo'

interface Props {}

function ShippingInfo(props: Props) {
    const {} = props

    return (
        <div className=' w-full relative ' >
                <Image className=' w-7/12 ' src={'/images/about/Image2.png'} alt={''} width={600} height={400} ></Image>
                <div className=' absolute top-0 left-0 w-full h-full ' >
                    <MaxWidthControls className='h-full' >
                        <div className=" flex justify-end items-center w-full h-full " >
                            <div className="w-6/12 pl-8 pr-4 " >
                                <h2 className=" text-6xl font-bold mb-4 text-green-900 " >100% Trusted Organic Food Store</h2>
                                <p className="mt-2" >
                                    Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. 
                                </p>
                                <ProssceInfo></ProssceInfo>
                            </div>
                        </div>
                    </MaxWidthControls>
                </div>
            </div>
    )
}

export default ShippingInfo
