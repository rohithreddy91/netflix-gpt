import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name:"config",
    initialState:{
        selectedLanguage:"en",
    },
    reducers:{
        languageSelection : (state,action)=>{
            state.selectedLanguage = action.payload;

        }
    }
});
export const {languageSelection}= ConfigSlice.actions;
export default ConfigSlice.reducer;