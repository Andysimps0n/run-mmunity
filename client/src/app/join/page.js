"use client"

import Script from 'next/script';
import Head from 'next/head'

import {React, useEffect, useState} from 'react'
import Header from '../components/Header'
import Map from '../components/maps/Map'

function page() { 

  useEffect(() => {
    console.log('join/page.js is rendered')
  }, []);
  
  const[ canLoadMap, setCanLoadMap ]= useState(false);

  return (
    <div className="map-outermost-container">
      <Head>
        <Script
          onLoad={()=>{console.log('Loading sdk succeed')}}
          onError={()=>{console.log('Loading sdk failed')}}
          src="dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4"
        ></Script>
      </Head>

      <Header></Header>


      {canLoadMap ? console.log('rendering Map') : console.log('not renderting Map')}
    </div>
    
  )
}

export default page
