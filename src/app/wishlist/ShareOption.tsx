import { TableCell, TableFooter, TableRow } from "@/components/ui/table";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

interface Props {}

function ShareOption(props: Props) {
  const {} = props;

  return (
    <div className="bg-transparent hover:bg-transparent border-t " >
      <div className=" flex items-center bg-transparent hover:bg-transparent w-full mx-2 my-4 " >
        {/* <TableCell colSpan={3}>Total</TableCell> */}
        <h2 className="text-md mr-3 " >Share:</h2>
        <ul className=" flex items-center gap-3 ">
          <li className=" w-10 h-10 rounded-full flex justify-center items-center overflow-hidden text-gray-700 hover:bg-Primary hover:text-white transition-all cursor-pointer ">
            <Link href={""}>
              <FaFacebookF></FaFacebookF>
            </Link>
          </li>
          <li className=" w-10 h-10 rounded-full flex justify-center items-center overflow-hidden text-gray-700 hover:bg-Primary hover:text-white transition-all cursor-pointer ">
            <Link href={""}>
              <FaTwitter></FaTwitter>
            </Link>
          </li>
          <li className=" w-10 h-10 rounded-full flex justify-center items-center overflow-hidden text-gray-700 hover:bg-Primary hover:text-white transition-all cursor-pointer ">
            <Link href={""}>
              <FaPinterestP></FaPinterestP>
            </Link>
          </li>
          <li className=" w-10 h-10 rounded-full flex justify-center items-center overflow-hidden text-gray-700 hover:bg-Primary hover:text-white transition-all cursor-pointer ">
            <Link href={""}>
              <FaInstagram></FaInstagram>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShareOption;
