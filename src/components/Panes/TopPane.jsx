import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineBell } from 'react-icons/ai'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { NavLink, useHistory } from 'react-router-dom'

const TopPane = () => {

    const [state, setState] = useState(1);
    const [search, setSearch] = useState('');

    const userHistory = useHistory();

    const handleUserSearchChange = event => {
        setSearch(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        userHistory.push('/search', { search })
        console.log(search)
    };

    return (
        <div className="top">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-3 d-lg-block d-none border-end">
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

                                <div className="ws-search">
                                    <form onSubmit={handleSubmit}>
                                        <AiOutlineSearch className='fs-4 text-faded' />
                                        <input
                                            type="text"
                                            placeholder='Search'
                                            name='searchValue'
                                            onChange={handleUserSearchChange}
                                            value={search} />
                                    </form>
                                </div>

                                {/* <span className='fs-6 text-faded fw-600 ps-3'>2355 Posts </span> */}
                            </div>
                            <div className="d-flex col justify-content-end align-items-center ">
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
                                    <span className='fw-500 text-faded-2 '>Stix.near</span>
                                </>}>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPane