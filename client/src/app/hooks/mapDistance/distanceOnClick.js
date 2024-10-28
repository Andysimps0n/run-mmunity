export default function distanceOnCLick(mouseEvent, mapObject, functions) {
  const clickPosition = mouseEvent.latLng;
  
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

    displayCircleDot(clickPosition, 0);


    // Drawing line : drawing
  } else {

    let path = mapObject.clickLine.getPath();
    path.push(clickPosition)

    mapObject.clickLine.setPath(path)

    let distance = Math.round(mapObject.clickLine.getLength());
    displayCircleDot(clickPosition, distance);
  }



  function deleteClickLine() {
      if (mapObject.clickLine) {
          mapObject.clickLine.setMap(null);    
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


}


