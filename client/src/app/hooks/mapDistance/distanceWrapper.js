import { deleteLines } from "./InitDistance";
import distanceOnClick from "./distanceOnClick"
import distanceOnMousemove from "./distanceOnMousemove";
import distanceOnRightLick from "./distanceOnRightClick";
import { useDispatch } from "react-redux";


// functions return mapObject for updates
export default function disatnceWrapper(mapObject, map) {


  
  if (map) {
  

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

