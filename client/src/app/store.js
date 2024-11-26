// store.js


import { configureStore } from "@reduxjs/toolkit";
import mapInfoReducer from "@/app/slices";

export default configureStore({
    reducer: {
        mapInfo: mapInfoReducer,
    },
});
