import { Api } from "@/redux/api/Api";


 export interface cartDataType {
    cart_id: string;
    userId: string;
    product_id: string;
    product_name: string;
    coverimage: string;
    quantity: number;
    price: number;
    discount: number;
    stock_Status: number;
    scale: string;
}


export const shoppingcart = Api.injectEndpoints({
    endpoints: (builder) => ({
        getShopingCart: builder.query({
            query: (userid) => {
                return `/addcart/${userid}`
            }
        })

    })
})


export const { useGetShopingCartQuery } = shoppingcart;