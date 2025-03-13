import { Api } from "@/redux/api/Api";

export const wishlistItems = Api.injectEndpoints({
    endpoints: (builder) => ({
        getWishlist: builder.query({
            query: (x) => {

                console.log(x)

                return '/products'
            }
        })
    })
})

export const { useGetWishlistQuery } = wishlistItems;