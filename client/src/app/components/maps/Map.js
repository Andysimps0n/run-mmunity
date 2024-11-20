"use client"

import {React, useEffect, useRef} from 'react'

function Map() {

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      initMapVariables()
      console.log('window and kakao is true')
    } else {
      console.log('window and kakao is false')  
    }

    console.log('Map.js is rendered')
  }, []);

  const initMapVariables = () => {
    mapOption = {
      center: new kakao.maps.LatLng(37.27415136786895, 127.0565980191825), // Center coordinates
      level: 3, 
    }; 
    map = new kakao.maps.Map(kakaoMap.current, mapOption)
  }
  
  let mapOption;
  let map;
  

  const kakaoMap = useRef(null);
  

  return (
    <>
      <div ref={kakaoMap} className='kakaoMap'></div>
      <div className="box1"></div>
    </>
  )
}

export default Map
