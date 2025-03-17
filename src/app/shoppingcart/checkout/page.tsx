import React from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import ShippingAddressForm from "@/pages/checkoutCopmpo/ShippingAddressForm";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import OrderSummery from '@/pages/checkoutCopmpo/OrderSummery/OrderSummery';

const page = () => {
  return (
    <div>
      <div className=" w-full relative overflow-hidden bg-origin-content h-28 md:bg-cover bg-no-repeat bg-[url('/images/categores/Breadcrumbs.png')]  ">
        <div className="  w-full h-full ">
          <MaxWidthControls className="h-full">
            <div className=" flex items-center h-full  gap-2 text-base font-poppins text-gray-400 ">
              <span className=" text-xl ">
                <GoHome></GoHome>
              </span>
              <IoIosArrowForward></IoIosArrowForward>
              <span className=" text-Primary ">Shopping</span>
              <IoIosArrowForward></IoIosArrowForward>
              <span className=" text-Primary ">checkout</span>
            </div>
          </MaxWidthControls>
        </div>
      </div>
      <MaxWidthControls>
        <div className="flex w-full gap-5 ">
          <div className=" w-8/12">
            <ShippingAddressForm></ShippingAddressForm>
          </div>
          <div className=" w-4/12 "> <OrderSummery></OrderSummery> </div>
        </div>
      </MaxWidthControls>
    </div>
  );
};

export default page;
