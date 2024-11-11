import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { turnDistanceOff } from '../store';
import disatnceWrapper from '../hooks/mapDistance/distanceWrapper';

function DistanceMenu(props) {

  const map = useSelector(state=>state.map.value)
  const onCancle = ()=>{
    
    dispatch(turnDistanceOff())
    
  }

  const mapLatLng = useSelector(state=>state.mapLatLng.value);
  const dispatch = useDispatch();



  return (
    <div className='distance-menu-container'>
      <div className="distance-menu-warpper">

        <div className="distance-menu-element" onClick={()=>{onSave()}}>Save</div>
        <div className="distance-menu-bar"></div>
        <div className="distance-menu-element" onClick={()=>{
          onCancle()
          }}>Cancel</div>


      </div>
    </div>
  )
}

export default DistanceMenu
