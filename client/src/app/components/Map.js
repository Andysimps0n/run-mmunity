import Script from 'next/script'
import {React, useRef, useEffect} from 'react'

function Map() {

  const mapContainer = useRef(null); // Create a ref to hold the map div

  useEffect(() => {
    if (window.kakao && window.kakao.maps) { // Check if Kakao Maps is loaded
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      new window.kakao.maps.Map(mapContainer.current, options);
    }
  }, []);


  return (
    <div>

      <div ref={mapContainer} className='map'></div> {/* Ref attached here */}
    </div>
  )
}

export default Map
