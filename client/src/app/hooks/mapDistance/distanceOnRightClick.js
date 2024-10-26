
//  Quit Drawing when right clicked
export default function distanceOnRightLick(mouseEvent, mapObject) {
 

  function getTimeHTML(distance) {

    var walkkTime = distance / 67 | 0;
    var walkHour = '', walkMin = '';

    if (walkkTime > 60) {
        walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + '</span>시간 '
    }
    walkMin = '<span class="number">' + walkkTime % 60 + '</span>분'

    var bycicleTime = distance / 227 | 0;
    var bycicleHour = '', bycicleMin = '';
    // 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
    if (bycicleTime > 60) {
        bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + '</span>시간 '
    }
    bycicleMin = '<span class="number">' + bycicleTime % 60 + '</span>분'

    var content = '<ul class="dotOverlay distanceInfo">';
    content += '    <li>';
    content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
    content += '    </li>';
    content += '    <li>';
    content += '        <span class="label">도보</span>' + walkHour + walkMin;
    content += '    </li>';
    content += '    <li>';
    content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
    content += '    </li>';
    content += '</ul>'

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
    
    mapObject.drawingFlag = false;  
  }}

  