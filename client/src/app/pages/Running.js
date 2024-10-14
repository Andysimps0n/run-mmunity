"use client"

import { useRouter } from 'next/navigation'
import React from 'react'


function Running() {
  const router = useRouter()

  return (
    <div className="outer-most-contaier   "> 
      <div className="outer-container   ">
        <div className="title no-select">Running</div>
        <div className="subtitle no-select">
          The act of moving swiftly on foot, where the
          body propels forward with a rhythm that lifts
          both feet off the ground in quick succession.
        </div>
        <div className="button-container">
            <div className="button-wrapper">
              <div onClick={()=>{router.push('/join')}} className="button1 no-select">Join</div>
              <div onClick={()=>{router.push('/shoes')}} className="button1 no-select">Shoes</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Running
