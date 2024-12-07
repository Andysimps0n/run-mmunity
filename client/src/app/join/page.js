"use client"

import {React, useEffect, useState} from 'react'
import MapSideBar from '../components/maps/MapSideBar'
import Header from '../components/Header'
import Script from 'next/script'
import MapComponent from '../components/maps/Map'
import GetRouteModal from '../components/maps/GetRouteModal'
import SaveRoute from '../components/maps/SaveRoute'

function page() { 

  const [isSavingRoute, setIsSavingRoute] = useState(false);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [isGetRouteModal, setIsGetRouteModal] = useState(false)

  return (
    <div className="map-outermost-container">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=close,menu" rel="stylesheet" />
      <Script strategy="beforeInteractive" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4&autoload=false"></Script>

      <Header component={'map'}></Header>
      <MapComponent setIsDrawingMode={setIsDrawingMode} isDrawingMode={isDrawingMode}></MapComponent>
      <MapSideBar 
        setIsGetRouteModal={setIsGetRouteModal} 
        isDrawingMode={isDrawingMode} 
        setIsDrawingMode={setIsDrawingMode}
        setIsSavingRoute={setIsSavingRoute}
        
        ></MapSideBar>
      
      {isSavingRoute ? <SaveRoute setIsDrawingMode={setIsDrawingMode} setIsSavingRoute={setIsSavingRoute}></SaveRoute> : null}
      {isGetRouteModal ? <GetRouteModal
        setIsGetRouteModal={setIsGetRouteModal}
        setIsSavingRoute={setIsSavingRoute}
        setIsDrawingMode={setIsDrawingMode}
        ></GetRouteModal> : null}
    </div>
    
  )
}

export default page
