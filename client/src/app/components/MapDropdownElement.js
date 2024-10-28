import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { turnOn } from '../store'


function MapDropdownElement(props) {

    const dispatch = useDispatch();



    return (
        <div 
        onClick={()=>{if (props.text == 'Create Route') {dispatch(turnOn())}}}
        className={"map-dropdown-element-appear"}
        >
            {props.text}
        </div>
  )
}

export default MapDropdownElement
