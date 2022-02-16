import React, { useState, useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { MdOutlineCollections } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    const [activeId, setActiveId] = useState('');

    useEffect(() => {
      console.log(activeId)
    }, [activeId])

    return (
        <nav>
            <div className={`${ ( activeId === "home" ) ? "active" : "" } d-flex ws-tabs ps-4`}>
                <NavLink to="/" activeClassName="selected" className="linknav" onClick={() => setActiveId("home")}>
                    <AiFillHome />
                    <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Home</span>
                </NavLink>
            </div>
            <div className={`${ ( activeId === "feeds" ) ? "active" : "" } d-flex ws-tabs mt-3 ps-4`}>
                <NavLink to="/feeds" activeClassName="selected" className="linknav" onClick={() => setActiveId("feeds")}>
                    <MdOutlineCollections />
                    <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Feeds</span>
                </NavLink>
            </div>
            <div className={`${ ( activeId === "profile" ) ? "active" : "" } d-flex ws-tabs mt-3 ps-4`}>
                <NavLink to="/profile" activeClassName="selected" className="linknav" onClick={() => setActiveId("profile")}>
                    <HiUserCircle />
                    <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Edit Profile</span>
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