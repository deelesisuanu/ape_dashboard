/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from 'react'
import { AiFillHome, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineBell, AiOutlineFilePdf, AiFillHeart, AiOutlineSearch } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { FaRegImage, FaBars } from 'react-icons/fa'
import { RiVideoLine } from 'react-icons/ri'
import { MdInsertComment, MdOutlineCollections } from 'react-icons/md'
import { CgHashtag } from 'react-icons/cg'
import { GrLineChart } from 'react-icons/gr'
import { FiLogOut } from 'react-icons/fi'

import { Dropdown, DropdownButton } from 'react-bootstrap'

const PostCard = () => {
    return (
        <div className="card  p-3">
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
            <p className='pt-2 fs-7 fw-500 '>Finally pulled the trigger on an SMB Excited to contribute to <a href="">@MonkeyDAO</a> <a href="">@MonkeyMBS</a> </p>
            <div className="d-flex align-items-center ">
                <AiFillHeart className='text-primary fs-5' />
                <span className=' ps-2 fs-8 fw-500 '>244 Likes </span>
                <MdInsertComment className='text-faded ms-4 fs-5' />
                <span className=' ps-2 fs-8 fw-500'>2 Comments</span>
            </div>
        </div>
    )
}

export default function Home() {

    const [state, setState] = useState(1);

    return (
        <>

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
                                    <span className='fs-6 text-faded fw-600 ps-3'>2355 Posts </span>
                                </div>
                                <div className="d-flex col justify-content-end align-items-center ">
                                    <span className='bell me-lg-3'>
                                        <span></span>
                                        <AiOutlineBell className='fs-4 text-faded' />
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
            <div className="container " >
                <div className="row mx-0 parent" >
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
                                        <div className="d-flex ws-tabs active ps-4 ">
                                            <AiFillHome />
                                            <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Home</span>
                                        </div>
                                        <div className="d-flex ws-tabs mt-3 ps-4 ">
                                            <HiUserCircle />
                                            <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Profile</span>
                                        </div>
                                        <div className="d-flex ws-tabs mt-3 ps-4 ">
                                            <MdOutlineCollections />
                                            <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Collection</span>
                                        </div>
                                        <div className="d-flex ws-tabs mt-3 ps-4 ">
                                            <GrLineChart />
                                            <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Stats</span>
                                        </div>
                                        <div className="d-flex ws-tabs mt-3 ps-4 ">
                                            <FaBars />
                                            <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Newsletter</span>
                                        </div>
                                        <div className="d-flex ws-tabs mt-3 ps-4 ">
                                            <FiLogOut />
                                            <span className='fs-5 fw-600 ms-3 pt-1 text-faded-2'>Disconnect</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className={state === 1 ? "col-lg-9 col-12 px-0 " : "col-12 px-0"} >

                        <div className="row pt-3 mx-0">
                            <div className="col-lg-8 col-12 pt-3 px-4 order-lg-1 order-2">
                                <div className="card mb-2 ">
                                    <div className="d-flex align-items-start">
                                        <div className="d-flex align-items-center p-3 py-2">
                                            <div className="avater-1 avater-2 mt-2">
                                                <img src="assets/images/hex.png" className='hex' alt="" />
                                                <img src="assets/images/ape.png" className='profile' alt="" />
                                            </div>
                                        </div>
                                        <textarea name="" id="" cols="30" rows="5" className='mt-4 mt-0 border-0 post-textarea col' placeholder='Create a new post' ></textarea>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between border-top p-3">
                                        <div className="d-flex align-items-center ">
                                            <FaRegImage className='fs-3 ' style={{ opacity: .4 }} />
                                            <RiVideoLine className='fs-3  mx-3' style={{ opacity: .4 }} />
                                            <AiOutlineFilePdf className='fs-4 ' style={{ opacity: .4 }} />
                                        </div>
                                        <button className="btn bg-primary rounded-0 text-light fw-600 px-5">Post</button>
                                    </div>
                                </div>
                                <PostCard />
                                <PostCard />
                            </div>
                            <div className="col-lg-4 col-12 py-3 ps-lg-0 ps-4 pe-4 order-lg-2 order-1">
                                <div className="ws-search">
                                    <AiOutlineSearch className='fs-4 text-faded' />
                                    <input type="text" placeholder='Search' />
                                </div>

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
