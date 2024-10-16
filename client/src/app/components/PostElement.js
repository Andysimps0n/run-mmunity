"use client"


import {React, useState} from 'react'
import { requestLike } from '../requests';
function PostElement(props) {

  const handleLikeClick = (id)=>{
    console.log(id)
  }

  const [hasLiked, setHasLiked] = useState(false);




  return (
    <div key={props.id} id={`post${props.id}`} className="post"> 
    <div className="post-wrapper ">
      <div className="post-text">
        <div>{props.text}</div>
      </div>

      <div className="post-reactions">
        <div className="post-reaction-wrapper border" onClick={()=>(requestLike(props.id))}>
          <div className="material-icons" id="favorite">favorite</div>
          <div>{props.like}</div>
        </div>
        <div className="post-reaction-wrapper border">
          <div className="material-icons" id="chat_bubble">chat_bubble</div>
          <div> 0</div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default PostElement
