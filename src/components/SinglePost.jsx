/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { AiFillHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { MdInsertComment } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

const SinglePost = () => {

    const myHistory = useHistory();

    const handlePostNavigation = () => {
        myHistory.push('/feed-details');
    }

    return (
        <div className="card p-3 base-card curve-card single-post-card" onClick={handlePostNavigation}>
            <div className="d-flex align-items-center">
                <div className="avater-1 avater-2 mt-2">
                    <img src="assets/images/hex.png" className='hex' alt="" />
                    <img src="assets/images/ape.png" className='profile' alt="" />
                </div>
                <div className="d-flex flex-column ps-3">
                    <span className="fw-600">TestUser <span className='text-faded-2 fw-500 fs-7 '>@test</span> </span>
                    <span className='text-faded-2 fw-500 fs-8 '>24h</span>
                </div>
            </div>
            <p className='pt-2 fs-7 fw-500 '>Finally pulled the trigger on an SMB Excited to contribute to <a href="/@monkeydao">@MonkeyDAO</a> <a href="/@monkeymbs">@MonkeyMBS</a> </p>
            <div className="d-flex align-items-center ">
                <AiFillHeart className='text-primary fs-5' />
                <span className=' ps-2 fs-8 fw-500 '>244 Likes </span>
                <AiOutlineShareAlt className='text-faded ms-4 fs-5' />
                <span className=' ps-2 fs-8 fw-500 '>15+ Shares </span>
                <MdInsertComment className='text-faded ms-4 fs-5' />
                <span className=' ps-2 fs-8 fw-500'>2 Comments</span>
            </div>
        </div>
    )
}

export default SinglePost