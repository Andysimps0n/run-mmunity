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

const map = createSlice({
  name : "map",
  initialState : {
    value : "map is null"
  },
  reducers : {
    setMapRedux : (state, action) => {
      state.value = action.payload
    },
  }
})


const isDrawing = createSlice({
  name : "isDrawing",
  initialState : {
    value : false
  },
  reducers : {
    setIsDrawing : (state, action) => {
      state.value = action.payload
    }
  }
})





export const {turnOn, turnOff} = mapModalSlice.actions;
export const {turnDistanceOn, turnDistanceOff} = isDistanceModeSlice.actions;
export const {setIsDrawing} = isDrawing.actions;
export const {setMapRedux} = map.actions


const store = configureStore({
  reducer : {
   mapModal : mapModalSlice.reducer,
   isDistanceMode : isDistanceModeSlice.reducer,
   isDrawing : isDrawing.reducer,
   map : map.reducer
  }
})

export default store