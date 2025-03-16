import React from "react";

interface Props {}

function CouponCode(props: Props) {
  const {} = props;

  return (
    <div>
      <div className=" flex items-center justify-between w-full border py-5 px-4 mb-10 rounded-md ">
        <h2 className=" w-2/12 font-semibold " >Coupon Code</h2>
        <div className=" h-[52px]  w-10/12 flex " >
            <input className=" border h-full w-full rounded-full px-5 focus:outline-none " type="text" placeholder="Enter code" name="" id="" />
            <button className=" border rounded-full w-[250px] h-full text-white -ml-12 bg-gray-900 " type="submit">Apply Coupon</button>
        </div>
      </div>
    </div>
  );
}

export default CouponCode;
