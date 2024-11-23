"use client"

import {React, useEffect, useState} from 'react'
import { Map, CalculatePolylineDistanceStyle, Polyline, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Script from 'next/script';

function MapComponent(props) {

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
        onClick={props.isDrawingMode ? handleClick : null}
        onMouseMove={props.isDrawingMode ? handleMouseMove : null}
      >


      <Polyline
        path={paths}
        strokeWeight={3}
        strokeColor={"#db4040"}
        strokeOpacity={1}
        strokeStyle={'solid'}
        onCreate={setClickLine}
      ></Polyline>


      {paths.map((path)=> {
        <CustomOverlayMap
          key={`dot-${path.lat}, ${path.lng}`}
          position={path}
          zIndex={1}
        >
          <span className="dot"></span>
        </CustomOverlayMap>
      })}


      {paths.lengtsh > 1 && distances.slice(1, distances.length).map((distance,index)=>(
        <CustomOverlayMap
            key={`distance-${paths[index + 1].lat},${paths[index + 1].lng}`}
            position={paths[index + 1]}
            yAnchor={1}
            zIndex={2}
          >
          {!isDrawing && distances.length === index + 2 ? (
            <DistanceInfo distance={distance} />
          ) : (
            <div className="dotOverlay">
              거리 <span className="number">{distance}</span>m
            </div>
          )}
        </CustomOverlayMap>
      ))}



        <Polyline
          path={isDrawing ? [paths[paths.length - 1], mousePosition] : []}
          strokeWeight={3} // 선의 두께입니다
          strokeColor={"#db4040"} // 선의 색깔입니다
          strokeOpacity={0.5} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
          strokeStyle={"solid"} // 선의 스타일입니다
          onCreate={setMoveLine}
        />


        {isDrawing && (
          <CustomOverlayMap position={mousePosition} yAnchor={1} zIndex={2}>
            <div className="dotOverlay distanceInfo">
              {" "}
              <span className="number">
                {Math.round(clickLine.getLength() + moveLine.getLength())}
              </span>
              m
            </div>
          </CustomOverlayMap>
        )}

      </Map>
    </>
  )
}

export default MapComponent
