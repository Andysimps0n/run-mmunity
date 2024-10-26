import { createSlice, configureStore } from '@reduxjs/toolkit'


const mapModalSlice = createSlice({
  name : "mapModal",
  initialState : {
    value : false
  },
  reducers : {
    turnOn : state=>{state.value = true},
    turnOff : state=>{state.value = false}
  }
})

const isDistanceModeSlice = createSlice({
  name : "isDistanceMode",
  initialState : {
    value : false
  },
  reducers : {
    turnDistanceOn : state=>{state.value = true},
    turnDistanceOff : state=>{state.value = false}
  }
})





export const {turnOn, turnOff} = mapModalSlice.actions;
export const {turnDistanceOn, turnDistanceOff} = isDistanceModeSlice.actions;

const store = configureStore({
  reducer : {
   mapModal : mapModalSlice.reducer,
   isDistanceMode : isDistanceModeSlice.reducer 
  }
})

export default store