import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram  } from "react-icons/fa";


interface Props {}

function BrandSection(props: Props) {
    const {} = props

    return (
        <div className=" border-b border-gray-300 pb-4  " >
            <div className=" flex justify-between mb-3 " >
                <div className=" flex items-center gap-1 mt-4 " >
                    <p>Brand:</p>
                <Image src={"/images/categores/brand.png"} width={50} height={50} alt="Brand logo" />
                </div>
                <div className=" flex items-center gap-1 mt-4 " >
                <p>Share item:</p>
                <ul className=" flex items-center gap-2 ml-1 " >
                    <li className=" size-10 flex justify-center items-center overflow-hidden rounded-full text-xl hover:bg-Primary hover:text-white transition-all cursor-pointer " > <FaFacebookF></FaFacebookF> </li>
                    <li className=" size-10 flex justify-center items-center overflow-hidden rounded-full text-xl hover:bg-Primary hover:text-white transition-all cursor-pointer " > <FaTwitter></FaTwitter> </li>
                    <li className=" size-10 flex justify-center items-center overflow-hidden rounded-full text-xl hover:bg-Primary hover:text-white transition-all cursor-pointer " > <FaPinterestP></FaPinterestP> </li>
                    <li className=" size-10 flex justify-center items-center overflow-hidden rounded-full text-xl hover:bg-Primary hover:text-white transition-all cursor-pointer " > <FaInstagram></FaInstagram> </li>
                </ul>
                </div>
            </div>
            <p className=" text-gray-600 " >
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. 
            </p>
        </div>
    )
}

export default BrandSection
