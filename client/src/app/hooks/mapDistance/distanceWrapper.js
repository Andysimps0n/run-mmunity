import { setIsDrawing } from "@/app/store";

import distanceOnClick from "./distanceOnClick"
import distanceOnMousemove from "./distanceOnMousemove";
import distanceOnRightLick from "./distanceOnRightClick";

// export function cleanMap(map){
//   distanceOnRightLick( mapObject)

// }



export default function disatnceWrapper(map, dispatch, isDistanceMode) {

  const mapObject = {
        drawingFlag : false,
        moveLine : {},
        clickLine : {},
        distanceOverlay : null,
        dots : {},
        map : map
  }

  mapObject.drawingFlag = true
  
  window.kakao.maps.event.addListener(map, 'click', function(mouseEvent){
    distanceOnClick(mouseEvent, mapObject)
    dispatch(setIsDrawing(true))
    
  })
  
  
  window.kakao.maps.event.addListener(map, 'mousemove', function(mouseEvent){
    distanceOnMousemove(mouseEvent, mapObject)
  })
  
  
  window.kakao.maps.event.addListener(map, 'rightclick', function (){
    distanceOnRightLick( mapObject)
  })
  
  
  console.log('distance wrapper is running')
  console.log('mapObject.drawingFlag = ' + mapObject.drawingFlag)
    
  }  

