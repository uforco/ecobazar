'use client'
import React, {useState} from 'react';
import { useParams, useRouter } from 'next/navigation';

import Errorhandle from '@/components/login_form/Errorhandle';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { passwordValid } from './validation';
import { forgetpassword_submit } from '@/utils/forgetpasswordActions';


const Page = () => {
    const params = useParams<{ token: string }>();
    const urlToken = params?.token || '';
    const router = useRouter()
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [longinLoad, setLonginLoad] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false);


   

    const forgetPasswordHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const fromData = new FormData(event.target as HTMLFormElement)

        if( fromData.get('password') !== fromData.get('ConfirmPassword')){
            setErrorMsg('Check Your Password and Confirm_Password')
            return
        }
        const validationResult = passwordValid.safeParse({newpassword: fromData.get('password')})
        if (!validationResult.success) {
            //console.log(validationResult.error.format().newpassword?._errors[0]);
            setErrorMsg(validationResult.error.format().newpassword?._errors[0] || '')
            return
        }
    
        try{
            const submitResult: any = await forgetpassword_submit(validationResult.data, urlToken)
            if(!submitResult.success){
                router.push('/system/forget-password')
            }
            router.push('/system/login')
        }catch(error){
            //console.log("An unexpected error occurred", error)
        }
    }

    const actionMove = () => {
        if (errorMsg) setErrorMsg("");
      };


    return (
        <>
            <Errorhandle error={errorMsg} ></Errorhandle>
            <form className="mt-4 mb-5 " onSubmit={forgetPasswordHandler} >
                <div className="grid w-full items-center gap-4">
                    <div className="flex relative flex-col space-y-1.5">
                        <Input
                        onChange={actionMove}
                        id="password"
                        name="password"
                        type={showPassword? "text" : "password"}
                        placeholder="Password"
                        />
                        <div className="absolute -top-[5px] right-0 transform  w-8 z-40 h-full flex justify-center items-center " >
                            <button type="button" onClick={() => setShowPassword((priv)=> !priv)}>
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
                            <button type="button" onClick={() => setShowPassword((priv)=> !priv)}>
                                {showPassword ? <GoEyeClosed /> : <GoEye />}
                            </button>
                        </div>
                    </div>
                </div>
                <Button type="submit" className=" w-full items-center mt-4 active:scale-95 bg-[#00B207] rounded-full " > 
                    {
                    !longinLoad?
                    'Password Change' :
                    <span className=' w-4 h-4 border-gray-100/50 animate-spin border-t-gray-100 border-l-gray-100 rounded-full border-2 ' ></span>
                    }
                </Button>
            </form>
        </>
    );
};

export default Page;