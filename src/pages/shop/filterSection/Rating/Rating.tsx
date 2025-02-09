'use client'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Checkbox } from '@/components/ui/checkbox';
import SterRating from '@/components/ui/SterRating';

interface Props {}


function Rating(props: Props) {
    const {} = props

    const [swt, setSwt] = React.useState<boolean>(false)

    return (
        <div className="p-3 transition-all border-b " >
            <div onClick={() => setSwt((priv) => !priv)} className="flex items-center justify-between cursor-pointer " >
                <h2 className=" font-semibold ">Rating</h2>
                <span className={ `${swt? "rotate-0" : "-rotate-180"} transition-all duration-300 `} > <IoIosArrowDown></IoIosArrowDown> </span>
            </div>
            <div className={` overflow-hidden transition-all mt-3 duration-500 ${ swt? "h-0" : " h-[200px] " } `} >
                <ul className="ml-1" >
                    <li className='flex items-center mb-4 gap-2 ' >
                        <Checkbox id="default-checkbox" ></Checkbox>
                        <div className=' flex items-center gap-[3px]  text-warning ' >
                            <SterRating Rating='5' ></SterRating>
                        </div>
                        <span>5.0</span>
                    </li>
                    <li className='flex items-center mb-4 gap-2 ' >
                        <Checkbox id="default-checkbox" ></Checkbox>
                        <div className=' flex items-center gap-[3px]  text-warning ' >
                            <SterRating Rating='4' ></SterRating>
                        </div>
                        <span>4.0 & up</span>
                    </li>
                    <li className='flex items-center mb-4 gap-2 ' >
                        <Checkbox id="default-checkbox" ></Checkbox>
                        <div className=' flex items-center gap-[3px]  text-warning ' >
                            <SterRating Rating='3' ></SterRating>
                        </div>
                        <span>3.0 & up</span>
                    </li>
                    <li className='flex items-center mb-4 gap-2 ' >
                        <Checkbox id="default-checkbox" ></Checkbox>
                        <div className=' flex items-center gap-[3px]  text-warning ' >
                            <SterRating Rating='2' ></SterRating>
                        </div>
                        <span>2.0 & up</span>
                    </li>
                    <li className='flex items-center mb-4 gap-2 ' >
                        <Checkbox id="default-checkbox" ></Checkbox>
                        <div className=' flex items-center gap-[3px]  text-warning ' >
                            <SterRating Rating='1' ></SterRating>
                        </div>
                        <span>1.0 & up</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rating
