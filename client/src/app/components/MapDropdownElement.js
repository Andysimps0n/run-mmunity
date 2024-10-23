import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { turnOn, turnOff } from '../store'
import { DotGothic16 } from 'next/font/google';


function MapDropdownElement(props) {

    const mapModal = useSelector(state => state.mapModal.value)
    const dispatch = useDispatch();



    return (
        <div 
        onClick={()=>{dispatch(turnOn())}}
        className={props.isTurnedOn ?  "map-dropdown-element-appear" : "map-dropdown-element"}
        >
            {props.text}
        </div>
  )
}

export default MapDropdownElement
