import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import GptReducer from './GptSearchSlice';
import ConfigReducer from './configSlice';  

const appStore = configureStore({
    reducer:{
        movies:moviesReducer,
        gpt:GptReducer,
        config:ConfigReducer,
    },
}) ;
export default appStore;