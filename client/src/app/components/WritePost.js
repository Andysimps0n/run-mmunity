"use client"

import {React, useState} from 'react'
import { useRouter } from 'next/navigation';
import { requestPost } from '../requests';

function WritePost(props) {

    const router = useRouter()
    const [data, setData] = useState('');

    const setModaltoFalse = () => {props.setWritingPostModalBool(false)};
    const handlePost = async () => {
        const response = await requestPost({text : data, like : null});
        console.log(response.data.error)
        console.log({text : data, like : null})
        if (response.data.isPosted) {
            setModaltoFalse()
        }
        const {fetchIntoState} = props
        fetchIntoState()
    };

  return (
    <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
            <div className="write-post-outer-container ">
                    <div className="post-input-container ">
                        <textarea className='post-input' onChange={(e)=>{setData(e.target.value)}}></textarea>
                        <div className="post-buttons-wrapper">
                            <div className="post-button" onClick={setModaltoFalse}>Cancel</div>
                            <div className="post-button" onClick={handlePost}>Post</div>
                        </div>
                </div>
            </div>
    </>
    
)
}

export default WritePost
