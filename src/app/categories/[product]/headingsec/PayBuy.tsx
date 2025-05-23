"use client";
import saveWishlist, { getWishlistIds } from "@/lib/saveWishlist";
import { useGetShopingCartQuery } from "@/redux/features/MyShoppingCart/shoppingcart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

interface Props {
  product_id: string;
  stock: string | number
}

function PayBuy(props: Props) {
  
  const paramsName = usePathname()
  const router = useRouter()
  const { data: profile, status } = useSession()
  if(status === 'loading'){ 
    return <div className=" w-full h-11 bg-gray-200 animate-pulse rounded-full "></div>
  }


  const {product_id, stock} = props;
  const [qty, setQty] = useState<number>(1);

  const [cratdisabled, setCratdisabled] = useState<boolean>(false);
  // save wishlist in loacalStorage by product id
  const [wishlist, setWishlist] = useState<string[]>([])
  const saveWishlistwithLocalStorage = async (id: string) => {
    setWishlist(await saveWishlist(id))
  }
    
  // add to cart to db and action with redux store in shoppingcart update
  const { refetch: updateShoppingStore } = useGetShopingCartQuery(profile?.user?.id);


  useEffect(()=>{
      return setWishlist(getWishlistIds())
  },[])
    


  // add to cart on server db actions
  const addCardHeanler = async () => {

    if(status !== 'authenticated' && !profile){
      return router.push(`/system/login?from=${paramsName}`)
    }

    setCratdisabled(true)
    const addcardinfo = {
      userId: profile?.user?.id as string,
      product_id,
      quantity: qty
    }
    const data = await fetch('/api/addcart',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addcardinfo)
    }).then((res)=> res.json())

    if(data?.cart_id && data?.product_id){
      if(wishlist.includes(data?.product_id)) setWishlist(await saveWishlist(data?.product_id))
      updateShoppingStore()
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
        <button onClick={()=> saveWishlistwithLocalStorage(product_id)} className={` ${wishlist.includes(product_id)? "bg-Primary text-white" : "bg-Primary/20 text-Primary" }  text-xl p-3 rounded-full `}>
          <FaRegHeart></FaRegHeart>
        </button>
      </div>
    </div>
  );
}

export default PayBuy;
