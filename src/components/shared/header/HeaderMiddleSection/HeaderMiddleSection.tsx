import React from 'react';
import  MaxWidthControls  from '@/components/shared/MaxWidthControls';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FiPhoneCall } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

const HeaderMiddleSection = () => {
    return (
        <div>
            <MaxWidthControls>
            <div className=' flex justify-between items-center py-4 ' >
                    <div>
                        <Image src={'/images/Logo.png'} width={200} height={90} alt={''}></Image>
                    </div>
                    <div>
                        <div className=' flex items-center w-[400px] relative ' >
                            <span className=' absolute top-1/2 -translate-y-1/2 left-3 ' > <IoSearchOutline></IoSearchOutline> </span>
                            <Input className=' w-full pl-8 ' type="text" placeholder="Search" />
                            <Button  className=' absolute top-0 right-0 h-full ' >Search</Button>
                        </div>
                    </div>
                    <div className=' flex items-center gap-2 ' >
                        <div className=' text-3xl ' >
                            <FiPhoneCall></FiPhoneCall>
                        </div>
                        <div>
                            <p className=' text-sm font-light text-gray-400 ' >Customer Services</p>
                            <p className=' text-xl font-medium ' >{'(219)'} 555-0114</p>
                        </div>
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default HeaderMiddleSection;