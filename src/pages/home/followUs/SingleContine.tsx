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

const SingleContine = ({data}: {data: { image: string, link: string, swt?: boolean }}) => {
    return(
       <div className=' cursor-pointer  flex justify-center ' >
         <div>
            <Dialog>
                <DialogTrigger >
                    <div className=' relative group overflow-hidden rounded-lg  w-[200px] h-[200px] ' >
                        <div className=' absolute group-hover:top-0 transition-all rounded-lg duration-500 -top-[200px] left-0 w-full h-full bg-hard_primary/60 flex justify-center items-center text-white' >
                            <BrandInstagram className=' w-12 h-12 ' ></BrandInstagram>
                        </div>
                        <Image src={data?.image} width={200} height={200} alt={''}></Image>
                    </div>
                </DialogTrigger>
                <DialogContent className=' -translate-x-1/2 -translate-y-1/2 follow-DialogContent ' >
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
       </div>

    )
}

export default SingleContine