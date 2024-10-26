import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


import Script from 'next/script'; 
import Header from './Header';
import MapSideBar from './MapSideBar';
import MapModal from './MapModal';
import Cancle from './Cancle';

import { distanceMode } from '../mapDistance';
import distanceWrapper from '../hooks/mapDistance/distanceWrapper';

const Map = () => {

  const mapContainer = useRef(null);
  const mapModal = useSelector(state => state.mapModal.value)
  const isDistanceMode = useSelector(state => state.isDistanceMode.value)
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.27415136786895, 127.0565980191825), // Center coordinates
        level: 4, 
      }; 
      setMap(new window.kakao.maps.Map(mapContainer.current, mapOption))
    }
  }, []); 

  useEffect(()=>{
    {isDistanceMode ? distanceWrapper(map, mapContainer) : null}
    console.log(isDistanceMode)

  }, [isDistanceMode])
  


  return (
    <div >
      <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4" strategy="beforeInteractive" />
        <div className="map-outer-most-container ">


          <Header isOnMap={true}></Header>
          <MapSideBar ></MapSideBar>
          {}

          <div ref={mapContainer} style={{ width: '100%', height: '100%' }}></div>
          {mapModal ? <MapModal></MapModal> : null}


        </div>
    </div>
  );
};

export default Map;


