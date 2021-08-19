import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import Footer from './Footer'
import Navbar1 from './Navbar'

export default function LearnMore() {
    return (
        <div className="lm">
            <Navbar1 />
            <div className="lm-header" style={{ backgroundImage: "url(" + "../assets/img/lm-header.png" + ")" }}>
                <div className="lm-all-rows">
                    <Row className="justify-content-md-center">
                        <Col md={3}>
                            <img className="lm-header-img" src="../assets/img/rahul-blue1.png" />
                        </Col>

                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md={4} ><h1 className="lm-header-h1">Hello, I am Dr. Rahul Rai</h1></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="lm-header-h5" md={5}><h5>Dean’s Distinguished Professor at Clemson University Greenville, South Carolina, United States</h5></Col>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-md-center lm2">
                <Col md={8} className="lm2-col">
                    <Row>
                        <Col><p className="lm2-p1">He directs the Geometric Reasoning and Artificial Intelligence Lab (GRAIL). He earned his doctoral degree in Mechanical Engineering from The University of Texas at Austin USA in 2006 in sequential sampling that is popularly known as “Active Learning” in the machine learning domain. </p></Col>
                    </Row>
                    <Row>
                        <Col><p className="lm2-p2">Data Science & Machine Learning | Artificial Intelligence | Diagnostics & Prognostics | Computer Vision & Autonomous Systems | Digital Manufacturing
                            & Design | Geometric & Shape Reasoning | AR/VR/XR | Applied Ontology</p></Col>
                    </Row>
                </Col>
            </Row>
            <Row className="lm3-div">
                <Row className="lm3">
                    <Col md={1} xs={4} className="lm3-img">
                        <img src="../assets/img/courseraimg.webp" />
                    </Col>
                    <Col md={11} xs={8} className="lm3-content">
                        <Row>
                            <Col><h2>He has also curated and delivered two online courses at Coursera</h2></Col></Row>
                        <Row>
                            <Col>
                                <h4>21,500 + Students</h4>
                                <p className="lm3-course">Course:</p>
                                <h6>Intelligent Machining</h6>
                                <div className="icon-div">
                                    <FontAwesome
                                        className="play-circle"
                                        name="play-circle"
                                        size="2x"
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                                    <h6>Course Preview</h6></div>
                            </Col>
                            <Col>
                                <h4>21,500 + Students</h4>
                                <p className="lm3-course">Course:</p>
                                <h6>Intelligent Machining</h6>
                                <div className="icon-div">
                                    <FontAwesome
                                        className="play-circle"
                                        name="play-circle"
                                        size="2x"
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                                    <h6>Course Preview</h6></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <Footer/>
        </div >
    )
}
