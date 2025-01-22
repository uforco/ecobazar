import React from 'react';
import dynamic from 'next/dynamic';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import ShippingInfo from '@/pages/about/shippingInfo/ShippingInfo';
import Delivered from '@/pages/about/delivered/Delivered';
// import Testimonial from '@/pages/about/testimonial/Testimonial';
const Testimonial = dynamic(()=> import('@/pages/about/testimonial/Testimonial'))

// import Testimonial from '../../pages/homeTwo/testimonial/Testimonial';
import OurTeam from '@/pages/about/ourTeam/OurTeam';


const page = () => {
    return (
        <div >
            <div className=" w-full relative overflow-hidden bg-origin-content h-28 md:bg-cover bg-no-repeat bg-[url('/images/categores/Breadcrumbs.png')]  " >
                <div className='  w-full h-full ' >
                    <MaxWidthControls className='h-full'>
                        <div className=" flex items-center h-full  gap-2 text-base font-poppins text-gray-400 " >
                            <span className=' text-xl ' ><GoHome></GoHome></span> <IoIosArrowForward></IoIosArrowForward> <span className=' text-Primary ' >About</span>
                        </div>
                    </MaxWidthControls>
                </div>
            </div>
            <div>
                <MaxWidthControls>
                    <div className="flex gap-5 py-10">
                        <div className="w-full flex flex-col justify-center ml-10 ">
                            <h2 className=" text-6xl font-bold mb-10 " >100% Trusted Organic Food Store</h2>
                            <p>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                            </p>
                        </div>
                        <div className="w-full  " >
                            <Image className=' w-full ' src={'/images/about/Image1.png'} alt={''} width={600} height={400} ></Image>
                        </div>
                    </div>
                </MaxWidthControls>
            </div>
            <ShippingInfo></ShippingInfo>
            <Delivered/>
            <OurTeam></OurTeam>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default page;