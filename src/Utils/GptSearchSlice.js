import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearchView: false,
    },
    reducers:{
        setGptSearchView :(state)=>{
            state.gptSearchView = !state.gptSearchView;
        },
    },
});

export const {setGptSearchView} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;