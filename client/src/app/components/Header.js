"use client"

import React from 'react'
import { useRouter } from 'next/navigation'



function Header() {
  const router = useRouter()

  return (
    <div className="header-outer-container  ">
      <div className="header-wrapper ">
        <div onClick={()=>{router.push('/')}} className="header-elements">Home</div>
        <div onClick={()=>{router.push('/join')}} className="header-elements">Join</div>
        <div onClick={()=>{router.push('/login')}} className="header-elements">Login</div>
        <div onClick={()=>{router.push('/posts')}} className="header-elements">Posts</div>
      </div>
    </div>  

  )
}

export default Header
