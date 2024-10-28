"use client"
import { useDispatch } from 'react-redux'
import { turnOff, turnDistanceOn } from '../store'
import {React, useState} from 'react'

function MapModal() {
  
  const dispatch = useDispatch();
  const [carouselPage, setCarouselPage] = useState(0)
  const [dontShowIcon, setDontShowIcon] = useState(false)
  const handleOk = ()=>{
    dispatch(turnOff())
    dispatch(turnDistanceOn())
  }

  return (
    <div className="map-modal-background">
      <div className="map-modal-conatiner">
        
        <div className="map-modal-header-wrapper ">
          <div className="map-modal-title ">How to Create the Running Route</div>
        </div>        
        <div className="map-modal-bar "></div>

        <div className="map-carousel-wrapper ">


          <div className="map-carousel-icon-wrapper back-red" onClick={()=>{setCarouselPage(carouselPage !== 0 ? carouselPage - 1 : carouselPage)}}>
            <div className="material-icons">arrow_back_ios</div>
          </div>


          <div className="map-carousel ">
            <div className="map-carousel-inner border" style={{left: `${carouselPage * 100 * -1}%`}}>

            </div>
          </div>

          <div className="map-carousel-icon-wrapper back-red" onClick={()=>{setCarouselPage(carouselPage !== 3 ? carouselPage + 1 : carouselPage)}}>
            <div className="material-icons">arrow_forward_ios</div>
          </div>

          
        </div>

        <div className="map-modal-dont-wrapper ">
          Don't show again
          <span 
          className='material-icons ' 
          onClick={()=>{setDontShowIcon(!dontShowIcon)}}
          >{dontShowIcon ? "radio_button_checked" : "radio_button_unchecked"}</span>
        </div>

        <div className="map-modal-ok-wrapper ">
          <div className="map-modal-ok" onClick={()=>{handleOk()}}>Ok</div>
        </div>

      </div>
    </div>
  )
}

export default MapModal
