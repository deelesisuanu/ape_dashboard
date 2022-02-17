import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const Modal = ({ title, children, onClose, currentState }) => {
    return (
        // <div className={`modal show`} style={{ display: 'block' }} >
        <div className={`modal ${currentState}`} >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <FaTimesCircle className="close circle-closed cursor-on" onClick={onClose} />
                        {/* <button type="button" className="close" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="img-container-grid">
                                <div className="smallsquare">
                                    <img src="https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg" className="img-grid-c" />
                                </div>
                                <div className="smallsquare">
                                    <img src="https://media.istockphoto.com/photos/view-of-sydney-harbour-australia-picture-id535455441?k=6&m=535455441&s=612x612&w=0&h=jVkW0bOqvffn2SzvUdncgkwHGScJRzak0oaQGij__h8=" className="img-grid-c" />
                                </div>
                                <div className="h_rectangle">
                                    <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-grid-c" />
                                </div>
                                <div className="smallsquare">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WnzXzbr2hiB8lPq3n_p5fnQdvOMc3Ouummyk11uVylX-7rtdXA" className="img-grid-c" />
                                </div>
                                <div className="bigsquare">
                                    <img src="https://thumbs-prod.si-cdn.com/N-_fU5xNOvR2T25teuPAdtGkBhY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/90/b2/90b2dfe5-a9ab-4821-9ccc-45ae1d52fa8a/blackholewithclouds_c-1-941x519.jpg" className="img-grid-c" />
                                </div>
                                <div className="bigsquare_blank">
                                    <div className="inner_square">
                                        <img src="https://www.w3schools.com/w3css/img_lights.jpg" className="img-grid-c" />
                                    </div>
                                    <div className="inner_square">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-oo8-jn28YVesncpNZ4cBHocvHtKLwzmpVDbq1k7KNa5jEiL" className="img-grid-c" />
                                    </div>
                                </div>
                                <div className="v_rectangle">
                                    <img src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-grid-c" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* <button className="btn btn-secondary" onClick={onClose}>Close</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal