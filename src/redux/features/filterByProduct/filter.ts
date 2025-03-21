import { Api } from "@/redux/api/Api";

export const fillter = Api.injectEndpoints({
    endpoints: (builder) => ({
        getFillterCategories: builder.query({
            query: ()=> "/categoriefillter"
        })
    })
})


export const { useGetFillterCategoriesQuery } = fillter