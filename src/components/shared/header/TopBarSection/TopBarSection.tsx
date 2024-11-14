import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
  import { CiLocationOn } from "react-icons/ci";

const TopBarSection = () => {
    return (
        <div>
            <MaxWidthControls>
                <div className=' flex justify-between items-centers text-gray-400 py-2 border-b overflow-hidden ' >
                    <div className=' flex items-center gap-1 ' >
                        <div className=' text-xl ' >
                            <CiLocationOn></CiLocationOn>
                        </div>
                        <p className=' text-sm  ' >Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className=' flex items-center gap-2 ' >
                        {/* <div>
                            <Select>
                                <SelectTrigger defaultValue={'eng'} className="w-[80px] border-none shadow-none focus:border-transparent ">
                                    <SelectValue placeholder="Eng" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="eng">Eng</SelectItem>
                                    <SelectItem value="ar">Ar</SelectItem>
                                    <SelectItem value="itl">Itl</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select>
                                <SelectTrigger defaultValue={'usd'} className="w-[80px] border-none shadow-none focus:border-transparent ">
                                    <SelectValue placeholder="USD" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="tk">TK</SelectItem>
                                    <SelectItem value="pak">Pak</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default TopBarSection;