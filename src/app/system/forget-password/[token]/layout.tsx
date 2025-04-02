import React from 'react';
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const layout = async ({
    children,
    params
  }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ token: string }>
  }>) => {
    const { token } = await params
    const varifyTonken = await fetch(`http://localhost:4000/web/forget_passwoard/check-url/${token}`).then((res)=> res.json())
    if(!varifyTonken?.success){
        return redirect('/system/login')
    }

    return <div className=" w-full h-[520px] flex justify-center items-center " >
      <React.Suspense fallback={<p>Loading...</p>}>
        <Card className="w-[350px] shadow-xl ">
            <CardHeader className=" pb-0 pt-3 " >
                <CardTitle className=" p-0 text-xl " >
                  <span className=" text-[#00B207] " >Forget </span>
                  Password
                </CardTitle>
            </CardHeader>
            <CardContent className=" py-0 " >
                {children}
            </CardContent>
        </Card>
      </React.Suspense>
    </div>

};

export default layout;