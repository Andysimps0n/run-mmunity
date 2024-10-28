
// Draw the line on mouse hover
export default function distanceOnMousemove(mouseEvent, mapObject) {


  function showDistance(content, position) {
      
    if (mapObject.distanceOverlay) { // 커스텀오버레이가 생성된 상태이면
        
        // 커스텀 오버레이의 위치와 표시할 내용을 설정합니다
        mapObject.distanceOverlay.setPosition(position);
        mapObject.distanceOverlay.setContent(content);
        
    } else { // 커스텀 오버레이가 생성되지 않은 상태이면
        
        mapObject.distanceOverlay = new kakao.maps.CustomOverlay({
            map: mapObject.map, // 커스텀오버레이를 표시할 지도입니다
            content: content,  // 커스텀오버레이에 표시할 내용입니다
            position: position, // 커스텀오버레이를 표시할 위치입니다.
            xAnchor: 0,
            yAnchor: 0,
            zIndex: 3  
        });      
    }
}

  if (mapObject.drawingFlag) {
    let mousePosition = mouseEvent.latLng;

    let path = mapObject.clickLine.getPath();


    // draws line based on [coordinate of last click] and [coordinate of current click]
    let movePath = [path[path.length-1], mousePosition]
    mapObject.moveLine.setPath(movePath);
    mapObject.moveLine.setMap(mapObject.map);


    let distance = Math.round(mapObject.clickLine.getLength() + mapObject.moveLine.getLength()) // 선의 총 거리를 계산합니다
    let content = null; // 커스텀오버레이에 추가될 내용입니다

    showDistance(content, mousePosition)
  }
}
