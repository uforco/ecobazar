import { RootState } from "@/redux/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
    currentPage: number
    totalPageByCategorie: number,
    results: number,
    namesearch: string,
    categories: string[],
    pricerange: number[],
    rating: number[],
} = {
    currentPage: 1,
    totalPageByCategorie: 0,
    results: 0,
    namesearch: '',
    categories: [],
    pricerange: [0, 100],
    rating: []
}


const filterproducts = createSlice({
    name: "filterproducts",
    initialState,
    reducers: {
        currentPageCount(state, action: PayloadAction<{actionType: string, page: number}>){
            const {actionType,  page} = action.payload
            if(actionType == "next"){
                if(state.currentPage < state.totalPageByCategorie) state.currentPage += page;
            }
            if(actionType == "previous"){
                if(state.currentPage > 1) state.currentPage -= page;
            }
            if(actionType == "number"){
                state.currentPage = page;
            }
        },
        totalPageByShop(state, action: PayloadAction<number>){
            state.totalPageByCategorie = action.payload
        },
        productResults(state, action: PayloadAction<number>){
            state.results = action.payload
        },
        categoriesfilter(state, action: PayloadAction<string>){
            if(!action?.payload){
                state.categories = []
            }
            if(state.categories.includes(action?.payload) ){
                state.categories = [...state.categories.filter(value => value !== action?.payload)]
            }else{
                state.categories.push(action?.payload)
            }
        },
        nameSearch(state, action: PayloadAction<string>){
            state.namesearch = action.payload.toLowerCase()
        },
        priceReangFilter(state, action: PayloadAction<number[]>){
            state.pricerange = action.payload
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


export const {nameSearch, currentPageCount, totalPageByShop, categoriesfilter, priceReangFilter, productResults, ratingfilter } = filterproducts.actions

export default filterproducts.reducer


export const filterSelector = (state: RootState) => state?.filterproducts