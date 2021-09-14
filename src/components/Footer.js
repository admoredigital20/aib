import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="ft-div">
            <Container className="ft-container">
                <Row>
                    <Col md={3}>
                        <img className="logo ft-logo" src="../assets/img/main-logo.svg" alt="ai brilliance logo" />
                        <p className="ft-follow">Follow us on </p>
                        <div>
                            <a href="https://www.facebook.com/AIBrilliance"><FontAwesome
                                name="facebook-square"
                                size="2x"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                            <a href="https://www.instagram.com/ai_brilliance/"><FontAwesome
                                name="instagram"
                                size="2x"
                                href=''
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                            <a href="https://twitter.com/?lang=en"><FontAwesome
                                name="twitter"
                                size="2x"
                                href=''
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                            <a href="https://www.linkedin.com/company/aibrilliance/"><FontAwesome
                                name="linkedin"
                                size="2x"
                                href=''
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                           
                        </div>
                    </Col>
                    <Col className="ft-link" md={{ span: 2 }}>
                    <Link to='/'>    <p>Home</p> </Link>
                    <Link to='/bootcamp'>   <p>Bootcamps</p> </Link>
                     <Link t0='#'>    <p>Events</p>  </Link>
                    
                    </Col>
                    <Col className="ft-link" md={{ span: 2,  }}>
                      <p>About Us</p> 
                       <p>Contact Us</p> 
                     <p>Hire Our Students</p> 
                      
                    </Col>
                    <Col className="ft-link" md={{ span: 2,  }}>
                     <p>Scholarships</p> 
                      <p>Women in Data Science</p>
                     <p>Veterans</p> 
                        <p>Employer Tuition Assistance</p> 
                     <p>Corporate Training Discount</p>
                    </Col>
                    <Col md={{ span: 2, offset: 1 }}>
                        <p>Our Office</p>
                        <p>FREMONT <br />39152 Guardino Dr, <br/> Fremont, 94538, United States</p>
                        <p>CHARLOTTE <br />601 Beauhaven Ln, <br/> Waxhaw, 28173, United States </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
