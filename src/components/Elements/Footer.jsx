import React from 'react'

export default function Footer() {
    return (
        <div className='footer py-5 pb-3 px-l-lg-0 px-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 d-flex flex-column">
                        <img src={process.env.PUBLIC_URL + "assets/images/logo.png"} className='footer-logo' alt="" />
                        <p className='fs-7 text-faded pt-3 pe-3'>Lorem ipsum dummy dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="col-lg-3 pt-lg-0 pt-4 d-flex flex-column align-items-lg-center align-items-start">
                        <div className="d-flex  flex-column">
                            <span className='fw-600'>Lorem Ipsum</span>
                            <a href='' className='fw-600 fs-7 text-light text-faded py-2'>Home</a>
                            <a href='' className='fw-600 fs-7 text-light text-faded py-2'>Dummy</a>
                            <a href='' className='fw-600 fs-7 text-light text-faded py-2'>Home</a>
                            <a href='' className='fw-600 fs-7 text-light text-faded py-2'>Dummy</a>
                        </div>
                    </div>
                    <div className="col-lg-3 pt-lg-0 pt-4 d-flex flex-column align-items-lg-center align-items-start">
                        <div className="d-flex flex-column">
                            <span className='fw-600'>Lorem Ipsum</span>
                            <a href='' className='fw-600 fs-7 text-light text-faded py-2'>Home</a>
                            <a href='' className='fw-600 fs-7 text-light text-faded py-2'>Dummy</a>
                            <a href='' className='fw-600 fs-7 text-light text-faded py-2'>Home</a>
                            <a href='' className='fw-600 fs-7 text-light text-faded py-2'>Dummy</a>
                        </div>
                    </div>
                    <div className="col-lg-3 pt-lg-0 pt-4 d-flex flex-column">
                        <span>Socials</span>
                        <div className="d-flex col align-items-center pt-lg-0 pt-4">
                           <a href=""> <img src={process.env.PUBLIC_URL+"assets/images/twitter.png"}  className='me-3' style={{width:"48px"}} alt="" /></a>
                           <a href=""> <img src={process.env.PUBLIC_URL+"assets/images/facebook.png"} className='me-3' style={{width:"48px"}}  alt="" /></a>
                           <a href=""> <img src={process.env.PUBLIC_URL+"assets/images/discord.png"} className='me-3' style={{width:"48px"}}  alt="" /></a>
                           <a href=""> <img src={process.env.PUBLIC_URL+"assets/images/twitter.png"} className='me-3' style={{width:"48px"}}  alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-4 pt-4 d-flex justify-content-between  flex-lg-row flex-column align-items-center">
                <span className='fs-7 text-faded'>©2020 MiniX, all rights reserved.</span>
                <span className='fs-7 text-faded'>Terms & Conditions  I  Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}
