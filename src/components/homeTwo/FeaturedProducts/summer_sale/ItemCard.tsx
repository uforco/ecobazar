'use client'
import {
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Heart, ShoppingBag } from "@mynaui/icons-react";
import Quick_Product_View from "@/components/shared/quick_product_view/Quick_Product_View";
import FallbackImage from "@/components/shared/FallbackImage";
import RatingSter from "@/components/shared/RatingSter/RatingSter";
import saveWishlist, { getWishlistIds } from "@/lib/saveWishlist";
import { useEffect, useState } from "react";
import { useGetShopingCartQuery } from "@/redux/features/MyShoppingCart/shoppingcart";


export type itemType = {
    product_id: string;
    coverimage: string;
    product_name: string;
    price: string | number;
    rating: number | string;
  };



const ItemCard = ({ item }: { item: itemType }) => {

    const [isExists, setIsExists] = useState<boolean>(true)

    // save wishlist in loacalStorage by product id
    const [wishlist, setWishlist] = useState<string[]>([])
    const saveWishlistwithLocalStorage = async (id: string) => {
        const fava = await saveWishlist(id)
        if(fava.includes(item?.product_id)){
            alert("add to mark")
        }
        setWishlist(fava)
    }

    useEffect(()=>{
        return setWishlist(getWishlistIds())
    },[])



    // add to cart to db and action with redux store in shoppingcart update
    const {data, refetch: updateShoppingStore } = useGetShopingCartQuery("cm80bbde50000dj1kezlho2m6");

    useEffect(()=>{
        if(data?.length > 0){
            setIsExists(data.some((pro: any) => pro.product_id === item?.product_id))
        }
    },[data])



    const addCardHeanler = async (product_id: string) => {
        if(isExists){
            alert( "allready Exists this item to Cart" )
            return
        }
        const addcardinfo = {
          userId: "cm80bbde50000dj1kezlho2m6",
          product_id,
          quantity: 1
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
      }
    


    return (
      <div className=" flex p-3 px-3 gap-3 items-center rounded-lg group justify-start transition-all w-[312px] h-[116px] overflow-hidden cursor-pointer border hover:border-Primary hover:shadow-lg hover:shadow-soft_primary/50 ">
        <div className=" w-28 h-28 overflow-hidden flex justify-center items-center ">
          <FallbackImage src={item?.coverimage} className=" w-full h-full " alt={""} width={60} height={60} ></FallbackImage>
        </div>
        <div className=" relative w-full  ">
          <h2 className=" capitalize group-hover:text-hard_primary  text-gray-700 mb-1 ">
            {item?.product_name}
          </h2>
          <div>
            <CardTitle>$ {item.price}</CardTitle>
            <CardDescription className=" flex items-center mt-2 ">
                <RatingSter ratingNumber={item?.rating} />
            </CardDescription>
          </div>
          {/* hover Item */}
          <div className=" group-hover:-bottom-5 overflow-hidden  absolute right-0 -bottom-20 w-full h-full bg-transparent duration-500 transition-all group-hover:bg-white ">
            <div className=" w-full hidden group-hover:flex justify-between transition-all px-5 items-end py-3  delay-700 duration-300 ">
              <button onClick={() => addCardHeanler(item?.product_id)} className={` size-10 transition-all hover:text-white hover:bg-Primary rounded-full border border-gray-200  flex justify-center items-center ${isExists ? "bg-Primary text-white" : "bg-white" }  `}>
                <ShoppingBag></ShoppingBag>
              </button>
              <div className=" relative " >
                <Quick_Product_View productId={item?.product_id}></Quick_Product_View>
              </div>
              <button onClick={() => saveWishlistwithLocalStorage(item?.product_id)} className={` size-10 transition-all  ${wishlist.includes(item?.product_id)? "bg-Primary text-white" : "border-gray-200 bg-white hover:text-white hover:bg-Primary" } rounded-full border  flex justify-center items-center `}>
                <Heart></Heart>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default ItemCard;