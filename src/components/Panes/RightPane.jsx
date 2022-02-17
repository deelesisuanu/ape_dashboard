import React from 'react'
// import { AiOutlineSearch } from 'react-icons/ai'
import { CgHashtag } from 'react-icons/cg'

const RightPane = () => {
    return (
        <div className="col-lg-3 col-12 py-3 ps-lg-0 ps-4 pe-4 order-lg-2 order-1 hide-mobile right-pane-ad">
            
            <div className="card d-flex  mt-4 flex-column p-3">
                <span className='fs-5 fw-600 '>Trending</span>
                <div className="d-flex align-items-center pt-3 text-faded-2">
                    <CgHashtag className='fs-4' />
                    <span className=' fw-600 ps-2'>Test</span>
                </div>
                <div className="d-flex align-items-center pt-3 text-faded-2">
                    <CgHashtag className='fs-4' />
                    <span className=' fw-600 ps-2'>Test</span>
                </div>
                <div className="d-flex align-items-center pt-3 text-faded-2">
                    <CgHashtag className='fs-4' />
                    <span className=' fw-600 ps-2'>Test</span>
                </div>
                <div className="d-flex align-items-center pt-3 text-faded-2">
                    <CgHashtag className='fs-4' />
                    <span className=' fw-600 ps-2'>Avalance</span>
                </div>
            </div>
        </div>
    )
}

export default RightPane;