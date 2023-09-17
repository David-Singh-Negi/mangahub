import { configureStore } from "@reduxjs/toolkit";
import { AnimeSlice } from "./slices/AnimeSlice";


export const store = configureStore({
    reducer:{
        anime:AnimeSlice.reducer
    }
})