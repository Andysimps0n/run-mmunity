"use client"
import {React, useState} from 'react'


function MapSideBar() {

  const [sideBar, setSideBar] = useState(false);

  console.log(sideBar ? "menu-wrapper menu-wraper-extend" : "menu-wrapper");
  return (
    <div className={sideBar ? 'map-sideBar-container extended' : "map-sideBar-container"}>
      <div className={sideBar ? "menu-wrapper menu-wraper-extend" : "menu-wrapper"} onClick={()=>{setSideBar(!sideBar)}}>
        <div className="material-icons" id="menu">menu</div>
      </div>

    </div>
  )
}

export default MapSideBar
