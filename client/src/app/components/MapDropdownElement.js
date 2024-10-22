import React from 'react'

function MapDropdownElement(props) {
    console.log(props.isTurnedOn)
    return (
        <div className={props.isTurnedOn ?  "map-dropdown-element-appear" : "map-dropdown-element"}>
            {props.text}
        </div>
  )
}

export default MapDropdownElement
