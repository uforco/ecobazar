import React from 'react'
import Image from "next/image";

interface Props {}

function MediaSection(props: Props) {
    const {} = props
    return (
        <div className=" flex justify-between gap-2 items-center w-full " >
          <div className=" flex flex-col gap-2 " >
                <div className=" w-16 h-16 overflow-hidden p-2 cursor-pointer border border-Primary transition-all rounded flex justify-center items-center " >
                    <Image  src={"/images/categores/productImage.png"} width={100} height={100} alt={""} ></Image>
                </div>
                <div className=" w-16 h-16 overflow-hidden p-2 cursor-pointer border border-transparent hover:border-Primary transition-all rounded flex justify-center items-center " >
                    <Image   src={"/images/categores/productImage1.png"} width={100} height={100} alt={""}></Image>
                </div>
                <div className=" w-16 h-16 overflow-hidden p-2 cursor-pointer border border-transparent hover:border-Primary transition-all rounded flex justify-center items-center " >
                    <Image  src={"/images/categores/productImage2.png"} width={100} height={100} alt={""}></Image>
                </div>
                <div className=" w-16 h-16 overflow-hidden p-2 cursor-pointer border border-transparent hover:border-Primary transition-all rounded flex justify-center items-center " >
                    <Image  src={"/images/categores/productImage3.png"} width={100} height={100} alt={""}></Image>
                </div>       
          </div>
          <div>
            <Image src={"/images/categores/productImage.png"} width={500} height={380} alt={""}></Image>
          </div>
        </div>
    )
}

export default MediaSection
