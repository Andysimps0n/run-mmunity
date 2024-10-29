import React from 'react'
import InitDistance from '../hooks/mapDistance/InitDistance';
import { useDispatch } from 'react-redux';
import { turnDistanceOff } from '../store';

function DistanceMenu(props) {

  const dispatch = useDispatch()
  

  const onCancle = (mapObject)=>{
    InitDistance(mapObject)
    dispatch(turnDistanceOff())
  }

  return (
    <div className='distance-menu-container'>
      <div className="distance-menu-warpper">

        <div className="distance-menu-element" onClick={()=>{}}>Save</div>
        <div className="distance-menu-bar"></div>
        <div className="distance-menu-element" onClick={()=>{
          onCancle(props.mapObject)
          }}>Cancel</div>


      </div>
    </div>
  )
}

export default DistanceMenu
