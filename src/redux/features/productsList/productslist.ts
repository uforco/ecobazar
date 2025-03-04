import { Api } from "@/redux/api/Api";


export const productslist = Api.injectEndpoints({
    endpoints: (builder) => ({
        getProductsWithCategoriePage: builder.query({
            query: () => '/products'
        }),
        getSingleProductView: builder.query({
            query: (id: string) => {console.log(`/product/${id}`)
                return `/product/${id}`}
        })
    })
})


export const { useGetProductsWithCategoriePageQuery, useGetSingleProductViewQuery } = productslist;