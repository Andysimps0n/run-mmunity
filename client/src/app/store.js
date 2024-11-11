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

const mapLatLng = createSlice({
  name : "mapLatLng",
  initialState : {
    value : []
  },
  reducers : {
    AddMapLatLng : (state, action) => {
      state.value.push(action.payload)
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


const mapObject = createSlice({
  name : "mapObject",
  initialState : {
    value : {
      drawingFlag : false,
      moveLine : {},
      clickLine : {},
      distanceOverlay : null,
      dots : {},
      map : map
    }
  },
  reducers : {
    updateMap : (state, action) => {
      const {field, value} = action.payload;

      if (field.includes('.')) {
        const [parent, child] = field.split('.')
        state.value = {
          ...state,
          [parent] : {
            [child] : value
          }
        }
      } else {
        state.value =  {
          ...state.value,
          [field] : value
        }
      }
    }
  }
})



export const {turnOn, turnOff} = mapModalSlice.actions;
export const {turnDistanceOn, turnDistanceOff} = isDistanceModeSlice.actions;
export const {setIsDrawing} = isDrawing.actions;
export const {setMapRedux} = map.actions
export const {AddMapLatLng} = mapLatLng.actions;
export const {updateMap} = mapLatLng.actions;

const store = configureStore({
  reducer : {
   mapModal : mapModalSlice.reducer,
   isDistanceMode : isDistanceModeSlice.reducer,
   isDrawing : isDrawing.reducer,
   map : map.reducer,
   mapLatLng : mapLatLng.reducer,
   mapObject : mapObject.reducer
  }
})

export default store