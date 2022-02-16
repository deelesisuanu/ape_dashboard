import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { MdOutlineCollections } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className="d-flex ws-tabs active ps-4">
                <NavLink to="/" activeClassName="selected" className="linknav">
                    <AiFillHome />
                    <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Home</span>
                </NavLink>
            </div>
            <div className="d-flex ws-tabs mt-3 ps-4">
                <NavLink to="/profile" activeClassName="selected" className="linknav">
                    <HiUserCircle />
                    <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Edit Profile</span>
                </NavLink>
            </div>
            <div className="d-flex ws-tabs mt-3 ps-4">
                <NavLink to="/feeds" activeClassName="selected" className="linknav">
                    <MdOutlineCollections />
                    <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Feeds</span>
                </NavLink>
            </div>
            <div className="d-flex ws-tabs mt-3 ps-4">
                <FiLogOut />
                <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Disconnect</span>
            </div>
        </nav>
    )
}

export default Navigation