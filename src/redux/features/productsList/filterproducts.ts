import { RootState } from "@/redux/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
    categories: string[],
    pricerange: [number, number],
    rating: number[]
} = {
    categories: ['Snacks'],
    pricerange: [0, 0],
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
        }
    }
})


export const { categoriesfilter } = filterproducts.actions

export default filterproducts.reducer


export const filterSelector = (state: RootState) => state?.filterproducts