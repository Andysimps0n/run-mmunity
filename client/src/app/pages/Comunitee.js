"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

function Comunitee() {
  const router = useRouter()

  return (
    <div className="outer-most-contaier"> 
      <div className="outer-container">
        <div className="title-right no-select">Community</div>
        <div className="subtitle-wrapper ">
          <div className="subtitle-right no-select ">
           the people living in one particular area or people who are considered as a unit because of their common interests, social group, or nationality          </div>
        </div>
        <div className="button-container-right ">
            <div className="button-wrapper2">
              <div onClick={()=>{router.push('/login')}} className="button1 no-select">Sign In</div>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Comunitee
