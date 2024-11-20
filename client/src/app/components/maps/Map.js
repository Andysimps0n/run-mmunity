"use client"

import {React, useEffect, useState} from 'react'
import { Map } from 'react-kakao-maps-sdk';
import Script from 'next/script';

function MapComponent() {

  const [isDrawing, setIsDrawing] = useState(false)
  const [clickLine, setClickLine] = useState([])
  const [paths, setPaths] = useState([])
  const [distances, setDistances] = useState([])
  const [mousePosition, setMousePosition] = useState({lat:0, lng:0,})
  const [moveLine, setMoveLine] = useState()
  
  const handleClick = (_map, mouseEvent) => {

    // Re-init the map objects
    if (isDrawing == false) {
      setDistances([])
      setPaths([])
    }

    // Editing arrays using destructor
    setPaths((prev) => [
      ...prev,
      {
        lat : mouseEvent.latLng.getLat(),
        lng : mouseEvent.latLng.getLng(),
      }
    ])

    setDistances((prev)=> [
      ...prev,
      Math.round(clickLine.getLength() + moveLine.getLength()),
    ])
    setIsDrawing(true)
  }

  const handleMouseMove = (_map, mouseEvent) => {
    setMousePosition({
      lat : mouseEvent.latLng.getLat(),
      lng : mouseEvent.latLng.getLng()
    })
  }

  const handleCancle = (_map) => {
    setIsDrawing(false)
    setDistances([])
    setPaths([])
  }

  return (
    <>
      <Script strategy="beforeInteractive" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4&autoload=false"></Script>
      <Map 
        center={{lat : 37.274221, lng : 127.056583}}
        className='kakaoMap'
        ></Map>
    </>
  )
}

export default MapComponent
