import React from 'react'
import store from '@/app/store'
import { hardSetMapObj } from '@/app/slices'
import { useSelector } from 'react-redux'


function Route(props) {
  const data = props.data

  const paths = useSelector((state) => state.mapInfo.paths);
  const distances = useSelector((state)=> state.mapInfo.paths);

  const onRun = ()=> {
    props.setIsGetRouteModal(false)
    props.setIsDrawingMode(true)
    store.dispatch(hardSetMapObj({ obj : data }));

    // console.log(paths)
    // console.log(distances)
  }

  
  return (

    <>
      <div className="route-wrapper">
        <div className="name">{data.name}</div>
        <div className='route-flex-wrapper '>
          <div className="paths">Route Distance : {data.distances}m</div>
          <div className="route-start-button" onClick={()=>{onRun()}}>Run</div>
        </div>
      </div>

    
    </>
  )
}

export default Route
