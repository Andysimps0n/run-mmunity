
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
        },
        hardSetMapObj : (state, action) => {
            const { obj } = action.payload;
            {state.paths ? state.paths = [] : null}
            {state.distances ? state.distances = [] : null}

            state.paths = obj.paths   
            state.distances = obj.distances 

        }
    }
})


// Export actions and reducer
export const { addValueToMapObj,resetMapObj, hardSetMapObj } = mapInfo.actions


export default mapInfo.reducer

