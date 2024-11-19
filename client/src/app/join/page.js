"use client"

import Script from 'next/script';
import {React, useEffect, useState} from 'react'
import Header from '../components/Header'
import Map from '../components/maps/Map'

function page() { 

  const[ canLoadMap, setCanLoadMap ]= useState(false);
  debugger

  return (
    <div className="map-outermost-container">
      <Header></Header>
      <Script onLoad={()=>{setCanLoadMap(true)}} src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4" />
      {canLoadMap ? <Map></Map> : console.log('null')}
      {canLoadMap}
    </div>
    
  )
}

export default page
