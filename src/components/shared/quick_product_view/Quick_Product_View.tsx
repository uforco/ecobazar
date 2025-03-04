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

export default function Quick_Product_View({productId}: {productId: string}) {
  // console.log("Quick_Product_View", productId);


  const { data, error, isLoading, isSuccess } = useGetSingleProductViewQuery(productId);

  // console.log(data);


  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" sharif22 size-10 overflow-hidden text-6xl rounded-full border border-gray-200 flex justify-center items-center hover:bg-Primary hover:text-white " >
            <Eye ></Eye>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] xl:max-w-5xl   ">
      {/* <DialogTrigger asChild>
        <button
            className="absolute -top-8 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            aria-label="Close"
            >
            x22
            </button>
      </DialogTrigger> */}
      
       {
        isSuccess && data && <Quick_view data={data} ></Quick_view>
       } 

      </DialogContent>
    </Dialog>
  )
}
