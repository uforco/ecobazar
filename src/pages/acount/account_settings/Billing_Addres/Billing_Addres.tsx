import React from "react";
import Billing_Addres_form from "./Billing_Addres_form";

interface Props {}

function Billing_Addres(props: Props) {
  const {} = props;

  return (
    <>
      <div className=" border rounded-lg mt-6 ">
        <div className=" border-b ">
          <h2 className=" p-5 py-2 ">Billing Address</h2>
        </div>

        <div className=" flex justify-between gap-6 p-5 w-full ">
          <Billing_Addres_form></Billing_Addres_form>
        </div>
      </div>
    </>
  );
}

export default Billing_Addres;
