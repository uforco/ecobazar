import { Api } from "@/redux/api/Api"


export const orderlist = Api.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrderHistory: builder.query({
            query: (userid) => {
                return `/orders_history/${userid}`
            }
        }),
        getOrderDetails: builder.query({
            query: (id) => {
                console.log(id)
                return `/order-details/${id}`
            }
        })
    })
})

export const { useGetAllOrderHistoryQuery, useGetOrderDetailsQuery } = orderlist