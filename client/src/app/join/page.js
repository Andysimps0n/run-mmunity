"use client"

import {React, useEffect, useState} from 'react'
import MapSideBar from '../components/maps/MapSideBar'
import Header from '../components/Header'
import MapComponent from '../components/maps/Map'
import GetRouteModal from '../components/maps/GetRouteModal'

function page() { 

  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [isGetRouteModal, setIsGetRouteModal] = useState(true)

  return (
    <div className="map-outermost-container">

      <Header component={'map'}></Header>
      <MapComponent setIsDrawingMode={setIsDrawingMode} isDrawingMode={isDrawingMode}></MapComponent>
      <MapSideBar setIsGetRouteModal={setIsGetRouteModal} isDrawingMode={isDrawingMode} setIsDrawingMode={setIsDrawingMode}></MapSideBar>
      {isGetRouteModal ? <GetRouteModal setIsGetRouteModal={setIsGetRouteModal}></GetRouteModal> : null}
    </div>
    
  )
}

export default page
