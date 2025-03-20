import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../api/Api";
import checkoutSlice from "../features/orderByCheckout/checkoutSlice";
import filterproducts from "../features/productsList/filterproducts";

export const makeStore = () => { return configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    checkoutSlice: checkoutSlice,
    filterproducts: filterproducts
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
}

// Api.middleware

export type AppStore = ReturnType<typeof makeStore>


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

