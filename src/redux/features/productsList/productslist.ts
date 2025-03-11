import { Api } from "@/redux/api/Api";


export const productslist = Api.injectEndpoints({
    endpoints: (builder) => ({
        getProductsWithCategoriePage: builder.query({
            query: () => '/categories'
        }),
        getSingleProductView: builder.query({
            query: (id: string) => {console.log(`/product/${id}`)
                return `/categories/${id}`}
        })
    })
})


export const { useGetProductsWithCategoriePageQuery, useGetSingleProductViewQuery } = productslist;