import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Footer from './Footer';
import Navbar1 from './Navbar';

function AboutUs() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Navbar1 />

            <section className="header2 about-us-header" style={{ backgroundImage: "url(" + "../assets/img/aboutus.png" + ")" }} >
                <div className="header1-container">
                    <Container>
                        <Row className='about-us'>
                            <Col md={5}>
                                <h1>We are <span style={{ color: "#43abfb" }}> on a Mission </span>to Empower Your Learning</h1>
                            </Col>
                            <Col md={{offset:1,span:6}}>
                            <img src="../assets/img/mg (4).png" alt="" />
                           </Col>

                        </Row>
                    </Container>
                </div>
            </section>

            <section className=''>
                <div className='about-us-2'>
                    <Container>
                        <Row>
                          <Col className='about-us-2-blue' md={{ span: 5 }}>
                            <h2>Mission</h2>
                            <p>AIBrilliance’s mission is to deliver high-quality data science, machine learning, and AI education content at affordable prices to empower learners worldwide to upskill themselves.</p>
                         </Col>
                        <Col md={{offset:1,span:4}}>
                            <img src="../assets/img/mg (3).png" alt="" />
                        </Col>
                        </Row>
                    </Container>
                </div>
            </section>


            <section className='about-us-3'>
                <Container>
                    <Row className='about-us-3-row'>
                        <Col md={3}>
                            <h1>What makes us Different</h1>
                        </Col>
                        <Col md={9} className='about-us-3-padding'>
                            <Row>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="sec4-div">
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Safe and Secure<br />No Fee Traps</h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                                <p>See How <br />Lightboard <br />Works</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                <img className="sec4-img2" src="../assets/img/sec4-img1.png" alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="sec4-div">
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon1.svg" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Certificate and <br />Reference Guarantee </h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                                <p>See How <br />Lightboard <br />Works</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                <img className="sec4-img2" src="../assets/img/sec4-img3.png" alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="sec4-div">
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>1 to 1 Personalized
                                            <br />Education</h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                                <p>See How <br />Lightboard <br />Works</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                <img className="sec4-img2" src="../assets/img/sec4-img5.png" alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="sec4-div">
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Redefining Learning
                                            <br />With Light-board</h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                                <p>See How <br />Lightboard <br />Works</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                <img className="sec4-img2" src="../assets/img/sec4-img2.png" alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="sec4-div">
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Domain-specific
                                            <br />capstone project</h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                                <p>See How <br />Lightboard <br />Works</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                <img className="sec4-img2" src="../assets/img/sec4-img.png" alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="sec4-div">
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Small Group (5-25)
                                            <br />Focused Learning </h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                                <p>See How <br />Lightboard <br />Works</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                <img className="sec4-img2" src="../assets/img/sec4-img6.png" alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </Container>
            </section>


            <section className='about-us-4' style={{ backgroundImage: "url(" + "../assets/img/rahul-abt.png" + ")" }}>
                <Container>
                    <Row >
                        <Col className='about-us-4-h1' md={4} sm={6}>
                             <h1>Dr. Rahul Rai</h1>
                             <p>CEO and Founder of AIBrilliance</p>
                             <LinkContainer to="/learnmore"><Button className="btn-blue btn-white sec5-btn"><span className='sec4-btn-tiltle'>Learn More</span> <img className='sec4-img' src='../assets/img/right.png'></img></Button></LinkContainer>
                        </Col>
                        <Col className='about-us-4-img' md={{offset:3,span:3}} sm={6}>
                           <img src="../assets/img/learn-more-bw.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='about-us-5'>
                <Container>
                    <Row>
                        <Col md={{offset:1,span:3}}>
                            <h1> <span>21,500+</span>  <br /> Happy Students</h1>
                        </Col>
                        <Col md={{offset:1,span:3}}>
                           <h1><span>360+</span><br /> Hrs. of content </h1>
                        </Col>
                        <Col md={{offset:1,span:3}}>
                          <h1><span>21,500</span>+<br />Community</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
  
             <Footer/>
        </div>
    )
}

export default AboutUs
