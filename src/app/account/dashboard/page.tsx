import BillAddress from "@/pages/acount/dashboard/billAddress/BillAddress";
import Profle from "@/pages/acount/dashboard/profile/Profle";
import RecetOrderHistory from "@/pages/acount/dashboard/recetOrderHistory/RecetOrderHistory";
import React from "react";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <>
      <div className=" flex justify-between " >
        <Profle className="w-[536px] h-[278px] rounded-lg border flex flex-col text-center justify-center items-center " ></Profle>
        <BillAddress className="w-[424px] h-[278px] rounded-lg border " ></BillAddress>
      </div>
      <RecetOrderHistory></RecetOrderHistory>
    </>
  );
}

export default Page;
