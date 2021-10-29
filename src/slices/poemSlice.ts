import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    poems:[]
}

const poemSlice = createSlice({
    name:"poems",
    initialState,
    reducers:{
        addPoems:(state,{payload}) =>{
            state.poems = payload;
        }
    },
})

export const {addPoems} = poemSlice.actions;
export const getAllPoems = (state) => state.poems.poems;
export default poemSlice.reducer;