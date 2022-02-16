import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useHistory ,Link } from 'react-router-dom'


export default function Header() {
    const history = useHistory();
    return (
        <>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand ><img src={process.env.PUBLIC_URL + "assets/images/logos.png"} alt="" onClick={()=>history.push('/')} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="col d-flex justify-content-between align-items-lg-center ">
                            <div className='d-flex col justify-content-center flex-lg-row flex-column algn-items-lg-center align-items-start '>
                                <Link to='' className='nav-link active' >Home</Link>
                                <Link to='' className='nav-link'   >About</Link>
                                <Link to='' className='nav-link'   >Rewards Dashboard</Link>
                                <Link to='' className='nav-link'   >Why Minix </Link>
                                <Link to='' className='nav-link'   >Tokenomics</Link>
                                <Link to='' className='nav-link'   >User Dashboard</Link>
                            </div>
                            <button className="btn-1">Buy now</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img src={process.env.PUBLIC_URL + "assets/images/bg.png"} class='bg-image' alt="" />
        </>
    )
}
