
import { createSlice } from "@reduxjs/toolkit";

export const mapInfo = createSlice({
    name : "mapInfo",
    initialState : {
        paths : [],
        distances : [] 
    },
    reducers : {

        // Gets the field to and value
        addValueToMapObj : (state, action)=> {
            const { field, value } = action.payload;
            state[field].push(value)
        },
        resetMapObj : (state, action) => {
            const { field } = action.payload;
            state[field] = [];
        }
    }
})


// Export actions and reducer
export const { addValueToMapObj,resetMapObj } = mapInfo.actions


export default mapInfo.reducer

