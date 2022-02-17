import React from 'react'

const Modal = ({ title, children, onClose, currentState }) => {
    return (
        // <div className={`modal show`} style={{ display: 'block' }} >
        <div className={`modal ${currentState}`} >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal