import MaxWidthControls from '@/components/shared/MaxWidthControls';

import React from 'react'
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import ProductTable from './productTable/ProductTableMainComponent';


interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div>
            <div className=" w-full relative overflow-hidden bg-origin-content h-28 md:bg-cover bg-no-repeat bg-[url('/images/categores/Breadcrumbs.png')]  " >
                <div className='  w-full h-full ' >
                    <MaxWidthControls className='h-full'>
                        <div className=" flex items-center h-full  gap-2 text-base font-poppins text-gray-400 " >
                            <span className=' text-xl ' ><GoHome></GoHome></span> <IoIosArrowForward></IoIosArrowForward> <span className=' text-Primary ' >Shopping</span>
                        </div>
                    </MaxWidthControls>
                </div>
            </div>
            <div className=' w-full ' > <h2 className=' w-full text-center text-2xl my-8' >My Shopping Cart</h2> </div>
            <ProductTable></ProductTable>
        </div>
    )
}

export default Page
