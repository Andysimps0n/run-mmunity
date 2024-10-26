import { useEffect } from "react";
import distanceOnClick from "./distanceOnClick"
import distanceOnMousemove from "./distanceOnMousemove";
import distanceOnRightLick from "./distanceOnRightClick";

export default function disatnceWrapper(map, mapContainer) {

  let drawingFlag = false; // 선이 그려지고 있는 상태를 가지고 있을 변수입니다
  let moveLine; // 선이 그려지고 있을때 마우스 움직임에 따라 그려질 선 객체 입니다
  let clickLine // 마우스로 클릭한 좌표로 그려질 선 객체입니다
  let distanceOverlay; // 선의 거리정보를 표시할 커스텀오버레이 입니다
  let dots = {}; // 선이 그려지고 있을때 클릭할 때마다 클릭 지점과 거리를 표시하는 커스텀 오버레이 배열입니다.
  
  const mapObject = {
    drawingFlag : false,
    moveLine : {},
    clickLine : null,
    distanceOverlay : null,
    dots : {},
    map : map
  }
  
  
  window.kakao.maps.event.addListener(map, 'click', function(mouseEvent){
    distanceOnClick(mouseEvent, mapObject)
  })


  window.kakao.maps.event.addListener(map, 'mousemove', function(mouseEvent){
    distanceOnMousemove(mouseEvent, mapObject)
  })


  window.kakao.maps.event.addListener(map, 'rightclick', function (mouseEvent){
    distanceOnRightLick(mouseEvent, mapObject)
  })


}

