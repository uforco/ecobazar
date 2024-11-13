import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { BrandInstagram } from '@mynaui/icons-react';
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
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost1.png", link: ""}} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost2.png", link: ""}} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost3.png", link: ""}} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost4.png", link: ""}} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost5.png", link: ""}} ></SingleContine>
                        <SingleContine data={{image: "/images/home/followUs/InstagramPost5.png", link: ""}} ></SingleContine>
                    </div>
                </MaxWidthControls>
            </div>
            <div className=' bg-gray-100 py-8 ' >
                <MaxWidthControls>
                    <div className=' flex justify-between items-center ' >
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



const SingleContine = ({data}: {data: { image: string, link: string }}) => {
    return(
       <div className=' cursor-pointer  flex justify-center ' >
         <Dialog>
            <DialogTrigger asChild >
                <div className=' relative group overflow-hidden rounded-lg  w-[200px] h-[200px] ' >
                    <div className=' absolute group-hover:top-0 transition-all rounded-lg duration-500 -top-[200px] left-0 w-full h-full bg-hard_primary/60 flex justify-center items-center text-white' >
                    <BrandInstagram className=' w-12 h-12 ' ></BrandInstagram>
                    </div>
                    <Image src={data?.image} width={200} height={200} alt={''}></Image>
                </div>
            </DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Instagram</DialogTitle>
                </DialogHeader>
                <div className=' flex justify-around gap-3 ' >
                    <div >
                        <Image className=' h-48 w-48 ' src={data?.image} alt={''} width={350} height={300} ></Image>
                    </div>
                    <div >
                        <Image className=' h-48 w-48 ' src={data?.image} alt={''} width={350} height={300} ></Image>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
       </div>

    )
}