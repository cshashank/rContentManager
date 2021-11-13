import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState  = {
    selectedTab: "0",
    poemPage: [],
    plang:"marathi",
    feature:"poem"

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
        setLanguage: (state,action) => {
            state.plang=action.payload;
        },
        setFeature:(state,action)=>{
            state.feature=action.payload;
        }
    },
})

export const rActions = poemSlice.actions;
export default poemSlice.reducer;
