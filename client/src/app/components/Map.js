import Script from 'next/script'
import {React, useRef, useEffect} from 'react'

function Map() {

  const mapRef = useRef(null)

  useEffect(()=>{
    const options = {
      center : new window.kakao.maps.LatLng(3,3),
      level : 3
    }

    const map = new window.kakao.maps.Map(mapRef, options)
  },[])





  return (
    <div>
      <Script
        src={"//dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4"}
      ></Script>
    </div>
  )
}

export default Map
