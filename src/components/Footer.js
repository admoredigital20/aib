import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useLocation, useHistory } from 'react-router-dom'
import ContactUs from './ContactUs';
import HireStudent from './HireStudent';
import { withRouter } from 'react-router';

const Footer = (history) => {

    const getclr = (curr) => {
        if (history.location.pathname == curr) {
            return "500"
        }

    }
    const getSize = (curr) => {
        if (history.location.pathname == curr) {
            return "1rem"
        }

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    let history1 = useHistory();
    const onTop = () => {
        if (history.location.pathname == '/') {
            window.scrollTo(0, 0);
        } else {
            //  let history = useHistory
            history1.push('/')
        }
    }
    const onTop2 = () => {
        if (history.location.pathname == '/fullcourse') {
            window.scrollTo(0, 0);
        } else {

            history1.push('/fullcourse')
        }
    }
    const onTop4 = () => {
        if (history.location.pathname == '/aboutus') {
            window.scrollTo(0, 0);
        } else {

            history1.push('/aboutus')
        }
    }

    const onTop3 = () => {
        if (history.location.pathname == '/') {
            window.scrollTo(5600, 5600);

        }
    }
    // const onTop=()=>{
    //     window.scrollTo(0,0);
    // }
    const slideTop = () => {
        window.scrollTo(4900, 4900)
    }
    return (
        <div className="ft-div">

            <Modal className="sec-10-modal sec-10-modal2" show={show} onHide={handleClose}>

                <Modal.Body>

                    <ContactUs state={handleClose} />
                </Modal.Body>

            </Modal>

            <Modal className="sec-10-modal sec-10-modal2" show={show2} onHide={handleClose2}>

                <Modal.Body>

                    <HireStudent state={handleClose2} />
                </Modal.Body>

            </Modal>
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
                        <p className='footer-bold'  style={{ fontWeight: getclr('/'), fontSize: getSize('/') }} onClick={onTop}>Home</p>
                        <p className='footer-bold'  style={{ fontWeight: getclr('/fullcourse'), fontSize: getSize('/fullcourse') }} onClick={onTop2}> Bootcamps</p>
                        <Link to='' onClick={onTop3}>    <p className='footer-bold' >Events</p>  </Link>

                    </Col>
                    <Col className="ft-link" md={{ span: 2, }}>
                        <p className='footer-bold' style={{ fontWeight: getclr('/aboutus'), fontSize: getSize('/aboutus') }} onClick={onTop4}>    About Us  </p >
                        <p className='footer-bold' onClick={handleShow}>Contact Us</p>
                        <p className='footer-bold' onClick={handleShow2}>Hire Our Students</p>

                    </Col>
                    <Col className="ft-link" md={{ span: 2, }}>
                        <p className='footer-bold' onClick={slideTop}>Scholarships</p>
                        <p onClick={() => { slideTop();}}>Women in Data Science</p>
                        <p onClick={slideTop}>Veterans GI Bill</p>
                        <p onClick={slideTop}>Employer Tuition Assistance</p>
                        <p onClick={slideTop}>Corporate Training Discount</p>
                    </Col>
                    <Col md={{ span: 2, offset: 1 }}>
                        <p>Our Office</p>
                        <p>FREMONT <br />39152 Guardino Dr, <br /> Fremont, 94538, United States</p>
                        <p>CHARLOTTE <br />601 Beauhaven Ln, <br /> Waxhaw, 28173, United States </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(Footer)