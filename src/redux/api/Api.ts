import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const Api = createApi({
    reducerPath: 'productslist',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: (builder) =>({})
})

