import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import DownloadApp from './DownloadApp';
import FooterAbout from './FooterAbout';
import HeadingTitle from './../HeadingTitle';
import Link  from 'next/link';
import Image  from 'next/image';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram  } from "react-icons/fa";


const FooterSection = () => {
    return (
        <div className=' bg-gray-900 ' >
            <MaxWidthControls>
                <div className=' grid grid-cols-7 w-full py-[80px] ' >
                    <FooterAbout></FooterAbout>
                    {/* url section */}
                    <div className=' text-gray-500 ' >
                        <HeadingTitle className=' text-xl mb-5 ' >My Account</HeadingTitle>
                        <div>
                            <ul className=' flex flex-col gap-2 ' >
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>My Account</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Order History</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Shoping Cart</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Wishlist</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Settings</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className=' text-gray-500 ' >
                        <HeadingTitle className=' text-xl mb-5 ' >Helps</HeadingTitle>
                        <div>
                            <ul className=' flex flex-col gap-2 ' >
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Contact</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Faqs</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Terms & Condition</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className=' text-gray-500 ' >
                        <HeadingTitle className=' text-xl mb-5 ' >Proxy</HeadingTitle>
                        <div>
                            <ul className=' flex flex-col gap-2 ' >
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>About</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Shop</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Product</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Products Details</Link></li>
                                <li className=' text-sm ' ><Link className=' hover:text-white transition-all ' href={''}>Track Order</Link></li>
                            </ul>
                        </div>
                    </div>

                    <DownloadApp></DownloadApp>
                </div>
            </MaxWidthControls>
            <MaxWidthControls>
                <div className=' border-t border-gray-600  py-5 flex justify-between items-center '  >
                    <div>
                        <ul className=' flex items-center gap-3 ' >
                            <li className=' w-10 h-10 rounded-full flex justify-center items-center overflow-hidden text-gray-300 hover:bg-Primary hover:text-white transition-all cursor-pointer ' ><Link href={''}><FaFacebookF></FaFacebookF></Link></li>
                            <li className=' w-10 h-10 rounded-full flex justify-center items-center overflow-hidden text-gray-300 hover:bg-Primary hover:text-white transition-all cursor-pointer ' ><Link href={''}><FaTwitter></FaTwitter></Link></li>
                            <li className=' w-10 h-10 rounded-full flex justify-center items-center overflow-hidden text-gray-300 hover:bg-Primary hover:text-white transition-all cursor-pointer ' ><Link href={''}><FaPinterestP ></FaPinterestP></Link></li>
                            <li className=' w-10 h-10 rounded-full flex justify-center items-center overflow-hidden text-gray-300 hover:bg-Primary hover:text-white transition-all cursor-pointer ' ><Link href={''}><FaInstagram></FaInstagram></Link></li>
                        </ul>
                    </div>
                    <p className=' text-gray-500 ' >Ecobazar eCommerce © 2021. All Rights Reserved</p>
                    <div className=' flex justify-end items-center gap-1 ' >
                        <div className=' border rounded-md border-gray-500 flex justify-center items-center ' > <Image src={'/images/pymentlogo/Cart.png'} className=' w-12 ' width={500} height={200} alt={''}></Image> </div>
                        <div className=' border rounded-md border-gray-500 flex justify-center items-center ' > <Image src={'/images/pymentlogo/ApplePay.png'} className=' w-12 ' width={500} height={200} alt={''}></Image> </div>
                        <div className=' border rounded-md border-gray-500 flex justify-center items-center ' > <Image src={'/images/pymentlogo/visa-logo.png'} className=' w-12 ' width={500} height={200} alt={''}></Image> </div>
                        <div className=' border rounded-md border-gray-500 flex justify-center items-center ' > <Image src={'/images/pymentlogo/Discover.png'} className=' w-12 ' width={500} height={200} alt={''}></Image> </div>
                        <div className=' border rounded-md border-gray-500 flex justify-center items-center ' > <Image src={'/images/pymentlogo/Method=Mastercard.png'} className=' w-12 ' width={500} height={200} alt={''}></Image> </div>
                        
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default FooterSection;
