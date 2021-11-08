import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState  = {
    selectedTab: "0",
    poemPage: [],
    plang:"marathi",
}

const poemSlice = createSlice({
    name:"poems",
    initialState,
    reducers:{
        selectTab:(state,action) =>{
            console.log('in selectTab ' + action.payload);;
            state.selectedTab = action.payload;
        },
        addPoemsPage: (state, action) => {
            state.poemPage = action.payload;
        },
        setPoemLanguage: (state,action) => {
            console.log('in setPoemLanguage '+action.payload);;
            state.plang=action.payload;
        }
    },
})

export const {selectTab,addPoemsPage,setPoemLanguage} = poemSlice.actions;
export default poemSlice.reducer;
