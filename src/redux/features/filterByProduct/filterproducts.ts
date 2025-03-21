import { RootState } from "@/redux/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
    results: number
    categories: string[],
    pricerange: number[],
    rating: number[]
} = {
    results: 0,
    categories: [],
    pricerange: [0, 100],
    rating: []
}


const filterproducts = createSlice({
    name: "filterproducts",
    initialState,
    reducers: {
        categoriesfilter(state, action: PayloadAction<string>){
            if(state.categories.includes(action?.payload) ){
                state.categories = [...state.categories.filter(value => value !== action?.payload)]
            }else{
                state.categories.push(action?.payload)
            }
        },
        priceReangFilter(state, action: PayloadAction<number[]>){
            state.pricerange = action.payload
        },
        productResults(state, action: PayloadAction<number>){
            state.results = action.payload
        },
        ratingfilter(state, action: PayloadAction<number>){
            if(state.rating.includes(action?.payload) ){
                state.rating = [...state.rating.filter(value => value !== action?.payload)]
            }else{
                state.rating.push(action?.payload)
            }
        }
    }
})


export const { categoriesfilter, priceReangFilter, productResults, ratingfilter } = filterproducts.actions

export default filterproducts.reducer


export const filterSelector = (state: RootState) => state?.filterproducts