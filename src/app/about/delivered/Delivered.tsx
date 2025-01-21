import MaxWidthControls from '@/components/shared/MaxWidthControls'
import Image from 'next/image'
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface Props {}

function Delivered(props: Props) {
    const {} = props

    return (
        <div>
                <MaxWidthControls>
                    <div className="flex gap-5 py-10">
                        <div className="w-full flex flex-col justify-center ml-10 ">
                            <h2 className=" text-6xl font-bold mb-8 " >We Delivered, You Enjoy Your Order.</h2>
                            <p>
                            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
                            </p>

                            <div className=" flex flex-col gap-y-2 mt-5 " >
                                <div className="flex items-center gap-2 " > <span className=" text-green-900 bg-Primary/20 rounded-full text-md p-[2px] " ><IoMdCheckmark></IoMdCheckmark></span> <p>Sed in metus pellentesque.</p> </div>
                                <div className="flex items-center gap-2 " > <span className=" text-green-900 bg-Primary/20 rounded-full text-md p-[2px] " ><IoMdCheckmark></IoMdCheckmark></span> <p>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p> </div>
                                <div className="flex items-center gap-2 " > <span className=" text-green-900 bg-Primary/20 rounded-full text-md p-[2px] " ><IoMdCheckmark></IoMdCheckmark></span> <p>Maecenas ut nunc fringilla erat varius.</p> </div>
                            </div>

                            <div className="mt-6" >
                                <button className=" flex items-center gap-3 text-white bg-Primary px-6 py-2 rounded-full " ><span>Shop Now</span>  <MdOutlineArrowRightAlt className=" text-2xl " ></MdOutlineArrowRightAlt> </button>
                            </div>

                        </div>
                        <div className="w-full " >
                            <Image className=' w-full ' src={'/images/about/Image3.png'} alt={''} width={600} height={400} ></Image>
                        </div>
                    </div>
                </MaxWidthControls>
            </div>
    )
}

export default Delivered
