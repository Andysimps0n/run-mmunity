"use client"


import {React, useState } from 'react'
import MapDropdownElement from './MapDropdownElement'

function MapSidebarElement(props) {

    const [dropdown, setDropdown] = useState(false)


  return (
    <>
    <div className={dropdown ? "map-dropdown-container-extend  border" : "map-dropdown-container  border"}>
        <div className="map-dropdown-container-wrapper border ">
        <div className="inline-flex-wrapper">
            <div className="map-dropdown-title"  onClick={()=>{setDropdown(!dropdown)}}>{props.title}</div>
            <div className="material-icons" id={dropdown? "down-arrow" : "down-arrow"}  onClick={()=>{setDropdown(!dropdown)}}>keyboard_arrow_down</div>
            <div className="map-dropdown-bar"></div>

            {dropdown ? <MapDropdownElement isTurnedOn={true} text={"qweqw"}></MapDropdownElement> : <MapDropdownElement isTurnedOn={false}></MapDropdownElement> }
            {dropdown ? <MapDropdownElement isTurnedOn={true} text={""}></MapDropdownElement> : <MapDropdownElement isTurnedOn={false}></MapDropdownElement> }
            
        </div>
        </div>
    </div>

   
    </>
  )
}

export default MapSidebarElement
