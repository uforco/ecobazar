
import React from 'react';
import dynamic from 'next/dynamic'
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import BodySection from './BodyInfo/BodySection';
import RelatedProduct from './relatedProduct/RelatedProduct';
const HeadingSec = dynamic(() => import('./headingsec/HeadingSec'))


const page = () => {

    return (
        <div>
            <div className=" w-full relative overflow-hidden bg-origin-content h-28 md:bg-cover bg-no-repeat bg-[url('/images/categores/Breadcrumbs.png')]  " >
                <div className='  w-full h-full ' >
                    <MaxWidthControls className='h-full' >
                        <div className=" flex items-center h-full  gap-2 text-base font-poppins text-gray-400 " >
                            <span className=' text-xl ' ><GoHome></GoHome></span> <IoIosArrowForward></IoIosArrowForward> <span> Category </span> <IoIosArrowForward></IoIosArrowForward> <span> Vegetables </span> <IoIosArrowForward></IoIosArrowForward> <span className=' text-Primary ' >Chinese Cabbage</span>
                        </div>
                    </MaxWidthControls>
                </div>
            </div>
            <HeadingSec></HeadingSec>
            <BodySection></BodySection>
            <RelatedProduct></RelatedProduct>
        </div>
    );
};

export default page;