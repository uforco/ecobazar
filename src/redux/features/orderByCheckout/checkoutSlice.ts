import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type order_itemsType = {
  product_id: string,
  price: number,
  discount: number,
  quantity: number,
  total_price: number
}
export interface CounterState {
  orderpush: boolean
  userId: string
  deleteCartlist: string[]
  order_items: order_itemsType[]
  deliveryAddress: {
      name: string
      address: string
      city: string
      state: string
      postcode: string
      email: string
      phone: string
  }
}
const initialState: CounterState = {
  orderpush: false,
  userId: "",
  deleteCartlist: [],
  order_items: [],
  deliveryAddress: {
    name: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    email: "",
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
      },
      deliveryAddress: (state, action) => {
        state.deliveryAddress = action.payload
      },
      orderSubmitAction: (state) => {
        state.orderpush = true
      },
      submitSuccessfull: () => initialState
    }
})

export const { insertOrderItems, deliveryAddress, orderSubmitAction, submitSuccessfull } = checkoutSlice.actions

export default checkoutSlice.reducer