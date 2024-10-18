'use client';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
 
export default function Map() {

  
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
 
    const map = new kakao.maps.Map(mapRef, options); //지도 생성 및 객체 리턴
  }, []);
 
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.ca0517e212eef9e2b05b7cb7b27e8bb4}`}
      />
      <div ref={mapRef} className=""></div>;
    </>
  );
}