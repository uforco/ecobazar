import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type order_itemsType = {
  product_id: string,
  price: number,
  discount: number,
  quantity: number,
  total_price: number
}
export interface CounterState {
  userId: string,
  deleteCartlist: string[]
  order_items: order_itemsType[],
  deliveryAddress: {
      address: string,
      city: string,
      state: string,
      postcode: string,
      phone: string
  }
}
const initialState: CounterState = {
    userId: "",
    deleteCartlist: [],
    order_items:[],
    deliveryAddress: {
        address: "",
        city: "",
        state: "",
        postcode: "",
        phone: ""
    }
}

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
      insertOrderItems: (state, action: PayloadAction<{deleteCartlist: string[], order_items: order_itemsType[]}>) => {
        // state.order_items = action.payload
        const {order_items, deleteCartlist} = action.payload
        state.deleteCartlist = deleteCartlist
        state.order_items = order_items

      }
    }
})

export const { insertOrderItems } = checkoutSlice.actions

export default checkoutSlice.reducer