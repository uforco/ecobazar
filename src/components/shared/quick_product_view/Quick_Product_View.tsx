"use client"
// import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from "@mynaui/icons-react";
import Quick_view from './quick_view/Quick_view';

export default function Quick_Product_View({productId}: {productId: string}) {
  


  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" sharif22 size-10 overflow-hidden text-6xl rounded-full border border-gray-200 flex justify-center items-center hover:bg-Primary hover:text-white " >
            <Eye ></Eye>
        </button>
      </DialogTrigger>
      {
      // isSuccess &&

      <DialogContent className="sm:max-w-[425px] xl:max-w-5xl   ">
       {
      //  isSuccess && data && 
       <Quick_view productId={productId} ></Quick_view>
       } 
      </DialogContent>
      }
    </Dialog>
  )
}
