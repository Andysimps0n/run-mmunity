"use client"

import Script from 'next/script';
import {React, useEffect, useRef} from 'react'
import Header from '../components/Header'

function page() {

  let mapOption;
  let map;

  const kakaoMap = useRef(null);
  const onScriptLoad = ()=>{
    // mapOption = { 
    //   center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    //   level: 3 // 지도의 확대 레벨
    // };
    // map = new kakao.maps.Map(kakaoMap, mapOption)
    console.log('this is onScriptLoad ')
    // console.log(`map : ${map}`)
  }

  
  return (
    <div className="map-outermost-container">
      <Script  onLoad={()=>{onScriptLoad()}} src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4"></Script>
      <Header></Header>
      <div ref={kakaoMap} className='kakaoMap'></div>

    </div>
    
  )
}

export default page
