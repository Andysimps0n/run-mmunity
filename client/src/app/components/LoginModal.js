import React from 'react'
import { useRouter } from 'next/navigation';


function LoginModal(props) {

  const {setModalSwitch} = props
  const router = useRouter();

  const clickHandler = ()=>{
    setModalSwitch(false)

  }


  return (
    <>
    <link 
      href="https://fonts.googleapis.com/icon?family=Material+Icons" 
      rel="stylesheet">
    </link>

    <div className="modal-cover">
      <div className="modal-outer-container ">
            <div className="modal-title">{props.text.status}</div>
              <div className="modal-text">{props.text.error}</div>
            <div onClick={()=>{clickHandler()}} className="material-icons close" id="close">close</div>
      </div>
    </div>
    </>
  )
}

export default LoginModal

