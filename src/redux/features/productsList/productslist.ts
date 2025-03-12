import { Api } from "@/redux/api/Api";


export const productslist = Api.injectEndpoints({
    endpoints: (builder) => ({
        getProductsWithCategoriePage: builder.query({
            query: () => '/categories'
        }),
        getSingleProductView: builder.query({
            query: (id: string) => {console.log(`/product/${id}`)
                return `/categories/${id}`}
        }),
        getRelatedProducts: builder.query({
            query: ({product_id,  category}: {product_id: string;  category: string}) => {
                return `/relatedproducts?category=${category}&product_id=${product_id}`
            }
        })
    })
})


export const { useGetProductsWithCategoriePageQuery, useGetSingleProductViewQuery, useGetRelatedProductsQuery } = productslist;