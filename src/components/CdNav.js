import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, Modal, Button, Form, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { register, signin, signout } from '../actions/userAction';
import { Link, Redirect } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Signin from './Signin';


const CdNav = (props) => {







    return (
        <Navbar expand="lg" className="nav2">
            <Container>
                <LinkContainer to="/"><img className="logo" src="../assets/img/main-logo-black.png" alt="ai brilliance logo" /></LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/bootcamp"><Nav.Link>Bootcamp</Nav.Link></LinkContainer>
                        <LinkContainer to="/literature"><Nav.Link>Literature</Nav.Link></LinkContainer>
                        <Signin/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
}

export default CdNav;