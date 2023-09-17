import { createSlice } from "@reduxjs/toolkit";


export const AnimeSlice = createSlice({
    name:"anime",
    initialState:[],
    reducers:{
        add: () => {},
        remove: () => {}
    }
})

export const{add,remove} = AnimeSlice.actions;
export default AnimeSlice.reducer;