
import {React, useState} from 'react'
import { addValueToMapObj, resetMapObj } from '@/app/slices';
import store from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { requestSaveRoute } from '@/requests';


function MapSideBar(props) {
  const [isMenuOn, setIsMenuOn] = useState(true);
  const paths = useSelector((state) => state.mapInfo.paths);
  const distances = useSelector((state) => state.mapInfo.distances); 

  const initMapObj = () => {
    store.dispatch(resetMapObj({ field: 'paths' }));
    store.dispatch(resetMapObj({ field: 'distances' }));
  }

  const oncancel = () => {
    props.setIsDrawingMode(!props.isDrawingMode)
    initMapObj();
  }

  const handleSaveRoute = () => {
    console.log(paths)
    props.setIsSavingRoute(true)
    // const response = requestSaveRoute(data)
  }
  

  return (
    <div className={`map-side-bar-outer-container ${isMenuOn ? null : "menu-off"}`}>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=menu" rel="stylesheet" />


      {/* Menu Button */}
      <div className="menu-icon-container ">
        <span class="icons material-symbols-outlined " id="menu-icon" onClick={() => {setIsMenuOn(!isMenuOn)}}>menu</span>
      </div>
    
      <div className="sidebar-wrapper">

        <div className="sidebar-element" onClick={() => {oncancel()}}>{props.isDrawingMode ? "Cancle" : "Create Route"}</div>
        {props.isDrawingMode ? <div className="sidebar-element" onClick={()=>{handleSaveRoute()}}>Save route</div> : null}


       <div className="sidebar-element" onClick={()=>{props.setIsGetRouteModal(true)}}>Get Route</div>
      </div>

    </div>
  )
}

export default MapSideBar
