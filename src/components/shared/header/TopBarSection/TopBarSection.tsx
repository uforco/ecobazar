import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  

const TopBarSection = () => {
    return (
        <div>
            <MaxWidthControls>
                <div className=' w-full flex justify-between items-center text-gray-400 font-light ' >
                    <div className=' flex items-center gap-1 ' >
                        <span className=' text-2xl -mt-1 ' > <HiOutlineLocationMarker></HiOutlineLocationMarker> </span>
                        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className=' flex items-center  gap-2 ' >
                        <div  >
                            <Select  defaultValue='eng' >
                                <SelectTrigger className=" text-sm font-light border-none shadow-none ">
                                    <SelectValue className=' text-sm ' placeholder="Eng" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value="eng">Eng</SelectItem>
                                    <SelectItem value="bn">Bn</SelectItem>
                                    <SelectItem value="ar">Ar</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div  >
                            <Select  defaultValue='usd' >
                                <SelectTrigger className=" text-sm font-light border-none shadow-none ">
                                    <SelectValue className=' text-sm ' placeholder="USD" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="tk">TK</SelectItem>
                                    <SelectItem value="sar">SAR</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default TopBarSection;