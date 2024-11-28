"use client"

import {React, useEffect, useState} from 'react'
import MapSideBar from '../components/maps/MapSideBar'
import Header from '../components/Header'
import MapComponent from '../components/maps/Map'
import GetRouteModal from '../components/maps/GetRouteModal'
import SaveRoute from '../components/maps/SaveRoute'

function page() { 

  const [isSavingRoute, setIsSavingRoute] = useState(false);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [isGetRouteModal, setIsGetRouteModal] = useState(false)

  return (
    <div className="map-outermost-container">

      <Header component={'map'}></Header>
      <MapComponent setIsDrawingMode={setIsDrawingMode} isDrawingMode={isDrawingMode}></MapComponent>
      <MapSideBar 
        setIsGetRouteModal={setIsGetRouteModal} 
        isDrawingMode={isDrawingMode} 
        setIsDrawingMode={setIsDrawingMode}
        setIsSavingRoute={setIsSavingRoute}
        
        ></MapSideBar>
      
      {isSavingRoute ? <SaveRoute setIsDrawingMode={setIsDrawingMode} setIsSavingRoute={setIsSavingRoute}></SaveRoute> : null}
      {isGetRouteModal ? <GetRouteModal setIsGetRouteModal={setIsGetRouteModal}></GetRouteModal> : null}
    </div>
    
  )
}

export default page
