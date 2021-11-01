import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState  = {
    selectedTab: "0",
    poemPage: [],
}

const poemSlice = createSlice({
    name:"poems",
    initialState,
    reducers:{
        selectTab:(state,action) =>{
            state.selectedTab = action.payload;
        },
        addPoemsPage: (state, action) => {
            state.poemPage = action.payload;
        }
    },
})

export const {selectTab,addPoemsPage} = poemSlice.actions;
export default poemSlice.reducer;
