"use client"


import {React, useState, useContext } from 'react'
import MapDropdownElement from './MapDropdownElement'

function MapSidebarElement(props) {
  
  const [dropdown, setDropdown] = useState(true)


  return (
    <>
    <div className={dropdown ? "map-dropdown-container-extend  " : "map-dropdown-container  "}>
        <div className="map-dropdown-container-wrapper  ">
        <div className="inline-flex-wrapper">
            <div className="map-dropdown-title"  onClick={()=>{setDropdown(!dropdown)}}>{props.title}</div>
            <div className="material-icons" id={dropdown? "down-arrow" : "down-arrow"}  onClick={()=>{setDropdown(!dropdown)}}>keyboard_arrow_down</div>
            <div className="map-dropdown-bar"></div>

            {dropdown ? <MapDropdownElement isTurnedOn={true} text={props.text[0]} onClick={()=>{}}></MapDropdownElement> : <MapDropdownElement isTurnedOn={false}></MapDropdownElement> }
            {dropdown ? <MapDropdownElement isTurnedOn={true} text={props.text[1]} onClick={()=>{}}></MapDropdownElement> : <MapDropdownElement isTurnedOn={false}></MapDropdownElement> }
            
        </div>
        </div>
    </div>

   
    </>
  )
}

export default MapSidebarElement
