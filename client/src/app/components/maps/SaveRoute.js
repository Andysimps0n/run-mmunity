"use client"
import React from 'react'
import store from '@/app/store';

import { addValueToMapObj, resetMapObj } from '@/app/slices';
import { requestSaveRoute } from '@/requests';
import { useSelector } from 'react-redux';

function SaveRoute(props) {

  const paths = useSelector((state)=> state.mapInfo.paths)
  const distances = useSelector((state)=> state.mapInfo.distances)[2]
  const routeObj = {
    paths,
    distances,
  }

  const onSave = () => {
    console.log(routeObj)
    requestSaveRoute(routeObj)
    props.setIsDrawingMode(!false)
    store.dispatch(resetMapObj({ field: 'paths' }));
    store.dispatch(resetMapObj({ field: 'distances' }));
    props.setIsSavingRoute(false)

  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=close,menu" rel="stylesheet" />
        
      <div className='saveRoute-container'>
        <div className="saveRoute-header">
          Save Route
          <div 
           class="getRouteModal-closeButton material-symbols-outlined "
           id="saveRoute-close-icon" 
           onClick={()=>{props.setIsSavingRoute(false)}}
          >close</div>
        </div>
        <div className="saveRoute-body">
          <div className="saveRoute-inputTitle">Route Name</div>
          <input></input>
          <div className="saveRoute-button-wrapper">
            <div className="saveRoute-button" onClick={()=>{onSave()}}>Save</div>
            <div className="saveRoute-button">Cancle</div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default SaveRoute
