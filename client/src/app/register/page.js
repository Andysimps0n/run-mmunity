"use client"

import { useRouter } from 'next/navigation'
import {React, useState} from 'react'
import Header from '../components/Header'

import HomeAndGoBack from '../components/HomeAndGoBack'
import { requestSignUp } from '../requests'

function page() {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const clickHandler = async () => {
    const response = await requestSignUp({name : userName, password : userPassword});
    const {message} = response.data
    
    
    console.log(message)
    if (message == "Signup Success"){
      router.push('/')
    } else if (message == "taken") {
      window.alert('The user name is taken')
    }
  }


  const handleKeyDown =  (e)=>{
    if (e.key === 'Enter') {
      e.preventDefault();
      clickHandler()
    }
  }
  


  return (
    <>
    <Header className="no-margin"></Header>

    <div className="login-wrapper ">
      <div className="login-title ">Sign Up</div>
      <div className="already"><a href="/register">Already an account?</a></div>
     
     
     
      <input 
      type="text" 
      className="login-input " 
      placeholder="Username" 
      onChange={(e)=>{setUserName(e.target.value)}}
      required
      />



      <input 
      type="password" 
      className="login-input " 
      placeholder="Password" 
      onChange={(e)=>{setUserPassword(e.target.value)}} 
      required
      onKeyDown={handleKeyDown}
      />
      <div onClick={()=>{clickHandler()}} className="submit-button">Sign Up</div>
    </div>


    <HomeAndGoBack></HomeAndGoBack>
    
    </>
  )
} 

export default page
