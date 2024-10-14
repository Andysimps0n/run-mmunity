"use client"

import { useRouter } from 'next/navigation'
import {React, useState} from 'react'
import PostElement from '../components/PostElement'
import WritePost from '../components/WritePost'
import Pagination from '../components/Pagination'
import PostHeader from '../components/PostHeader'
import Header from '../components/Header'

function page() {

  
  //  Replace with DB from server later
  const dummyData =  new Array(7).fill("What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing");
  const router = useRouter()

  const [writingPostModalBool, setWritingPostModalBool] = useState(false)


  return (
    <>
      <Header></Header>

      <div className="posts-outer-most-container">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>

        <PostHeader></PostHeader>


        <div className="posts-container ">
          {dummyData.map((element,i)=>{return(<PostElement key={i}text={element}></PostElement>)})}


          <div onClick={()=>{setWritingPostModalBool(true)}} id="create-post" className="post">
            <div className="material-icons" id="add-post">add_comment</div>
          </div>
        </div>

        {writingPostModalBool? <WritePost setWritingPostModalBool={setWritingPostModalBool}></WritePost> : null}
        

        <Pagination></Pagination>


      </div>
    </>
  )
}

export default page
