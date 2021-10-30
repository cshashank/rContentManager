import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState  = {
    value: "poem1",
}

const poemSlice = createSlice({
    name:"poems",
    initialState,
    reducers:{
        addPoems:(state,action) =>{
            state.value = action.payload;
        }
    },
})

export const {addPoems} = poemSlice.actions;
export default poemSlice.reducer;
export { poemSlice };