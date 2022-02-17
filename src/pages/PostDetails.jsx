import React, { useState, useEffect, useContext } from 'react'
import PostForm from '../components/PostForm';
import SinglePost from '../components/SinglePost'
import { ToggleContext } from '../contexts/ToggleContext'

const PostDetails = () => {

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
                        <SinglePost />

                        <PostForm action="Comment" placeholder="Add your comment" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetails