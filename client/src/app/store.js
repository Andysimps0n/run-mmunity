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




export const {turnOn, turnOff} = mapModalSlice.actions;


const store = configureStore({
  reducer : {
   mapModal : mapModalSlice.reducer 
  }
})

export default store