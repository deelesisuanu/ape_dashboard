import React, { useState, useContext } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineBell } from 'react-icons/ai'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { ToggleContext } from '../../contexts/ToggleContext'

const TopPane = () => {

    const { toggle, setToggle } = useContext(ToggleContext)

    const [state, setState] = useState(1)

    const handleNavToggle = () => {
        setToggle( (toggle) ? false : true )
    }

    return (
        <div className="top">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-3 d-lg-block d-none border-end border-end-attached">
                        <div className="top p-3 d-flex align-items-center ">
                            <img src="assets/images/logo.png" className='logo' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="top p-3 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src="assets/images/logo.png" className='logo me-3 d-lg-none d-block' alt="" />
                                {state === 1 ?
                                    <AiOutlineArrowLeft className='text-faded fs-6 pointer' onClick={() => state === 0 ? setState(1) : setState(0)} />
                                    :
                                    <>
                                        <AiOutlineArrowRight className='text-faded fs-6 pointer' onClick={() => state === 0 ? setState(1) : setState(0)} />
                                    </>
                                }

                                <span className='fs-6 text-faded fw-600 ps-3'>2355 Posts </span>

                            </div>
                            <div className="d-flex col justify-content-end align-items-center ">

                                <NavLink to="/search" activeClassName="selected" className="linknav push-search">
                                    <AiOutlineSearch className='fs-4 text-faded' />
                                </NavLink>

                                <span className='bell me-lg-3'>
                                    <NavLink to="/notifications" activeClassName="selected" className="linknav">
                                        <span></span>
                                        <AiOutlineBell className='fs-4 text-faded' />
                                    </NavLink>
                                </span>
                                <DropdownButton id="dropdown-basic-button" className='px-0' variant="oultline-light" title={<>
                                    <div className="avater-1 avater-2 me-2">
                                        <img src="assets/images/hex.png" className='hex' alt="" />
                                        <img src="assets/images/ape.png" className='profile' alt="" />
                                    </div>
                                    <span className='fw-500 text-faded-2 hide-mobile'>Stix.near</span>
                                </>}>
                                    <Dropdown.Item href="#/action-1">Disconnect</Dropdown.Item>
                                </DropdownButton>

                                <span>
                                    <AiOutlineMenu className='fs-4 text-faded cursor-on hide-onmain' onClick={handleNavToggle} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPane