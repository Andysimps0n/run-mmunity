"use client"

import { useRouter } from 'next/navigation'
import {React, useState} from 'react'
import { requestLogin } from '../requests'
import {Poppins} from 'next/font/google'

import HomeAndGoBack from '../components/HomeAndGoBack'
import LoginModal from '../components/LoginModal'
import Header from '../components/Header'
import Footer from '../components/Footer'


const poppins = Poppins({
  subsets : ['latin'],
  weight : ['400', '500', '600', '700']
})


function page() {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [modalMessage, setmodalMessage] = useState({status : '', error : ''})
  const [modalSwitch, setModalSwitch] = useState(false)

  const clickHandler = async () => {
    const response = await requestLogin({name : userName, password : userPassword});
    
    console.log(response.data.error)
    console.log(response.data.message)

    if (response.data.error == undefined) {
      setmodalMessage({status : 'Login Succeed', error : null})

    } else if (response.data.error !== undefined) {
      setmodalMessage({status : 'Login Failed', error : response.data.error})
    }
    
    setModalSwitch(!modalSwitch)
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

    <div className={`login-wrapper ${poppins.className}`}>
      <div className="login-title ">Login</div>
      <div className="already">Don't have an account?  <a href="/register">Sign up</a></div>
     
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

      <div 
      onClick={()=>{clickHandler()}} 
      className="submit-button">
        Login
      </div>
    </div>


    <Footer></Footer>
    {modalSwitch ? <LoginModal setModalSwitch={setModalSwitch} text={modalMessage}></LoginModal> : null}
    </>
  )
} 

export default page
