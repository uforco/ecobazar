import React from "react";

interface Props {}

function PaymentDetails(props: Props) {
  const {} = props;

  return (
    <div className=" w-[288px] border rounded-lg ">
      <div className=" flex justify-between items-center border-b py-4 ">
        <div className=" px-4  ">
          <p className=" uppercase text-gray-500 text-xs ">Order ID:</p>
          <h2 className=" text-sm ">#4152</h2>
        </div>
        <div className=" border-l px-4 ">
          <p className=" uppercase text-gray-500 text-xs ">Payment Method:</p>
          <h2 className=" text-sm ">Paypal</h2>
        </div>
      </div>
      <div className=" p-4  ">
        <div className="flex justify-between items-center py-3 pb-2 pt-0 border-b ">
          <p className=" text-gray-500 ">Subtotal:</p> <h3>$365.00</h3>
        </div>
        <div className="flex justify-between items-center py-3 pb-2 border-b ">
          <p className=" text-gray-500 ">Discount</p> <h3>20%</h3>
        </div>
        <div className="flex justify-between items-center py-3 pb-2 border-b ">
          <p className=" text-gray-500 ">Shipping</p> <h3>Free</h3>
        </div>
        <div className="flex justify-between items-center py-3 pb-0 text-xl  ">
          <p>Total</p>
          <h3 className=" text-green-600 font-semibold ">$84.00</h3>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
