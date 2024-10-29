"use client"

import { useDispatch } from 'react-redux'
import { setDistanceMenuRef } from '../store'


import {React, useState } from 'react'
import MapDropdownElement from './MapDropdownElement'
import DistanceMenu from './DistanceMenu'

function MapSidebarElement(props) {

  const [dropdown, setDropdown] = useState(true)

  


  return (
    <>
    <div className={dropdown ? "map-dropdown-container map-dropdown-container-extend  " : "map-dropdown-container "}>
        <div className="map-dropdown-container-wrapper  ">
        <div className="inline-flex-wrapper">
            <div className="map-dropdown-title"  onClick={()=>{setDropdown(!dropdown)}}>{props.title}</div>
            <div className="material-icons" id={dropdown? "down-arrow" : "down-arrow"}  onClick={()=>{setDropdown(!dropdown)}}>keyboard_arrow_down</div>
            <div className="map-dropdown-bar"></div>

            {dropdown ? <MapDropdownElement isTurnedOn={true} text={props.text[0]} onClick={()=>{}}></MapDropdownElement> : null }
            {dropdown ? <MapDropdownElement isTurnedOn={true} text={props.text[1]} onClick={()=>{}}></MapDropdownElement> : null }
            
            
            {props.isDistanceMode ? <DistanceMenu mapObject={props.mapObject}></DistanceMenu> : null }
            

        </div>
        </div>
    </div>

   
    </>
  )
}

export default MapSidebarElement
