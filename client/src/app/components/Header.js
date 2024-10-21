"use client"

import React from 'react'
import { useRouter } from 'next/navigation'



function Header(props) {
  const router = useRouter()

  const headerElement = props.hoverDarkColor ? "header-elements-dark" : "header-elements"
  const headerOuterContainer = props.isOnMap ? "header-outer-container-map" : "header-outer-container"

  return (
    <div className={headerOuterContainer}>
      <div className="header-wrapper ">
        <div onClick={()=>{router.push('/')}} className={headerElement}>Home</div>
        <div onClick={()=>{router.push('/join')}} className={headerElement}>Join</div>
        <div onClick={()=>{router.push('/login')}} className={headerElement}>Login</div>
        <div onClick={()=>{router.push('/posts')}} className={headerElement}>Posts</div>
      </div>
    </div>  

  )
}

export default Header
