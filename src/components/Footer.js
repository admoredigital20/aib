import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

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
                    <Col className="ft-link" md={{ span: 1, offset: 1 }}>
                        <p>About</p>
                        <p>Partners</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Community</p>
                    </Col>
                    <Col className="ft-link" md={{ span: 1, offset: 1 }}>
                        <p>About</p>
                        <p>Partners</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Community</p>
                    </Col>
                    <Col className="ft-link" md={{ span: 1, offset: 1 }}>
                        <p>More</p>
                        <p>Privacy</p>
                        <p>Security</p>
                        <p>Terms</p>
                    </Col>
                    <Col md={{ span: 2, offset: 1 }}>
                        <p>Our Office</p>
                        <p>Indonesia <br />Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881</p>
                        <p>Singapore <br />35 Mandalay Road 13–37 Mandalay Towers Singapore 308215</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
