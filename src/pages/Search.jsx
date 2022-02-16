import React, { useState, useEffect } from 'react'
import SinglePost from '../components/SinglePost'
import { useLocation } from "react-router-dom"

const Search = props => {

    const location = useLocation();
    const [state, setState] = useState(1);

    useEffect(() => {
        setState(1);
    }, [])

    return (
        <>
            <div className={state === 1 ? "col-lg-6 col-12 px-0 " : "col-12 px-0"} >
                <div className="row pt-3 mx-0">
                    <h2>You just searched for `{location.state.search}`</h2>
                </div>
                <div className="row pt-3 mx-0">
                    <div className="col-lg-12 col-12 pt-3 px-4 order-lg-1 order-2">
                        <SinglePost />
                        <SinglePost />
                        <SinglePost />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search