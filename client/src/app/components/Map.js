import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


import Script from 'next/script'; 
import Header from './Header';
import MapSideBar from './MapSideBar';
import MapModal from './MapModal';
import distanceWrapper from '../hooks/mapDistance/distanceWrapper';
import { setMapRedux } from '../store';

const Map = () => {

  const mapContainer = useRef(null);
  const mapModal = useSelector(state => state.mapModal.value)
  const isDistanceMode = useSelector(state => state.isDistanceMode.value)
  const map = useSelector(state=>state.map.value)

  const dispatch = useDispatch()



  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.27415136786895, 127.0565980191825), // Center coordinates
        level: 4, 
      }; 
      dispatch(setMapRedux(new window.kakao.maps.Map(mapContainer.current, mapOption)))
    }
  }, []); 

  useEffect(()=>{
    {isDistanceMode ? distanceWrapper(map, false) : null}

  }, [isDistanceMode])

  return (
    <div >
      <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4" strategy="beforeInteractive" />
        <div className="map-outer-most-container ">


          <Header isOnMap={true}></Header>
          <MapSideBar isDistanceMode={isDistanceMode}></MapSideBar>

          <div ref={mapContainer} style={{ width: '100%', height: '92vh' }}></div>
          {mapModal ? <MapModal></MapModal> : null}


        </div>
    </div>
  );
};

export default Map;


