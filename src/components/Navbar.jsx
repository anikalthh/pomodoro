import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


function NavBar() {
    return (
        <Navbar className='Navbar'>
            <Container>
                <Navbar.Brand>by ANI</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="https://anikalthh.github.io">about creator <FontAwesomeIcon icon={solid("arrow-right")} /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;