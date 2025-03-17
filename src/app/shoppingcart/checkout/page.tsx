import React from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import ShippingAddressForm from "@/pages/checkoutCopmpo/ShippingAddressForm";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import OrderSummery from './OrderSummery/OrderSummery';
import FormSubmitAction from './FormSubmitAction';

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
              <span >Shopping</span>
              <IoIosArrowForward></IoIosArrowForward>
              <span className=" text-Primary ">checkout</span>
            </div>
          </MaxWidthControls>
        </div>
      </div>
      <MaxWidthControls>
        <FormSubmitAction>
          <div className="flex w-full gap-5 my-5 ">
            <div className=" w-8/12">
              <h2 className=" text-3xl font-medium my-4 mb-7 " >Billing Information</h2>
              <ShippingAddressForm></ShippingAddressForm>
            </div>
            <div className=" w-4/12 "> <OrderSummery></OrderSummery></div>
          </div>
        </FormSubmitAction>
      </MaxWidthControls>
    </div>
  );
};

export default page;
