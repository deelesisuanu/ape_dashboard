import React, { useState, useEffect } from 'react'

const UserProfile = () => {

    const [state, setState] = useState(1);

    useEffect(() => {
        setState(1);
    }, [])

    return (
        <>
            <div className={state === 1 ? "col-lg-6 col-12 px-0" : "col-12 px-0"} >
                <div className="row pt-3 mx-0">
                    <div className="col-lg-12 col-12 pt-3 px-4 order-lg-1 order-2">
                        <div className="card p-3 base-card curve-card">

                            <div className='row'>
                                <div className='col-lg-4'>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="d-flex align-items-center">
                                        <div className="avater-1 mt-4">
                                            <img src="assets/images/hex.png" className='hex' alt="" />
                                            <img src="assets/images/ape.png" className='profile' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                </div>
                            </div>

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

                            <div className="row mt-3 px-4 mx-0">
                                <div className="col-12 px-0 pe-1">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ante sapien. 
                                        Curabitur ligula orci, aliquet in arcu sit amet, pretium congue tellus.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile