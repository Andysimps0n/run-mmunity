
import { Afacad } from 'next/font/google';
import {React, useState} from 'react'


function MapSideBar(props) {
  const [isMenuOn, setIsMenuOn] = useState(true);


  return (
    <div className={`map-side-bar-outer-container ${isMenuOn ? null : "menu-off"}`}>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=menu" rel="stylesheet" />


      {/* Menu Button */}
      <div className="menu-icon-container ">
        <span class="icons material-symbols-outlined " id="menu-icon" onClick={() => {setIsMenuOn(!isMenuOn)}}>menu</span>
      </div>
    
      <div className="sidebar-wrapper">

        <div className="sidebar-element" onClick={() => {props.setIsDrawingMode(!props.isDrawingMode)}}>Create Route</div>
        {props.isDrawingMode ? <div className="sidebar-element">making route</div> : null}


       <div className="sidebar-element">Join Route</div>
      </div>


    </div>
  )
}

export default MapSideBar
