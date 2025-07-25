import { configureStore } from '@reduxjs/toolkit';
import movieSliceReducer from './movieSlice';

const appStore = configureStore({
    reducer:{
        movies:movieSliceReducer
    }
});
export default appStore;