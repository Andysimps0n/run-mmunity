
// Draw the line on mouse hover
export default function distanceOnMousemove(mouseEvent, mapObject) {

  if (mapObject.drawingFlag) {
    let mousePosition = mouseEvent.latLng;

    let path = mapObject.clickLine.getPath();


    // draws line based on [coordinate of last click] and [coordinate of current click]
    let movePath = [path[path.length-1], mousePosition]
    mapObject.moveLine.setPath(movePath);
    mapObject.moveLine.setMap(map);


    let distance = Math.round(clickLine.getLength() + moveLine.getLength()) // 선의 총 거리를 계산합니다
    let content = '<div class="dotOverlay distanceInfo">총거리 <span class="number">' + distance + '</span>m</div>'; // 커스텀오버레이에 추가될 내용입니다

    showDistance(content, mousePosition)
  }
}