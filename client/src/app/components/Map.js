import { useEffect, useRef } from 'react';
import Script from 'next/script'; // Import Script from Next.js
import Header from './Header';
import MapSideBar from './MapSideBar';

const Map = () => {
  const mapContainer = useRef(null); // Create a ref to hold the map div

  useEffect(() => {
    // This code runs after the script is loaded
    if (window.kakao && window.kakao.maps) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.27415136786895, 127.0565980191825), // Center coordinates
        level: 4, // Zoom level
      };
      // Create a map instance
      const map = new window.kakao.maps.Map(mapContainer.current, mapOption);
    }
  }, []); // Empty dependency array means this runs once after the component mounts

  return (
    <div >
      {/* <Header ></Header> */}
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4" // Replace with your actual app key
        strategy="beforeInteractive" // Ensures the script loads before any code runs
      />




      <div className="map-outer-most-container ">
        <Header isOnMap={true}></Header>
        
        <MapSideBar></MapSideBar>
        <div ref={mapContainer} style={{ width: '100%', height: '100%' }}></div>

      </div>

    </div>
  );
};

export default Map;


