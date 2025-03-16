import discountPriceFun from "@/hooks/discountPriceFunction";
import { cartDataType } from "@/redux/features/MyShoppingCart/shoppingcart";
import React from "react";
import CheckoutBtn from './CheckoutBtn';

interface Props {
  data?: cartDataType[] | undefined;
}

function CartTotal(props: Props) {
  const { data } = props;

  const totalprice =
    (data?.reduce((previousValue, currentValue) => {
      return (
        previousValue +
        Number(discountPriceFun(currentValue.discount, currentValue.price)) *
          currentValue?.quantity
      );
    }, 0) || 0.0).toFixed(2);


  return (
    <div className=" w-4/12 ">
      <div className=" border  rounded-md p-5 ">
        <h2 className="text-xl mb-4  poppinsFont ">Cart Total</h2>
        <div className=" flex justify-between items-center border-b py-3 ">
          <p>Subtotal:</p>
          <p>${totalprice}</p>
        </div>
        <div className=" flex justify-between items-center border-b py-3 ">
          <p>Shipping:</p>
          <p className="font-semibold">Free</p>
        </div>
        <div className=" flex justify-between items-center py-3 ">
          <p>Total:</p>
          <p className="font-semibold text-xl">${totalprice}</p>
        </div>
        <div className="mt-4 mb-2">
            <CheckoutBtn data={data} ></CheckoutBtn>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
