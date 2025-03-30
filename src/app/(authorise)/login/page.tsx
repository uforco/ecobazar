
import * as React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginForm from '@/components/login_form/LoginForm';
import SocalMediaLogin from '@/components/login_form/SocalMediaLogin';
import Link from "next/link";
export default async function Page() {
  return (
    <div className=" w-full h-[520px] flex justify-center items-center " >
      <React.Suspense fallback={<p>Loading...</p>}>
        <Card className="w-[350px] shadow-xl ">
            <CardHeader className=" pb-0 " >
                <CardTitle className=" p-0 text-2xl " >
                  <span className=" text-[#00B207] " >Eco</span>
                  bazar
                </CardTitle>
            </CardHeader>
            <CardContent className=" py-0 " >
                <LoginForm></LoginForm>
            </CardContent>
            <p className=" w-full flex justify-center py-3 text-xs font-bold text-gray-600 " >Or sign in with</p>
            <SocalMediaLogin/>
            <CardFooter className=" py-4 text-gray-500 flex justify-center items-center text-xs " >
              {"Don’t"} have account? <Link href="/register" className="text-gray-700 font-bold hover:underline ml-1">Register</Link>
            </CardFooter>
        </Card>
      </React.Suspense>
    </div>
  )
}
