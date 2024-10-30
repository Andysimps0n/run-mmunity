import React from 'react'
import { useDispatch } from 'react-redux';
import { turnDistanceOff } from '../store';

import disatnceWrapper from '../hooks/mapDistance/distanceWrapper';

function DistanceMenu(props) {

  const dispatch = useDispatch()
  

  const onCancle = ()=>{
    console.log('on cancle');
    
    dispatch(turnDistanceOff())
    disatnceWrapper(undefined, true)
  }

  return (
    <div className='distance-menu-container'>
      <div className="distance-menu-warpper">

        <div className="distance-menu-element" onClick={()=>{}}>Save</div>
        <div className="distance-menu-bar"></div>
        <div className="distance-menu-element" onClick={()=>{
          onCancle()
          }}>Cancel</div>


      </div>
    </div>
  )
}

export default DistanceMenu
