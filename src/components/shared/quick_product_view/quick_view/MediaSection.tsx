'use client'
import React from 'react'
import Image from "next/image";
import FallbackImage from '../../FallbackImage';

interface Props {
    image: string[];
}

function MediaSection(props: Props) {
    const {image} = props
    const [activeImage, setActiveImage] = React.useState<number>(0);
    const [hydro, setHydro] = React.useState<boolean>(true);


    const handleError = () => {
        setHydro(false)
      };


    return (
        <div className=" flex justify-between gap-2 items-center w-full " >
          <div className=" flex flex-col gap-2 justify-evenly h-full " >
                {
                    image.map((img,inx) => (
                        <div key={inx} 
                            onClick={()=> {
                                setActiveImage(inx)
                                setHydro(true)
                            }}
                            className={` w-16 h-16 overflow-hidden p-2 cursor-pointer border hover:border-Primary transition-all rounded flex justify-center items-center ${activeImage === inx? "border-Primary" : "" } ` }>
                            <FallbackImage src={img} width={100} height={100} alt={""}></FallbackImage>
                        </div>))
                }     
          </div>
          <div className=' w-[400px] h-[400px] flex items-center justify-center ' >
            {

                <Image
                        className={''}
                        src={hydro? "/image-activeImage.png" : '/images/fullbackImage.png'}
                        alt={''}
                        width={500}
                        height={500}
                        onError={handleError}
                      /> 
            }
          </div>
        </div>
    )
}

export default MediaSection
