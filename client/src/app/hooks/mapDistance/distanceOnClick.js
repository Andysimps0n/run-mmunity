import { Dela_Gothic_One } from "next/font/google";
import { deleteDistance, deleteCircleDot,displayCircleDot, deleteClickLine } from "./distanceFunctions";
import { updateMap } from "@/app/store";


export default function distanceOnCLick(mouseEvent, mapObject, dispatch) {
  const clickPosition = mouseEvent.latLng;
  
  if (!mapObject.drawingFlag) {

    //  Drawing Line : Init
    deleteClickLine(mapObject, dispatch)
    deleteDistance(mapObject);
    deleteCircleDot(mapObject, dispatch);

    dispatch(updateMap({field : 'drawingFlag', value : true}))

    // Draw line (clicked)
    let hoverLine = new kakao.maps.Polyline({
      map: mapObject.map,
      path : [clickPosition],
      strokeWeight : 5,
      strokeColor : "#3098ff",
      strokeOpacity : 1,
      strokeStyle : 'solid'
    })
    dispatch(updateMap({filed : "clickLine", value : hoverLine}))
    


    // Draw line (on hover)
    let moveLine  = new kakao.maps.Polyline({
      strokeWeight: 5,  
      strokeColor: '#1670f7', 
      strokeOpacity: 0.2, 
      strokeStyle: 'solid'    
    })
    dispatch(updateMap({field : 'moveLine', value : moveLine}))


    displayCircleDot(clickPosition, 0, mapObject);

      
    // Drawing line : drawing
  } else {

    let path = mapObject.clickLine.getPath();
    path.push(clickPosition)

    mapObject.clickLine.setPath(path)

    let distance = Math.round(mapObject.clickLine.getLength());
    displayCircleDot(clickPosition, distance, mapObject);


  }

}


