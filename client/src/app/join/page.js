"use client"

import Script from 'next/script';
import Head from 'next/head'

import {React, useEffect, useState} from 'react'
import Header from '../components/Header'
import MapComponent from '../components/maps/Map'

function page() { 

  return (
    <div className="map-outermost-container">

      <Header component={'map'}></Header>
      <MapComponent></MapComponent>
      
    </div>
    
  )
}

export default page
