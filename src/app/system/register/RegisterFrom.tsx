"use client";
import React, { Suspense, useState } from "react";
import { Input } from "@/components/ui/input";
import Errorhandle from "@/components/login_form/Errorhandle";
import { Button } from "@/components/ui/button";
import { GoEye, GoEyeClosed  } from "react-icons/go";


const RegisterFrom = () => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [longinLoad, setLonginLoad] = useState<boolean>(false);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fromData = new FormData(event.target as HTMLFormElement);
  };
  const actionMove = () => {
    if (errorMsg) setErrorMsg("");
  };

  return (
    <>
      <Errorhandle error={errorMsg}></Errorhandle>
      <form className="mt-5" onSubmit={submitHandler}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input
              onChange={actionMove}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="flex relative flex-col space-y-1.5 ">
            <Input
              onChange={actionMove}
              id="password"
              name="password"
              type={showPassword? "text" : "password"}
              placeholder="Password"
            />
            <div className="absolute -top-[5px] right-0 transform  w-8 z-40 h-full flex justify-center items-center " >
                <button  onClick={() => setShowPassword((priv)=> !priv)}>
                    {showPassword ? <GoEyeClosed /> : <GoEye />}
                </button>
            </div>
          </div>
          <div className="flex relative flex-col space-y-1.5">
            <Input
              onChange={actionMove}
              id="ConfirmPassword"
              name="ConfirmPassword"
              type={showPassword? "text" : "password"}
              placeholder="Confirm Password"
            />
            <div className="absolute -top-[5px] right-0 transform  w-8 z-40 h-full flex justify-center items-center " >
                <button  onClick={() => setShowPassword((priv)=> !priv)}>
                    {showPassword ? <GoEyeClosed /> : <GoEye />}
                </button>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className=" w-full items-center mt-4 active:scale-95 bg-[#00B207] rounded-full "
        >
          {!longinLoad ? (
            "Register"
          ) : (
            <span className=" w-4 h-4 border-gray-100/50 animate-spin border-t-gray-100 border-l-gray-100 rounded-full border-2 "></span>
          )}
        </Button>
      </form>
    </>
  );
};

export default RegisterFrom;
