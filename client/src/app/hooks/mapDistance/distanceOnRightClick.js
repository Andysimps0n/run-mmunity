
//  Quit Drawing when right clicked
export default function distanceOnRightLick( mapObject) {
 

  function getTimeHTML(distance) {

    var content = '<ul class="dotOverlay distanceInfo">';
    content += '        <div class="distance-container">Total distance: <span class="distance-container">' + distance + '</span>m </div>';
    content += '   </ul>'

    return content;
  
  }

  function showDistance(content, position) {
      
    if (mapObject.distanceOverlay) { // 커스텀오버레이가 생성된 상태이면
        
        // 커스텀 오버레이의 위치와 표시할 내용을 설정합니다
        mapObject.distanceOverlay.setPosition(position);
        mapObject.distanceOverlay.setContent(content);
        
    } else { // 커스텀 오버레이가 생성되지 않은 상태이면
        
        // 커스텀 오버레이를 생성하고 지도에 표시합니다
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
          
    mapObject.moveLine.setMap(null);
    mapObject.moveLine = null;  
    mapObject.drawingFlag = false;  
    
    var path = mapObject.clickLine.getPath();

    if (path.length > 1) {

        if (mapObject.dots[mapObject.dots.length-1].distance) {
            mapObject.dots[mapObject.dots.length-1].distance.setMap(null);
            mapObject.dots[mapObject.dots.length-1].distance = null;    
        }

        let distance = Math.round(mapObject.clickLine.getLength())

        let content = getTimeHTML(distance);

        showDistance(content, path[path.length-1]);  
        
    } else {

        deleteClickLine();
        deleteCircleDot(); 
        deleteDistnce();

    }
    
  }
}

  