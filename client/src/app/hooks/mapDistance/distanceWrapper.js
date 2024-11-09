import { setIsDrawing } from "@/app/store";
import { useDispatch } from "react-redux";

import { deleteLines } from "./InitDistance";
import distanceOnClick from "./distanceOnClick"
import distanceOnMousemove from "./distanceOnMousemove";
import distanceOnRightLick from "./distanceOnRightClick";


// functions return mapObject for updates
export default function disatnceWrapper(map, isInit) {

  let mapObject = {
    drawingFlag : false,
    moveLine : {},
    clickLine : {},
    distanceOverlay : null,
    dots : {},
    map : map
  }

  
  
  if (map) {
    
    if (isInit == true){
      deleteLines(mapObject)
    }

    window.kakao.maps.event.addListener(map, 'click', function(mouseEvent){
      distanceOnClick(mouseEvent, mapObject)
      
    })
    
    
    window.kakao.maps.event.addListener(map, 'mousemove', function(mouseEvent){
      distanceOnMousemove(mouseEvent, mapObject)
    })
    
    
    window.kakao.maps.event.addListener(map, 'rightclick', function (){
      distanceOnRightLick( mapObject)
    })
  }
  }  

