import React, { useEffect, useState } from 'react'
import { requestGetRoutes } from '@/requests'
import Route from './Route'

function GetRouteModal(props) {

  const [routes, setRoutes] = useState([])

  useEffect(  ()=>{
    updateRoutes()
    },[])

  const updateRoutes = async () => {
    const response = await requestGetRoutes()
    setRoutes(response.data.data)
  }





  return (
    <div className='getRouteModal-outer-container'>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=close,menu" rel="stylesheet" />
      <div className="getRouteModal-container">
        <div className="getRouteModal-header ">
            <div className="getRouteModal-title ">Find Route</div>
            <div class="getRouteModal-closeButton material-symbols-outlined " id="menu-icon" onClick={()=>{props.setIsGetRouteModal(false)}}>close</div>
        </div>
        <div className="getRoute-Modal-body">
          {
            routes.map((e, i)=>{
              return (
                <Route key={i} data={e}></Route>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}



export default GetRouteModal
