import { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';

import Script from 'next/script'; 
import Header from './Header';
import MapSideBar from './MapSideBar';
import MapModal from './MapModal';
import { distanceMode } from '../mapDistance';
import distanceOnCLick from '../hooks/distanceOnClick';

const Map = () => {
  const mapContainer = useRef(null);
  const mapModal = useSelector(state => state.mapModal.value)
  const [isDistanceMode, setIsDistanceMode] = useState(true)


  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.27415136786895, 127.0565980191825), // Center coordinates
        level: 4, 
      }; 


      const map = new window.kakao.maps.Map(mapContainer.current, mapOption);
      
      window.kakao.maps.event.addListener(map, 'click', distanceOnCLick())
      
      
    }
  }, []); 
  
  const mapDistanceMode = ()=>{
    console.log('distance clicked');
  }


  return (
    <div >
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4" // Replace with your actual app key
        strategy="beforeInteractive" 
      />


        <div className="map-outer-most-container ">
          <Header isOnMap={true}></Header>
            <MapSideBar ></MapSideBar>

          <div 
            ref={mapContainer} 
            style={{ width: '100%', height: '100%' }}
            ></div>
          
          {mapModal ? <MapModal></MapModal> : null}

        </div>

    </div>
  );
};

export default Map;


