import React, { useState, useEffect, useContext } from 'react'
import Notification from '../components/Notification'
import { ToggleContext } from '../contexts/ToggleContext'

const NotFound = () => {

    const [state, setState] = useState(1);

    useEffect(() => {
        setState(1);
    }, [])

    const { toggle, setToggle } = useContext(ToggleContext)

    const handleNavToggle = () => {
        setToggle((toggle) ? false : true)
    }

    return (
        <>
            <div className={state === 1 ? "col-lg-6 col-12 px-0 " : "col-12 px-0"} >
                <div className="row pt-3 mx-0" onClick={handleNavToggle}>
                    <div className="col-lg-12 col-12 pt-3 px-4 order-lg-1 order-2">
                        <div className="card p-3 base-card curve-card">
                            <p className='pt-2 fs-7 fw-500 '>
                                Page Not Found
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound