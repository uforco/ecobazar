'use client'
import React from "react";

interface addressTypes {
  name: string,
  address: string,
  email: string,
  phone: string
}

function ShippingAddress({deliyveryaddress}: {deliyveryaddress: addressTypes}) {

  return (
    <div className=" w-[624px] overflow-hidden border rounded-lg flex  ">
      <div className=" w-[312px] overflow-hidden border-r ">
        <h2 className=" border-b p-2 px-4 text-gray-600 ">Billing Address</h2>
        <div className=" p-4 flex flex-col gap-3 ">
          <div>
            <h3>Dainne Russell</h3>
            <p className=" text-gray-500 min-h-14 ">
              4140 Parker Rd. Allentown, New Mexico 31134
            </p>
          </div>
          <div>
            <h3 className=" text-gray-500 ">Email</h3>
            <p>dainne.ressell@gmail.com</p>
          </div>
          <div>
            <h3 className=" text-gray-500 ">Phone</h3>
            <p>{"(671) 555-0110"}</p>
          </div>
        </div>
      </div>

      <div className=" w-[312px] overflow-hidden  ">
        <h2 className=" border-b p-2 px-4 text-gray-600 ">Shipping Address</h2>
        <div className=" p-4 flex flex-col gap-3 ">
          <div>
            <h3>{deliyveryaddress?.name}</h3>
            <p className=" text-gray-500 min-h-14  ">
            {deliyveryaddress?.address}
            </p>
          </div>
          <div>
            <h3 className=" text-gray-500 ">Email</h3>
            <p>{deliyveryaddress?.email}</p>
          </div>
          <div>
            <h3 className=" text-gray-500 ">Phone</h3>
            <p>{deliyveryaddress?.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
