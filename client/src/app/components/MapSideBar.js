"use client"
import {React, useState} from 'react'
import MapDropdownElement from './MapDropdownElement'

import MapSidebarElement from './MapSidebarElement';

function MapSideBar() {

  const [dropdown, setDropdown] = useState(false)

  const [sideBar, setSideBar] = useState(true);

  return (
    <div className={sideBar ? 'map-sideBar-container extended' : "map-sideBar-container"}>
      <div className={sideBar ? "menu-wrapper menu-wraper-extend" : "menu-wrapper"} onClick={()=>{setSideBar(!sideBar)}}>
        <div className="material-icons" id="menu">menu</div>
      </div>


      <div className={dropdown ? "map-dropdown-container-extend  border" : "map-dropdown-container  border"}>
        <div className="map-dropdown-container-wrapper border ">
        <div className="inline-flex-wrapper">
            <div className="map-dropdown-title"  onClick={()=>{setDropdown(!dropdown)}}>Running Crew</div>
            <div className="material-icons" id={dropdown? "down-arrow" : "down-arrow"}  onClick={()=>{setDropdown(!dropdown)}}>keyboard_arrow_down</div>
            <div className="map-dropdown-bar"></div>

            {dropdown ? <MapDropdownElement isTurnedOn={true} text={"Find Running Crews"}></MapDropdownElement> : <MapDropdownElement isTurnedOn={false}></MapDropdownElement> }
            {dropdown ? <MapDropdownElement isTurnedOn={true} text={"Create Running Crew"}></MapDropdownElement> : <MapDropdownElement isTurnedOn={false}></MapDropdownElement> }
            
        </div>
        </div>
    </div>

    <div className={dropdown ? "map-dropdown-container-extend  border" : "map-dropdown-container  border"}>
        <div className="map-dropdown-container-wrapper border ">
        <div className="inline-flex-wrapper">
            <div className="map-dropdown-title"  onClick={()=>{setDropdown(!dropdown)}}>Running Route</div>
            <div className="material-icons" id={dropdown? "down-arrow" : "down-arrow"}  onClick={()=>{setDropdown(!dropdown)}}>keyboard_arrow_down</div>
            <div className="map-dropdown-bar"></div>

            {dropdown ? <MapDropdownElement isTurnedOn={true} text={"Find Running Routes"}></MapDropdownElement> : <MapDropdownElement isTurnedOn={false}></MapDropdownElement> }
            {dropdown ? <MapDropdownElement isTurnedOn={true} text={"Create Running Route"}></MapDropdownElement> : <MapDropdownElement isTurnedOn={false}></MapDropdownElement> }
            
        </div>
        </div>
    </div>


    </div>
  )
}

export default MapSideBar
