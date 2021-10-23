import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from "react-bootstrap"
import Signin from './Signin';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom'



const CdNav = (history) => {

   
   
    const getclr=(curr)=>{
        if(history.location.pathname === curr){          
            return "#43abfb"
            
                    
        }
    }

    let history1=useHistory();


    const onTop = () => {
            //  let history = useHistory
            history1.push('/')
            window.scrollTo(0, 5350);
    }


    return (
        <Navbar expand="lg" className="nav2">
            <Container>
                <LinkContainer to="/"><img className="logo" src="../assets/img/main-logo-black.png" alt="ai brilliance logo" /></LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav no" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto cdnav2">
                        <LinkContainer style={{backgroundColor:getclr('/')}} to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer style={{color: getclr('/fullcourse')}} to="/fullcourse"><Nav.Link>Bootcamp</Nav.Link></LinkContainer>
                        <LinkContainer   to="#" onClick={onTop}><Nav.Link>Events</Nav.Link></LinkContainer>
                        <LinkContainer   to="/aboutus"><Nav.Link>About Us</Nav.Link></LinkContainer>
                        <LinkContainer  style={{color: getclr('/faq')}} to="/faq"><Nav.Link>FAQ</Nav.Link></LinkContainer>
                        <Signin/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
}

export default withRouter(CdNav);