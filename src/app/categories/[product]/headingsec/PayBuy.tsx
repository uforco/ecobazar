"use client";
import serverFetching from "@/lib/serverFetching";
import React, { useState, ButtonHTMLAttributes } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

interface Props {
  product_id: string;
  stock: string | number
}

function PayBuy(props: Props) {
  const {product_id, stock} = props;

  const [qty, setQty] = useState<number>(1);

  const [cratdisabled, setCratdisabled] = useState<boolean>(false);



  console.log('add to cart == ', product_id)

  // userId
  // product_id
  // quantity

  const addCardHeanler = async () => {
    setCratdisabled(true)

    const addcardinfo = {
      userId: "cm80bbde50000dj1kezlho2m6",
      product_id,
      quantity: qty
    }

    

    // const data = await serverFetching(`http://localhost:4000/web/add-to-card`,{
    //   method: 'POST',
    //   body: JSON.stringify(addcardinfo)
    // }).then((res) => res.json())
    const data = await serverFetching(`http://localhost:4000/web/allcardinfo/cm7xabwaq0000djcwbhxk1kj1`).then((res) => res.json())

    console.log(data)

    if(data?.cart_id){
      alert('add to card')
    }
    setCratdisabled(false)
  }


  return (
    <div className="flex w-full items-center gap-5 my-5 border-b pb-5  ">
      <div className=" flex items-center gap-2 ">
        <div className=" flex gap-4 items-center rounded-full border p-2  ">
          <button
            type="button"
            onClick={() =>
              setQty((privous) => (privous > 1 ? privous - 1 : privous))
            }
            className=" bg-gray-300 text-gray-600 w-8 h-8 flex justify-center items-center rounded-full "
          >
            -
          </button>
          <p className=" text-xl w-8 flex justify-center font-semibold ">
            {qty}
          </p>
          <button
            onClick={() =>
              setQty((privous) => (privous < Number(stock) ? privous + 1 : privous))
            }
            className=" bg-gray-300 text-gray-600 w-8 h-8 flex justify-center items-center rounded-full "
          >
            +
          </button>
        </div>
      </div>
      <div className=" flex items-center gap-2  w-full ">

        <button disabled={cratdisabled} onClick={addCardHeanler} type='button' className={` bg-Primary text-white w-full flex items-center justify-center  h-11 ${cratdisabled? 'gap-3' : 'active:scale-95 ' }    rounded-full flex justify-center items-center `}>
          Add to Cart
          {
            !cratdisabled?
            <HiOutlineShoppingBag className=" text-white ml-2 -mt-1 "></HiOutlineShoppingBag>
            :
            <span className=" size-4 border-2 animate-spin rounded-full border-gray-300/60 border-t-gray-100 " ></span>
          }
        </button>

        <button className=" bg-Primary/20 text-Primary text-xl p-3 rounded-full ">
          <FaRegHeart></FaRegHeart>
        </button>
      </div>
    </div>
  );
}

export default PayBuy;
