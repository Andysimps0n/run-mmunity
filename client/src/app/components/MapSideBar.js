"use client"
import {React, useState} from 'react'
import MapDropdownElement from './MapDropdownElement'

import MapSidebarElement from './MapSidebarElement';

function MapSideBar() {

  const [dropdown, setDropdown] = useState(false)

  const [sideBar, setSideBar] = useState(true);

  return (
    <div className={sideBar ? 'map-sideBar-container extended' : "map-sideBar-container"}>


      {/* this is the Menu closing-opening button */}
      <div className={sideBar ? "menu-wrapper menu-wraper-extend" : "menu-wrapper"} onClick={()=>{setSideBar(!sideBar)}}>
        <div className="material-icons" id="menu">menu</div>
      </div>


        {/* these are the Sidebar's main components - the Running Crew and the Running Routes */}
        <MapSidebarElement title={"Running Crew"} text={['Join Crew', "Create Crew"]}></MapSidebarElement>
        <MapSidebarElement title={"Running Route"} text={['Run Route', 'Create Route']}></MapSidebarElement>
        

    </div>
  )
}

export default MapSideBar
