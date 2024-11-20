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
      </Head>

      <Header></Header>
      <Map></Map>
      {console.log('canLoadMap is ' + canLoadMap)}
      {canLoadMap ? console.log('rendering Map') : console.log('not renderting Map')}
    </div>
    
  )
}

export default page
