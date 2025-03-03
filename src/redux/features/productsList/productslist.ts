import { Api } from "@/redux/api/Api";


export const productslist = Api.injectEndpoints({
    endpoints: (builder) => ({
        getProductsWithCategoriePage: builder.query({
            query: () => '/products'
        })
    })
})


export const { useGetProductsWithCategoriePageQuery } = productslist;