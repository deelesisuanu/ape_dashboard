import React, { useState, useEffect, useContext } from 'react'
import SinglePost from '../components/SinglePost'
import { AiOutlineSearch } from 'react-icons/ai'
import { ToggleContext } from '../contexts/ToggleContext'

const Search = props => {

    const [state, setState] = useState(1);

    useEffect(() => {
        setState(1);
    }, [])

    const [search, setSearch] = useState('');

    const handleUserSearchChange = event => {
        setSearch(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

    const { setToggle } = useContext(ToggleContext)

    const handleNavToggle = () => {
        setToggle(false)
    }

    return (
        <>
            <div className={state === 1 ? "col-lg-6 col-12 px-0 " : "col-12 px-0"} >
                {
                    search !== '' ?
                        <div className="row pt-3 mx-0">
                            <h2>You are searching for {search}</h2>
                        </div> : ""
                }
                <div className="row pt-3 mx-0" onClick={handleNavToggle}>
                    <div className="col-lg-12 col-12 pt-3 px-4 order-lg-1 order-2">

                        <div className="ws-search base-card">
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
                        {
                            search !== '' ?
                                <div>
                                    <SinglePost />
                                    <SinglePost />
                                </div>
                                : <div className='jumbotron'>
                                    <p>
                                        Please type to make search
                                    </p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search