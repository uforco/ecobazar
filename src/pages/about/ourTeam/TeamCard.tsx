import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram  } from "react-icons/fa";
import Link from 'next/link';


interface Props {}

function TeamCard(props: Props) {
  const {} = props;

  return (
    <div className=" w-full flex justify-center " >
      <div className=" w-[312px] bg-white rounded-xl overflow-hidden shadow-lg group my-8 ">
      <div className=" w-full h-[280px] overflow-hidden relative  ">
        <div className=" absolute group-hover:bottom-0 -bottom-[290px] transition-all left-0 w-full h-full bg-green-900/40 flex justify-center items-center " >
            <ul className=" flex justify-center items-center gap-6 text-xl text-white " >
                <li className=" cursor-pointer transition-all hover:bg-Primary w-8 h-8 flex justify-center items-center rounded-full  " > <Link href="" > <FaFacebookF></FaFacebookF> </Link> </li>
                <li className=" cursor-pointer transition-all hover:bg-Primary w-8 h-8 flex justify-center items-center rounded-full  " > <Link href="" > <FaTwitter></FaTwitter> </Link> </li>
                <li className=" cursor-pointer transition-all hover:bg-Primary w-8 h-8 flex justify-center items-center rounded-full  " > <Link href="" > <FaPinterestP></FaPinterestP> </Link> </li>
                <li className=" cursor-pointer transition-all hover:bg-Primary w-8 h-8 flex justify-center items-center rounded-full  " > <Link href="" > <FaInstagram></FaInstagram> </Link> </li>
            </ul> 
        </div>
        <Image
          src={"/images/about/team1.png"}
          alt={""}
          width={440}
          height={400}
        ></Image>
      </div>
      <div className="p-2 ">
        <h2 className="font-semibold text-xl">Jenny Wilson</h2>
        <p className=" text-gray-500 ">Ceo & Founder</p>
      </div>
    </div>
    </div>
  );
}

export default TeamCard;
