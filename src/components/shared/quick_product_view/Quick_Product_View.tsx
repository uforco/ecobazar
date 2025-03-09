"use client"
// import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from "@mynaui/icons-react";
import Quick_view from './quick_view/Quick_view';
import { useGetSingleProductViewQuery } from "@/redux/features/productsList/productslist";
import { useEffect, useState } from "react";

export default function Quick_Product_View({productId}: {productId: string}) {
  const { data, error, isLoading, isSuccess } = useGetSingleProductViewQuery(productId);

 const [isClient, setIsClient] = useState(false)
  
     useEffect(() => {
       setIsClient(true)
     }, [])
 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" sharif22 size-10 overflow-hidden text-6xl rounded-full border border-gray-200 flex justify-center items-center hover:bg-Primary hover:text-white " >
            <Eye ></Eye>
        </button>
      </DialogTrigger>
      {
      isSuccess &&

      <DialogContent className="sm:max-w-[425px] xl:max-w-5xl   ">
       {
       isSuccess && data && 
       <Quick_view data={undefined} ></Quick_view>
       } 
      </DialogContent>
      }
    </Dialog>
  )
}
