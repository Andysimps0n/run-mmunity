export default function distanceOnCLick(mouseEvent, mapObject, functions) {
  const clickPosition = mouseEvent.latLng;

  function deleteClickLine() {
    if (mapObject.clickLine) {
        // mapObject.clickLine.setMap(null);    
        mapObject.clickLine = null;        
    }
  }

  function deleteDistance () {
    if (mapObject.distanceOverlay) {
        mapObject.distanceOverlay.setMap(null);
        mapObject.distanceOverlay = null;
    }
  } 

  function deleteCircleDot() {
    var i;

    for ( i = 0; i < mapObject.dots.length; i++ ){
        if (mapObject.dots[i].circle) { 
            mapObject.dots[i].circle.setMap(null);
        }

        if (mapObject.dots[i].distance) {
            mapObject.dots[i].distance.setMap(null);
        }
    }

    mapObject.dots = [];
  }

  function displayCircleDot(position, distance) {

    var circleOverlay = new kakao.maps.CustomOverlay({
        content: '<span class="dot"></span>',
        position: position,
        zIndex: 1
    });

    circleOverlay.setMap(mapObject.map);

    if (distance > 0) {
        // 클릭한 지점까지의 그려진 선의 총 거리를 표시할 커스텀 오버레이를 생성합니다
        var distanceOverlay = new kakao.maps.CustomOverlay({
            content: '<div class="dotOverlay">거리 <span class="number">' + distance + '</span>m</div>',
            position: position,
            yAnchor: 1,
            zIndex: 2
        });

        // 지도에 표시합니다
        distanceOverlay.setMap(mapObject.map);
    }

    // 배열에 추가합니다
    mapObject.dots.push({circle:circleOverlay, distance: distanceOverlay});
}
  
  if (!mapObject.drawingFlag) {
    
    //  Drawing Line : Init
    mapObject.drawingFlag = true;
    deleteClickLine();
    deleteDistance();
    deleteCircleDot();


    // Draw line (clicked)
    mapObject.clickLine = new kakao.maps.Polyline({
      map: mapObject.map,
      path : [clickPosition],
      strokeWeight : 3,
      strokeColor : "#1670f7",
      strokeOpacity : 1,
      strokeStyle : 'solid'
    })


    // Draw line (on hover)
    mapObject.moveLine = new kakao.maps.Polyline({
      strokeWeight: 3,  
      strokeColor: '#659aeb', 
      strokeOpacity: 0.5, 
      strokeStyle: 'solid'    
    })

    displayCircleDot(clickPosition, 0);


    // Drawing line : drawing
  } else {

    let path = mapObject.clickLine.getPath();
    path.push(clickPosition)

    mapObject.clickLine.setPath(path)

    let distance = Math.round(mapObject.clickLine.getLength());
    displayCircleDot(clickPosition, distance);
  }


}


