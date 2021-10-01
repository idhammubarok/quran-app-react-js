import React, { Fragment } from 'react'
import { Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavbarComponent=()=>{
    return(
        <Fragment>
            <Navbar expand="sm" variant="light" bg="light" fixed="top">
                <Container>
                    <Navbar.Brand><Link to="/" className="text-decoration-none text-dark"><strong>Quran Mu</strong></Link></Navbar.Brand>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavbarComponent