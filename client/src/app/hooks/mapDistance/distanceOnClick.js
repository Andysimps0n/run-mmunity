import { Dela_Gothic_One } from "next/font/google";
import { deleteDistance, deleteCircleDot,displayCircleDot, deleteClickLine } from "./distanceFunctions";


export default function distanceOnCLick(mouseEvent, mapObject) {
  const clickPosition = mouseEvent.latLng;
  
  if (!mapObject.drawingFlag) {
    

    //  Drawing Line : Init
    deleteClickLine(mapObject)
    deleteDistance(mapObject);
    deleteCircleDot(mapObject);

    
    mapObject.drawingFlag = true;

    // Draw line (clicked)
    mapObject.clickLine = new kakao.maps.Polyline({
      map: mapObject.map,
      path : [clickPosition],
      strokeWeight : 5,
      strokeColor : "#3098ff",
      strokeOpacity : 1,
      strokeStyle : 'solid'
    })
    


    // Draw line (on hover)
    mapObject.moveLine = new kakao.maps.Polyline({
      strokeWeight: 5,  
      strokeColor: '#1670f7', 
      strokeOpacity: 0.2, 
      strokeStyle: 'solid'    
    })
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


