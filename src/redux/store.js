import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slice/recipeSlice";



const store = configureStore({
    reducer : {
        recipeReducer : recipeSlice,
    }
})

export default store