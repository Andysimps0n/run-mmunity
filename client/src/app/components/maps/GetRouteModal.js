import React from 'react'

function GetRouteModal(props) {
  return (
    <div className='getRouteModal-outer-container'>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=close,menu" rel="stylesheet" />
      <div className="getRouteModal-container">
        <div className="getRouteModal-header ">
            <div className="getRouteModal-title ">Find Route</div>
            <div class="getRouteModal-closeButton material-symbols-outlined " id="menu-icon" onClick={()=>{props.setIsGetRouteModal(false)}}>close</div>
        </div>
      </div>
    </div>
  )
}



export default GetRouteModal
