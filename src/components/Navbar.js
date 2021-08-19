import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, Modal, Button, Form, Row, Col } from "react-bootstrap"

const Navbar1 = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

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
                        <Button className="signin-nav" onClick={handleShow}>
                            Sign In
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>



            <Modal className="si-m" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="wel-back">Welcome Back!</h4><p className="new-to">New to AI Brilliance ? <a className="creat-ac-link" onClick={() => { handleShow1(); handleClose(); }}>Create an account</a></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email or phone number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <p className="new-to"><a className="frg-pass" onClick={() => { handleShow2(); handleClose(); }}>Forgot Password ?</a></p>
                    </Form>
                    <Button className="signin-btn">
                        Sign In
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Row className="mdl-footer-row1">
                        <Col className="mdl-footer-1"></Col>
                        <Col md={6}><p className="mdl-footer-p">or continue with</p></Col>
                        <Col className="mdl-footer-1"></Col>
                    </Row>
                    <Row className="mdl-social-grp">
                        <Col md={4} xs={4}><img className="mdl-footer-social" src="../assets/img/Google-logo.png" alt="google logo" /></Col>
                        <Col md={4} xs={4}><img className="mdl-footer-social" src="../assets/img/Google-logo.png" alt="google logo" /></Col>
                        <Col md={4} xs={4}><img className="mdl-footer-social" src="../assets/img/Google-logo.png" alt="google logo" /></Col>
                    </Row>
                </Modal.Footer>
            </Modal>



            <Modal className="si-m" show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="wel-back">Create an account</h4><p className="new-to">Create Brilliant Learning Pathways</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email or phone number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Create Password" />
                        </Form.Group>
                        <p className="new-to">Password must be at least 8 characters long. </p>
                    </Form>
                    <Button className="signin-btn">
                        Sign In
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Row className="mdl-footer-row1">
                        <Col className="mdl-footer-1"></Col>
                        <Col md={6}><p className="mdl-footer-p">or continue with</p></Col>
                        <Col className="mdl-footer-1"></Col>
                    </Row>
                    <Row className="mdl-social-grp">
                        <Col md={4} xs={4}><img className="mdl-footer-social" src="../assets/img/Google-logo.png" alt="google logo" /></Col>
                        <Col md={4} xs={4}><img className="mdl-footer-social" src="../assets/img/Google-logo.png" alt="google logo" /></Col>
                        <Col md={4} xs={4}><img className="mdl-footer-social" src="../assets/img/Google-logo.png" alt="google logo" /></Col>
                    </Row>
                    <Row>
                        <p className="recaptcha1">By signing up you agree to AIBrilliance Terms of Service and Privacy Policy. This page is protected by reCAPTCHA and is subject to Google’s Terms of Service and Privacy Policy.</p>
                    </Row>
                </Modal.Footer>
            </Modal>



            <Modal className="si-m" show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="wel-back">Forgot Password</h4><p className="new-to">Enter the email or phone number used to
                            create the account.</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email or phone number" />
                        </Form.Group>
                    </Form>
                    <Button className="signin-btn" onClick={() => { handleShow3(); handleClose2(); }} >
                        Reset Now
                    </Button>
                </Modal.Body>

            </Modal>


            <Modal className="si-m" show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="wel-back">Reset Password</h4><p className="new-to">Enter the OTP received on email or phone number</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col className="otp-input otp-input-left">
                                <Form.Control className="otp-input-inside" />
                            </Col>
                            <Col className="otp-input">
                                <Form.Control />
                            </Col>
                            <Col className="otp-input">
                                <Form.Control />
                            </Col>
                            <Col className="otp-input">
                                <Form.Control />
                            </Col>
                            <Col className="otp-input">
                                <Form.Control />
                            </Col>
                            <Col className="otp-input otp-input-right">
                                <Form.Control />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="New Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Re-enter Password" />
                        </Form.Group>
                    </Form>
                    <Button className="signin-btn">
                        Submit
                    </Button>
                </Modal.Body>
            </Modal>
        </Navbar>

    );
}

export default Navbar1;