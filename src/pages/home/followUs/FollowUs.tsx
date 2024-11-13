import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import Image from 'next/image';
import SingleContine from './SingleContine'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
  
const FollowUs = () => {
    return (
        <div>
            <div className=' mb-[100px] ' >
                <MaxWidthControls>
                    <div className=' overflow-hidden ' >
                        <h2 className=' text-[32px] font-semibold text-center mb-5 ' >Follow us on Instagram</h2>
                    </div>
                    <div className=' grid grid-cols-3 sm:grid-cols-6 overflow-hidden gap-3 mx-2 ' >
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost1.png", link: "", swt: true }} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost2.png", link: "" }} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost3.png", link: "" }} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost4.png", link: "" }} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost5.png", link: "" }} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost5.png", link: "" }} ></SingleContine>
                    </div>
                </MaxWidthControls>
            </div>
            <div className=' bg-gray-100 py-8 ' >
                <MaxWidthControls>
                    <div className=' flex justify-between items-center overflow-hidden ' >
                        <div>
                            <Image src={'/images/Logo.png'} alt={''} height={80} width={200} ></Image>
                        </div>
                        <div>
                            <h2 className=' text-2xl font-medium mb-1 ' >Subcribe our Newsletter</h2>
                            <p className=' text-sm text-gray-400 ' >Pellentesque eu nibh eget mauris congue mattis matti.</p>
                        </div>
                        <div>
                            <div className=' flex justify-between items-center w-full ' >
                                <Input className=' rounded-full  z-10 w-[300px] bg-white ' type="email" placeholder="Email" />
                                <Button className=' rounded-full z-30 -ml-10 bg-Primary px-8 py-[19px] ' >Subscribe</Button>
                            </div>
                        </div>
                    </div> 
                </MaxWidthControls>
            </div>
        </div>
    );
};

export default FollowUs;



