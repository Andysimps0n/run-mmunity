


export function deleteClickLine(mapObject, dispatch) {
  if (mapObject.clickLine) {
      try {mapObject.clickLine.setMap(null)}
      catch{};

      mapObject.clickLine = null;        
  }

  return mapObject
}

export function deleteDistance(mapObject) {
  if (mapObject.distanceOverlay) {
      mapObject.distanceOverlay.setMap(null);
      mapObject.distanceOverlay = null;
  }
  return mapObject
}

export function displayCircleDot(position, distance, mapObject) {
  var circleOverlay = new kakao.maps.CustomOverlay({
      content: '<span class="dot"></span>',
      position: position,
      zIndex: 1
  });

  circleOverlay.setMap(mapObject.map);
  
  if (distance > 0) {
      var distanceOverlay = new kakao.maps.CustomOverlay({
          content: '<div class="dotOverlay hover-distance-container"> <span class="number">' + distance + '</span>m</div>',
          position: position,
          yAnchor: 1,
          zIndex: 2
      });
      distanceOverlay.setMap(mapObject.map);
  }

  mapObject.dots.push({circle: circleOverlay, distance: distanceOverlay});
}

export function deleteCircleDot(mapObject) {
  for (let i = 0; i < mapObject.dots.length; i++) {
      if (mapObject.dots[i].circle) { 
          mapObject.dots[i].circle.setMap(null);
      }

      if (mapObject.dots[i].distance) {
          mapObject.dots[i].distance.setMap(null);
      }
  }

  mapObject.dots = [];

  return mapObject
}

export function getTimeHTML(distance) {
  var content = '<ul class="dotOverlay distanceInfo">';
  content += '        <div class="distance-container">Total distance: <span class="distance-container">' + distance + '</span>m </div>';
  content += '   </ul>';

  return content;
}

export function showDistance(content, position, mapObject) {
  if (mapObject.distanceOverlay) {
      mapObject.distanceOverlay.setPosition(position);
      mapObject.distanceOverlay.setContent(content);
  } else {
      mapObject.distanceOverlay = new kakao.maps.CustomOverlay({
          map: mapObject.map,
          content: content,
          position: position,
          xAnchor: 0,
          yAnchor: 0,
          zIndex: 3  
      });      
  }
}
