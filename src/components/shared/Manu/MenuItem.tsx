'use client'
import Image from 'next/image';
import React from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import Link from 'next/link';


const MenuItem = ({category}: {category: any}) => {
    const [open, setOpen] = React.useState(false)
    const bashUrl = `categories?item=${category.link}`
  return (
    <div className=" overflow-hidden px-2 transition-all duration-700 ">
      <div className=" flex items-center justify-between ">
        <Link href={bashUrl} className=" flex items-center gap-1">
          <span>
            <Image
              src={category.image}
              width={20}
              height={20}
              alt={""}
            ></Image>
          </span>
          <p className=" text-sm hover:text-Primary capitalize leading-tight text-muted-foreground">
            { category.name }
          </p>
        </Link>
        {
          category.nestedItem && <div className=' flex justify-end items-center ' >
                <button className=' text-base px-2 p-1 w-full ' onClick={()=> setOpen((priv => !priv)) } >
                    <MdOutlineArrowBackIos className={open? " -rotate-0 transition-all " : " -rotate-90 transition-all " } ></MdOutlineArrowBackIos>
                </button>
            </div>
        }
      </div>
      {
         category?.nestedItem && <ul className={`${open? " h-auto transition-all duration-700 " : " h-0 transition-all duration-700 "} mt-1 ml-5 overflow-hidden transition-all duration-700 `}>
            {
                category?.nestedItem?.map((item: any) => <li key={item.name} ><Link className=' hover:text-Primary text-sm text-gray-500 font-normal capitalize ' href={`${bashUrl}&sub=${item.link}`}>{item.name}</Link> </li>)
            }
        </ul>
      }
    </div>
  );
};

export default MenuItem;