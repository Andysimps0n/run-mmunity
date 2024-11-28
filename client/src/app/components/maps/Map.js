'use client'

import {React, useEffect, useState} from 'react'
import { Map, CalculatePolylineDistanceStyle, Polyline, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Script from 'next/script';


import { addValueToMapObj, resetMapObj } from '@/app/slices';
import store from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';



function MapComponent(props) {

  const [isDrawing, setIsDrawing] = useState(false)
  const [mousePosition, setMousePosition] = useState({lat:0, lng:0,})
  const [moveLine, setMoveLine] = useState()
  const [onCheckPoint, setOnCheckPoint] = useState(false)
  const [clickLine, setClickLine] = useState([])

  const dispatch = useDispatch()
  const paths = useSelector((state) => state.mapInfo.paths);
  const distances = useSelector((state) => state.mapInfo.distances); 
  
  const initMapObj = () => {
    store.dispatch(resetMapObj({ field: 'paths' }));
    store.dispatch(resetMapObj({ field: 'distances' }));
  };


  const handleClick = (_map, mouseEvent) => {

    if (isDrawing == false) {
      initMapObj();
    }

    

    let clickedObj = {
      lat : mouseEvent.latLng.getLat(),
      lng : mouseEvent.latLng.getLng(),
    }

    let newDistanceElement = Math.round(clickLine.getLength() + moveLine.getLength())

    store.dispatch(addValueToMapObj({ field : "paths" , value :  clickedObj}))
    store.dispatch(addValueToMapObj({ field : "distances" , value :  newDistanceElement}))
    
    setIsDrawing(true)
  };

  const handleRightClick = (_map, mouseEvent) => {
    
    if (isDrawing == true) {
      
      let clickedObj = {
        lat : mouseEvent.latLng.getLat(),
        lng : mouseEvent.latLng.getLng(),
      }

      let newDistanceElement = Math.round(clickLine.getLength() + moveLine.getLength())

      store.dispatch(addValueToMapObj({ field : "paths" , value :  clickedObj}))
      store.dispatch(addValueToMapObj({ field : "distances" , value :  newDistanceElement}))
      
      setIsDrawing(false)
      setOnCheckPoint(true)
    }
  }

  const handleMouseMove = (_map, mouseEvent) => {
    setMousePosition({
      lat : mouseEvent.latLng.getLat(),
      lng : mouseEvent.latLng.getLng()
    })
  }
  


  return (
    <>
      <Script strategy="beforeInteractive" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4&autoload=false"></Script>
      <Map 
        center={{lat : 37.274221, lng : 127.056583}}
        className='kakaoMap'
        onClick={props.isDrawingMode ? handleClick : null}
        onMouseMove={props.isDrawingMode && isDrawing? handleMouseMove : null}
        onRightClick={props.isDrawingMode ? handleRightClick : null}
      >

      {props.isDrawingMode ? 
      <Polyline
      path={paths}
      strokeWeight={3}
      strokeColor={"#e72f76"}
      strokeOpacity={1}
        strokeStyle={'solid'}
        onCreate={setClickLine}
        ></Polyline>
      : null}
        

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


      {props.isDrawingMode ?
        <Polyline
        path={isDrawing ? [paths[paths.length - 1], mousePosition] : []}
        strokeWeight={3} // 선의 두께입니다
        strokeColor={"#e72f76"} // 선의 색깔입니다
        strokeOpacity={0.5} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
        onCreate={setMoveLine}
        />
        : null}


      {isDrawing && props.isDrawingMode && (
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
        
      {onCheckPoint && props.isDrawingMode && (
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

      {!props.isDrawingMode? (
        null
        ) : (
          <div className="dotOverlay">
            거리
          </div>
        )}
      
      </Map>
      </>
    )
  }
  
  export default MapComponent
