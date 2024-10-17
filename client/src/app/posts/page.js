"use client"

import { useParams,useRouter } from 'next/navigation'
import {React, useState, useEffect} from 'react'
import { requestPosts } from '../requests'

import PostElement from '../components/PostElement'
import WritePost from '../components/WritePost'
import Pagination from '../components/Pagination'
import PostHeader from '../components/PostHeader'
import Header from '../components/Header'

function page() {

  const [postData, setPostData] = useState([])
  const [writingPostModalBool, setWritingPostModalBool] = useState(false)
  const [page, setPage] = useState(1)


  useEffect(()=>{
    fetchIntoState()
  },[page])
  

  const fetchIntoState = async()=>{
    const response = await requestPosts(page)
    setPostData(response.data.data)
  }



  return (
    <>
      <Header></Header>

      <div className="posts-outer-most-container">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
        <PostHeader></PostHeader>

        <div className="posts-container ">
          {postData.map((element,i)=>{
            return(
            <PostElement id={element.id} text={element.text} like={element.like} fetchIntoState={fetchIntoState}></PostElement>
            )})}


          <div onClick={()=>{setWritingPostModalBool(true)}} id="create-post" className="post">
            <div className="material-icons" id="add-post">add_comment</div>
          </div>

        </div>

        {writingPostModalBool? <WritePost
           setWritingPostModalBool={setWritingPostModalBool}
           fetchIntoState={fetchIntoState}
           
           ></WritePost> : null}
        

        <Pagination page={page} setPage={setPage}></Pagination>


      </div>
    </>
  )
}

export default page
