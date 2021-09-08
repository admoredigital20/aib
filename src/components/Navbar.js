import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, Modal, Button, Form, Row, Col } from "react-bootstrap"
import Signin from './Signin';

const Navbar1 = () => {

    const [logo, setLogo] = useState("../assets/img/main-logo.svg")

    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setLogo("../assets/img/main-logo-black.png")
        } else {
            setLogo("../assets/img/main-logo.svg")
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })


    return (
        <Navbar expand="lg" className="nav1">
            <Container>
                <LinkContainer to="/"><img className="logo" src={logo} alt="ai brilliance logo" /></LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/fullcourse"><Nav.Link>Bootcamp</Nav.Link></LinkContainer>
                        <LinkContainer to="/events"><Nav.Link>Events</Nav.Link></LinkContainer>
                        <LinkContainer to="/aboutus"><Nav.Link>About Us</Nav.Link></LinkContainer>
                        <Signin />
                    </Nav>
                </Navbar.Collapse>
            </Container>




        </Navbar>

    );
}

export default Navbar1;