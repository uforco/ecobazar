import { Api } from "@/redux/api/Api";

export const wishlistItems = Api.injectEndpoints({
    endpoints: (builder) => ({
        getWishlist: builder.query({
            query: (x) => {
                let isArrToString;
                if(!x || x.length == 0){
                    isArrToString = 'no-data'
                }else{
                    isArrToString = x.map((value: string) =>  `item=${value}`).join('&')
                }
                return `/wishlist/${isArrToString}`;
            }
        })
    })
})

export const { useGetWishlistQuery } = wishlistItems;