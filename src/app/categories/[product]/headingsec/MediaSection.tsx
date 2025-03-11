import React from 'react'
import Image from "next/image";

interface Props {
    images: string[];
}

function MediaSection(props: Props) {
    const {images} = props


    console.log(images[0])

    return (
        <div className=" flex justify-between items-center w-full " >
          <div className=" flex flex-col gap-1 " >
                <div className=" cursor-pointer border border-Primary transition-all rounded p-1 flex justify-center items-center " >
                    <Image className=" w-20 h-20 " src={"/images/categores/productImage.png"} width={80} height={80} alt={""} ></Image>
                </div>
                <div className=" cursor-pointer border border-transparent hover:border-Primary transition-all rounded p-1 flex justify-center items-center " >
                    <Image className=" w-20 h-20 "  src={"/images/categores/productImage1.png"} width={100} height={100} alt={""}></Image>
                </div>
                <div className=" cursor-pointer border border-transparent hover:border-Primary transition-all rounded p-1 flex justify-center items-center " >
                    <Image className=" w-20 h-20 " src={"/images/categores/productImage2.png"} width={80} height={80} alt={""}></Image>
                </div>
                <div className=" cursor-pointer border border-transparent hover:border-Primary transition-all rounded p-1 flex justify-center items-center " >
                    <Image className=" w-20 h-20 " src={"/images/categores/productImage3.png"} width={80} height={80} alt={""}></Image>
                </div>       
          </div>
          <div>
            <Image src={"/images/categores/productImage.png"} width={500} height={380} alt={""}></Image>
          </div>
        </div>
    )
}

export default MediaSection
