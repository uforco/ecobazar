'use client'
import React from "react";
import {
    CardContent,
  } from "@/components/ui/card"

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const SocalMediaLogin = () => {
  const serchparam = useSearchParams()
  const router = useRouter()

  const { data: profile, status } = useSession()
  if(status === 'authenticated' && profile?.user?.image){
    router.back()
  }

  const openGooglePoppup = async () => {
    const returnUrl = serchparam?.get('from') ?? '/'
    const result = await signIn('google', { redirect: false, callbackUrl: returnUrl});
    if(result?.ok){
      router.push(result.url as string);
    }
  }


  return (
    <CardContent className="flex justify-between gap-3 py-0 ">
      <button onClick={openGooglePoppup} className=" bg-gray-200 w-full border-[3px] shadow border-t-gray-200 border-l-gray-200 border-b-gray-300/50 border-r-gray-300/50 rounded-md active:scale-[0.97] active:border-gray-200/50  flex justify-center items-center p-1 ">
        <FcGoogle className=" text-2xl " />
      </button>
      <button className=" bg-[#1964fa] w-full border-[3px] shadow border-t-[#1964fa] border-l-[#1964fa] border-b-[#00246c]/50 border-r-[#00246c]/50 rounded-md active:scale-[0.97] active:border-[#0054ff]  flex justify-center items-center p-1 ">
        <div className=" flex justify-center items-center overflow-hidden text-[#1557d9]  relative rounded-full bg-[#1557d9] border-[#1557d9] border ">
          <BsFacebook className=" text-[21px] z-40  " />
          <div className=" w-[calc(100%-2px)] h-[calc(100%-2px)] absolute left-1/2 -translate-x-1/2  z-10 bg-white "></div>
        </div>
      </button>
    </CardContent>
  );
};

export default SocalMediaLogin;
