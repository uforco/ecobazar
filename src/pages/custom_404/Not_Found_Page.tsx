import React from 'react'
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import Image from 'next/image';
import sometiong from '../../../public/images/error_page/custom404.png'
import Link from 'next/link';

interface Props {}

function Not_Found_Page(props: Props) {
    const {} = props

    return (
        <div className="py-14" >
            <MaxWidthControls>
                <div className=' w-full flex justify-center items-center ' >
                    <Image src={'/images/error_page/custom404.png'} alt={''} width={582} height={354} ></Image>
                </div>
                <div className=" flex justify-center items-center flex-col gap-4 " >
                    <div className=' w-full max-w-xl text-center ' >
                        <h2 className=' text-4xl font-semibold my-4 ' >Oops! page not found</h2>
                        <p className=' text-gray-500 my-5 mt-0 ' >Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
                    </div>
                    <div>
                        <Link href={'/'} className=' px-8 py-3 rounded-full bg-Primary text-white font-semibold ' >Back to Home</Link>
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    )
}

export default Not_Found_Page
