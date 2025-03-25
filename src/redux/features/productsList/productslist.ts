import { Api } from "@/redux/api/Api";
import { totalPageByShop } from "../filterByProduct/filterproducts";


export const productslist = Api.injectEndpoints({
    endpoints: (builder) => ({
        getProductsWithCategoriePage: builder.query({
            query: (page) => `/categories?page=${page}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled}){
                try{
                    const { data: updatedPost, meta } = await queryFulfilled;
                    if (meta?.response?.headers) {
                        const headerValue = meta.response.headers.get('X-Page-Count'); // Replace with your header name
                        // console.log('Captured Header Value:', headerValue); // Log or store the header value
                        dispatch(totalPageByShop(Number(headerValue)))
                    }
                }catch(err){
                    console.log("page err rtk", err)
                }
            }
        }),
        getSingleProductView: builder.query({
            query: (id: string) => {
                return `/categories/${id}`}
        }),
        getRelatedProducts: builder.query({
            query: ({product_id,  category}: {product_id: string;  category: string}) => {
                return `/relatedproducts?category=${category}&product_id=${product_id}`
            }
        }),
        getFeaturedProducts: builder.query({
            query: () => {
                return `/featured-products`
            }
        }),
        getBestRatedDealsproduct: builder.query({
            query: () => {
                return `/bestrateddealproduct`
            }
        })
    })
})


export const { useGetProductsWithCategoriePageQuery, useGetFeaturedProductsQuery, useGetSingleProductViewQuery, useGetRelatedProductsQuery, useGetBestRatedDealsproductQuery } = productslist;