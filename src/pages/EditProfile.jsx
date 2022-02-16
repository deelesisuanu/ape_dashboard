import React, { useState, useEffect } from 'react'
import { FaEdit } from 'react-icons/fa'

const EditProfile = () => {

    const [state, setState] = useState(1);

    useEffect(() => {
        setState(1);
    }, [])

    return (
        <>
            <div className={state === 1 ? "col-lg-6 col-12 px-0 " : "col-12 px-0"} >
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
                                            <div className="overlay">
                                                <span className="icon">
                                                    <FaEdit className='cool-btn' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                </div>
                            </div>

                            <div className="row mt-3 px-4 mx-0">
                                <form action="/" method="post">
                                    <div className="d-flex align-items-center adjust-form">
                                        <div className='row'>
                                            <div className='col-lg-12 col-12 mt-4 mt-0'>
                                                <label htmlFor="nickname">Nickname</label>
                                                <input type="text" className="form-control" id="nickname" placeholder="@daniel" />
                                            </div>

                                            <div className='col-lg-12 col-12 mt-4 mt-0'>
                                                <textarea name="" id="bioProfile" cols="30" rows="5" className='form-control border-area' placeholder='Update Bio'></textarea>
                                            </div>

                                            <div className='col-lg-12 col-12 mt-4 mt-0'>
                                                <button className='btn btn-success float-right'>Submit</button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile