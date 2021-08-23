import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, Modal, Button, Form, Row, Col } from "react-bootstrap"
import Signin from './Signin';

const Navbar1 = () => {


    return (
        <Navbar expand="lg" className="nav1">
            <Container>
                <LinkContainer to="/"><img className="logo" src="../assets/img/main-logo.svg" alt="ai brilliance logo" /></LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/bootcamp"><Nav.Link>Bootcamp</Nav.Link></LinkContainer>
                        <LinkContainer to="/literature"><Nav.Link>Literature</Nav.Link></LinkContainer>
                        <LinkContainer to="/events"><Nav.Link>Events</Nav.Link></LinkContainer>
                        <LinkContainer to="/aboutus"><Nav.Link>About Us</Nav.Link></LinkContainer>
                        <Signin/>
                    </Nav>
                </Navbar.Collapse>
            </Container>



            
        </Navbar>

    );
}

export default Navbar1;