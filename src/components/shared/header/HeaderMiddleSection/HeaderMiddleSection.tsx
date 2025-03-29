import React from 'react';
import  MaxWidthControls  from '@/components/shared/MaxWidthControls';
import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import Link from 'next/link';
import SearchBer from './SearchBer';
import './middmanustyle.scss'

const HeaderMiddleSection = () => {
    return (
        <div>
            <MaxWidthControls>
            <div className=' flex justify-between items-center py-4  ' >
                    <div>
                        <Link href={'/'}>
                            <Image src={'/images/Logo.png'} width={200} height={90} alt={''}></Image>
                        </Link>
                    </div>
                    <div>
                        <SearchBer />
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