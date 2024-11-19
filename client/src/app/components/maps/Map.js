"use client"

import {React, useEffect, useRef} from 'react'

function Map() {

    const onScriptLoad = ()=>{
        if (kakao.maps) {
          mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
          };
    
        }
        console.log('this is onScriptLoad ')
        // console.log(`map : ${map}`)
      }


    let mapOption;
    let map;
  
    const kakaoMap = useRef(null);
  
    useEffect(() => {
        mapOption = {
          center: new window.kakao.maps.LatLng(37.27415136786895, 127.0565980191825), // Center coordinates
          level: 3, 
        }; 
        map = new kakao.maps.Map(kakaoMap, mapOption)
    }, []); 

  return (
    <div ref={kakaoMap} className='kakaoMap'></div>
  )
}

export default Map
