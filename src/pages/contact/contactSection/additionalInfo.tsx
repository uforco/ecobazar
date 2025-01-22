import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

interface Props {}

function AdditionalInfo(props: Props) {
  const {} = props;

  return (
    <>
      <div className=" w-full xl:w-[268px] h-[169px] overflow-hidden text-center border-r xl:border-r-0 xl:border-b flex flex-col justify-center items-center ">
        <div className="text-5xl flex justify-center text-Primary mb-3 ">
          <CiLocationOn></CiLocationOn>
        </div>
        <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
      </div>
      <div className=" w-full xl:w-[268px] h-[169px] overflow-hidden text-center  border-r xl:border-r-0 xl:border-b flex flex-col justify-center items-center ">
        <div className="text-5xl flex justify-center text-Primary mb-3 ">
          <TfiEmail></TfiEmail>
        </div>
        <p>Proxy@gmail.com</p>
        <p>Help.proxy@gmail.com</p>
      </div>
      <div className=" w-full xl:w-[268px] h-[169px] overflow-hidden text-center  flex flex-col justify-center items-center ">
        <div className="text-5xl flex justify-center text-Primary mb-3 ">
          <LiaPhoneVolumeSolid></LiaPhoneVolumeSolid>
        </div>
        <p>{"(219)"} 555-0114</p>
        <p>{"(164) 333-0487"}</p>
      </div>
    </>
  );
}

export default AdditionalInfo;
