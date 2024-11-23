"use client"

import {React, useEffect, useState} from 'react'
import MapSideBar from '../components/maps/MapSideBar'
import Header from '../components/Header'
import MapComponent from '../components/maps/Map'

function page() { 

  const [isDrawingMode, setIsDrawingMode] = useState(false);

  return (
    <div className="map-outermost-container">

      <Header component={'map'}></Header>
      <MapComponent isDrawingMode={isDrawingMode}></MapComponent>
      <MapSideBar isDrawingMode={isDrawingMode} setIsDrawingMode={setIsDrawingMode}></MapSideBar>
      
    </div>
    
  )
}

export default page
