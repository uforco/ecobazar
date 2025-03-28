'use client'
import React, {useState} from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import Errorhandle from './Errorhandle';
import { useRouter, useSearchParams } from 'next/navigation';

const LoginForm = () => {
     const serchparam = useSearchParams()
     const router = useRouter()
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [longinLoad, setLonginLoad] = useState<boolean>(false)

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const fromData = new FormData(event.target as HTMLFormElement)
        const returnUrl = serchparam?.get('from') ?? '/'
        try{
            setLonginLoad(true)
            const result = await signIn('credentials', {
                email: fromData.get('email') as string,
                password: fromData.get('password') as string,
                redirect: false,
                callbackUrl: returnUrl || '/'
            })
            if(result?.ok){
                setLonginLoad(false)
                router.push(result.url as string);
            }
            if(!result?.ok && result?.error){
                setErrorMsg(result?.error)
            }
            setLonginLoad(false)
        }catch(error){
            console.log("An unexpected error occurred", error)
        }
    }
    const actionMove = () => {
       if(errorMsg) setErrorMsg('')
    }
    return (
        <>
            <Errorhandle error={errorMsg} ></Errorhandle>
            <form className="mt-5" onSubmit={submitHandler} >
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">EMAIL</Label>
                    <Input onChange={actionMove} id="email" type="email" name="email" placeholder="Type your email" required />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">PASSWORD</Label>
                    <Input onChange={actionMove} id="password" name="password" type="password" placeholder="Type your Password" required />
                    </div>
                </div>
                <Button type="submit" className=" w-full items-center mt-4 active:scale-95 bg-[#00B207] rounded-full " > 
                    {
                    !longinLoad?
                    'Login' :
                    <span className=' w-4 h-4 border-gray-100/50 animate-spin border-t-gray-100 border-l-gray-100 rounded-full border-2 ' ></span>
                    }
                </Button>
            </form>
        </>
    );
};

export default LoginForm;