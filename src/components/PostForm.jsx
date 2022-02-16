/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { FaRegImage } from 'react-icons/fa'
import { RiVideoLine } from 'react-icons/ri'

const PostForm = ({ action, placeholder }) => {

    return (
        <div className="card mb-2 ">
            <div className="d-flex align-items-start">
                <div className="d-flex align-items-center p-3 py-2">
                    <div className="avater-1 avater-2 mt-2">
                        <img src="assets/images/hex.png" className='hex' alt="" />
                        <img src="assets/images/ape.png" className='profile' alt="" />
                    </div>
                </div>
                <textarea name="" id="" cols="30" rows="5" className='mt-4 mt-0 border-0 post-textarea col' placeholder={placeholder} ></textarea>
            </div>

            <div className="d-flex align-items-center justify-content-between border-top p-3">
                <div className="d-flex align-items-center ">
                    <FaRegImage className='fs-3 ' style={{ opacity: .4 }} />
                    <RiVideoLine className='fs-3  mx-3' style={{ opacity: .4 }} />
                    <AiOutlineFilePdf className='fs-4 ' style={{ opacity: .4 }} />
                </div>
                <button className="btn bg-primary rounded-0 text-light fw-600 px-5">{action}</button>
            </div>
        </div>
    )
}

export default PostForm