"use client"


import {React, useState} from 'react'
import { requestLike } from '../requests';
function PostElement(props) {

  const [hasLiked, setHasLiked] = useState(false);
  const [likeClass, setLikeClass] = useState(false);

  const handleLikeClick = async (id)=>{
    const data = {id : props.id, hasLikedBool : !hasLiked}
    const response = await requestLike(data)
    props.fetchIntoState()
    
    setHasLiked(!hasLiked)
    setLikeClass(!likeClass)
    console.log(`hasliked : ${hasLiked}, likeClass : ${likeClass}`)
  }




  return (
    <div key={props.id} id={`post${props.id}`} className="post"> 
    <div className="post-wrapper ">
      <div className="post-text">
        <div>{props.text}</div>
      </div>

      <div className="post-reactions">
<<<<<<< HEAD
        <div className="post-reaction-wrapper  " onClick={()=>(handleLikeClick())}>
          <div className={`material-icons ${likeClass ? "red-like" : null}`} id="favorite">favorite</div>
          <div>{props.like ? props.like : 'x'}</div>
        </div>
        <div className="post-reaction-wrapper  ">
=======
        <div className="post-reaction-wrapper" onClick={()=>(handleLikeClick())}>
          <div className={`material-icons ${likeClass ? "red-like" : null}`} id="favorite">favorite</div>
          <div>{props.like ? props.like : 'x'}</div>
        </div>
        <div className="post-reaction-wrapper">
>>>>>>> a81ef98c0b61662a426911d0427eae34bfc49ad8
          <div className="material-icons" id="chat_bubble">chat_bubble</div>
          <div> 0</div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default PostElement
