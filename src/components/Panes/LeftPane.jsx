import React, { useState, useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { MdOutlineCollections } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const LeftPane = () => {

    const [state, setState] = useState(1);

    useEffect(() => {
        setState(1);
    }, [])

    return (
        <div className={state === 1 ? "col-lg-3 col-12 px-0 border-end sidebar" : "col px-0 border-end sidebar d-none"}>
            {state === 1 &&
                <>
                    <div className="d-flex flex-column align-items-center pt-1 ">
                        <div className="avater-1 mt-4">
                            <img src="assets/images/hex.png" className='hex' alt="" />
                            <img src="assets/images/ape.png" className='profile' alt="" />
                        </div>
                        <span className='fs-4 fw-600  mt-2'>Dannyboy</span>
                        <span className='fs-6 fw-600 text-faded '>@daniel01</span>
                        <span className=' fw-600 fs-7 mt-2 text-faded-2'>Product and 3D Game Designer</span>
                        <div className="row mt-3 px-4 mx-0">
                            <div className="col-6 px-0 pe-1">
                                <div className="bg-card d-flex flex-column align-items-center">
                                    <span className='fs-5 fw-700  '>2,345</span>
                                    <span className='fs-7 fw-600 text-faded '>FOLLOWERS</span>
                                </div>
                            </div>
                            <div className="col-6 px-0 ps-1">
                                <div className=" bg-card d-flex flex-column align-items-center">
                                    <span className='fs-5 fw-700  '>2,345</span>
                                    <span className='fs-7 fw-600 text-faded '>FOLLOWERS</span>
                                </div>
                            </div>
                        </div>
                        <span className=' fw-600 fs-7 mt-4 border-bottom text-faded text-center w-100 pb-5'>Member since 2022</span>
                        <div className="d-flex flex-column p-3 w-100 ">
                            {/* NavLink */}
                            <nav>
                                <div className="d-flex ws-tabs active ps-4 ">
                                    <NavLink to="/" activeClassName="selected" className="linknav">
                                        <AiFillHome />
                                        <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Home</span>
                                    </NavLink>
                                </div>
                                <div className="d-flex ws-tabs mt-3 ps-4 ">
                                    <NavLink to="/profile" activeClassName="selected" className="linknav">
                                        <HiUserCircle />
                                        <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Edit Profile</span>
                                    </NavLink>
                                </div>
                                <div className="d-flex ws-tabs mt-3 ps-4 ">
                                    <NavLink to="/feeds" activeClassName="selected" className="linknav">
                                        <MdOutlineCollections />
                                        <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Feeds</span>
                                    </NavLink>
                                </div>
                                <div className="d-flex ws-tabs mt-3 ps-4 ">
                                    <FiLogOut />
                                    <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Disconnect</span>
                                </div>
                            </nav>
                        </div>
                    </div>
                </>
            }
        </div>
    )

}

export default LeftPane