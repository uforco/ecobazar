'use client'
import { TableBody} from "@/components/ui/table";
import discountPriceFun from "@/hooks/discountPriceFunction";
import { getWishlistIds } from "@/lib/saveWishlist";
import { useGetWishlistQuery } from "@/redux/features/wishlist/wishlist";
import React, { useEffect, useState } from "react";
import WishlistCart, {wishItemType} from "./WishlistCart";

import { useAppDispatch } from '@/redux/app/hooks';
import { wishlistItems } from '@/redux/features/wishlist/wishlist';



const ContaineItems = () => {
    const dispatch = useAppDispatch();
    const [wishlist, setWishlist] = useState<string[]>([])
    const { isError, isSuccess, isLoading, data, refetch } = useGetWishlistQuery(wishlist)
    
    const refetching = (id: string) => {
      dispatch(
        wishlistItems.util.updateQueryData("getWishlist", wishlist, (draft) => {
          return draft.filter((item: wishItemType) => item?.product_id !== id);
        })
      )
    }


    useEffect(()=>{
      const fallback = () => {
        setWishlist(getWishlistIds())
      }
      return fallback()
    },[])


    let containe = <div>Loading...</div>;
    if(isLoading) containe = <div>Loading...</div>;
    if(!isSuccess && isError) containe = <div>samething is wrong</div>;
    if(isSuccess && !isError && !isLoading && data.length < 1) containe = <div>No Data Found</div>;
    if(isSuccess && !isError && !isLoading && data.length > 0){
      containe = <TableBody className='  ' >
      {data.map((invoice: wishItemType) => <WishlistCart key={invoice.id} invoice={invoice} refetching={refetching}></WishlistCart> )}
    </TableBody>
    };


  return (containe);
};

export default ContaineItems;
