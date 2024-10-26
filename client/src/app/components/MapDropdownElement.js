import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { turnOn, turnOff } from '../store'
import { turnDistanceOn, turDistancenOff } from '../store'


function MapDropdownElement(props) {

    const isDistanceMode = useSelector(state => state.mapModal.value)
    const mapModal = useSelector(state => state.mapModal.value)
    const dispatch = useDispatch();



    return (
        <div 
        onClick={()=>{if (props.text == 'Create Route') {dispatch(turnOn())}}}
        className={props.isTurnedOn ?  "map-dropdown-element-appear" : "map-dropdown-element"}
        >
            {props.text}
        </div>
  )
}

export default MapDropdownElement
