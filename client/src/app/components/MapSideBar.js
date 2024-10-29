"use client"
import {React, useState} from 'react'

import {useSelector} from 'react-redux'

import MapSidebarElement from './MapSidebarElement';

function MapSideBar(props) {

  const [dropdown, setDropdown] = useState(false)
  const [sideBar, setSideBar] = useState(true);
  const isDistanceMode = useSelector(state => state.mapModal.value)


  return (  

    <>


      <div className={sideBar ? 'map-sideBar-container extended' : "map-sideBar-container"}>
        <div className={sideBar ? "menu-wrapper menu-wraper-extend" : "menu-wrapper"} onClick={()=>{setSideBar(!sideBar)}}>
          <div className="material-icons" id="menu">menu</div>
        </div>
          <MapSidebarElement title={"Running Crew"} text={['Join Crew', "Create Crew"]}></MapSidebarElement>

          <MapSidebarElement mapObject={props.mapObject} isDistanceMode={props.isDistanceMode} title={"Running Route"} text={['Run Route', 'Create Route']}></MapSidebarElement>
          {/* {isDistanceMode ? <DistanceMenu></DistanceMenu> : null}  */}
      </div>
    </>
  )
}

export default MapSideBar
