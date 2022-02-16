import React, { useState, useEffect } from 'react'
import SinglePost from '../components/SinglePost'
import PostForm from '../components/PostForm';

export default function Home() {

  const [state, setState] = useState(1);

  useEffect(() => {
    setState(1);
  }, [])

  return (
    <>
      <div className={state === 1 ? "col-lg-6 col-12 px-0 " : "col-12 px-0"} >

        <div className="row pt-3 mx-0">
          <div className="col-lg-12 col-12 pt-3 px-4 order-lg-1 order-2">

            <PostForm action="Post" placeholder="Create a new post" />
            
            <SinglePost />
            <SinglePost />
            <SinglePost />

          </div>

        </div>
      </div>
    </>
  )
}
