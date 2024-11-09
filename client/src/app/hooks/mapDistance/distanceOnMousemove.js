import { showDistance } from "./distanceFunctions";


// Draw the line on mouse hover
export default function distanceOnMousemove(mouseEvent, mapObject) {

  if (mapObject.drawingFlag) {
    
    let mousePosition = mouseEvent.latLng;
    let path = mapObject.clickLine.getPath();


    // draws line based on [coordinate of last click] and [coordinate of current click]
    let movePath = [path[path.length-1], mousePosition]
    mapObject.moveLine.setPath(movePath);
    mapObject.moveLine.setMap(mapObject.map);


    let content = null; // 커스텀오버레이에 추가될 내용입니다

    showDistance(content, mousePosition, mapObject)
  }

}
