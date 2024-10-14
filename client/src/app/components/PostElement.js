import React from 'react'

function PostElement(props) {
  return (
    <div className="post"> 
    <div className="post-wrapper ">
      <div className="post-text">
        <div>{props.text}</div>
      </div>

      <div className="post-reactions">
        <div className="post-reaction-wrapper">
          <div className="material-icons" id="favorite">favorite</div>
          <div> 0</div>
        </div>
        <div className="post-reaction-wrapper ">
          <div className="material-icons" id="chat_bubble">chat_bubble</div>
          <div> 0</div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default PostElement
