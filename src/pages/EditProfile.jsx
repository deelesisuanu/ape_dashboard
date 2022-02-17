import React, { useState, useEffect, useContext } from 'react'
import { Avatar, Cover, ImgFlex } from '../components/styles/profile'
import Modal from '../components/Modal'
import { AiFillEdit } from 'react-icons/ai'
import { ToggleContext } from '../contexts/ToggleContext'

const EditProfile = () => {

    const { toggle, setToggle } = useContext(ToggleContext)

    const [state, setState] = useState(1);

    const handleNavToggle = () => {
        setToggle((toggle) ? false : true)
    }

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        setState(1);
    }, [])

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const reactCompImages = () => {
    }

    /* const [cover, setCover] = useState();
    const [avatar, setAvatar] = useState();

    const handleCover = (e, onChange) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);
        reader.onloadend = () => {
            setCover(reader.result);
            onChange(file);
        };
    };

    const handleAvatar = (e, onChange) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);
        reader.onloadend = () => {
            setAvatar(reader.result);
            onChange(file);
        };
    }; */

    useEffect(() => {
        setState(1)
    }, [])

    const handleSubmit = async (data) => { }

    return (
        <>
            <div className={state === 1 ? "col-lg-6 col-12 px-0 " : "col-12 px-0"} >
                <div className="row pt-3 mx-0" onClick={handleNavToggle}>
                    <div className="col-lg-12 col-12 pt-3 px-4 order-lg-1 order-2">
                        <div className="card p-3 base-card curve-card off-border-q">
                            <form onSubmit={handleSubmit}>
                                {/* <Cover
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundImage: `url(assets/images/ape.png)`,
                                        backgroundSize: "cover",
                                    }}
                                    className="cursor-on"
                                    onClick={handleOpenModal}
                                >
                                </Cover> */}
                                <ImgFlex className="cursor-on over-avatar" onClick={handleOpenModal}>
                                    <Avatar backgroundImage="assets/images/ape.png" bg="white" className='custom-profile-image' />
                                    <div className="edit">
                                        <AiFillEdit className='cool-btn' />
                                    </div>
                                    {/* <div className="avater-1 mt-4">
                                        <img src="assets/images/hex.png" className='hex' alt="" />
                                        <img src="assets/images/ape.png" className='profile' alt="" />
                                    </div> */}
                                </ImgFlex>

                                <div className="d-flex align-items-center adjust-form">
                                    <div className='row'>
                                        <div className='col-lg-12 col-12 mt-4 mt-0'>
                                            <label htmlFor="nickname">Nickname</label>
                                            <input type="text" className="form-control" id="nickname" placeholder="@daniel" />
                                        </div>

                                        <div className='col-lg-12 col-12 mt-4 mt-0'>
                                            <label htmlFor="bioProfile">Bio</label>
                                            <textarea name="" id="bioProfile" cols="30" rows="5" className='form-control border-area' placeholder='Update Bio...'></textarea>
                                        </div>

                                        <div className='col-lg-12 col-12 mt-4 mt-0'>
                                            <button className='btn btn-success float-right customise-button'>Submit</button>
                                        </div>

                                    </div>
                                </div>

                            </form>

                            <Modal
                                title="Choose Image"
                                children={reactCompImages}
                                onClose={closeModal}
                                currentState={(modalOpen) ? "show" : "hide"}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile