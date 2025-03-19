import { Api } from "@/redux/api/Api"




export const orderlist = Api.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrderHistory: builder.query({
            query: (userid) => {
                return `/orders_history/${userid}`
            }
        })

    })
})

export const { useGetAllOrderHistoryQuery } = orderlist