
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import Footer from './Footer';
import HomeSlider from './HomeSlider';
import Navbar1 from './Navbar';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { help, helpList, listBootcamp } from '../actions/generalAction';
import { webinarCourse } from '../actions/webinarAction';
import CourseDiv from './CourseDiv';
var FontAwesome = require('react-fontawesome')



const Home = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')


    const bootcampList = useSelector(state => state.bootcampList)
    const { loading: bootcampLoading, error: bootcampError, bootcamps } = bootcampList

    const webinarList = useSelector(state => state.webinarList)
    const { loading: webinarLoading, error: webinarError, webinar } = webinarList

    const help = useSelector(state => state.help)
    const { loading: loadingHelp, error: errorHelp, helpQuery } = help

    console.log(bootcamps);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listBootcamp())
        dispatch(webinarCourse())
    }, [dispatch])


    useEffect(() => {
        console.log(bootcamps);
    }, [])


    // How we work

    var hww1 = "Select from the best available course from a list of free or paid, Get enrolled to a batch to get started"
    var hww2 = "white"
    var hww3 = "black"
    var hww4 = "green"
    var hww5 = "red"

    const [hwwContent, setHwwContent] = useState(`${hww1}`)
    const contentHandler = (e) => {
        setHwwContent(e);
    }

    const helpHandler = (e) => {
        e.preventDefault()
        dispatch(helpList(name, email, query))
        setName('')
        setQuery('')
        setEmail('')
        console.log(helpQuery, 'help');
    }

    var hwwImg1 = "../assets/img/hww-b-w (1).png"
    var hwwImg12 = "../assets/img/hww-clr (1).png"

    var hwwImg2 = "../assets/img/hww-b-w (2).png"
    var hwwImg22 = "../assets/img/hww-clr (2).png"

    var hwwImg3 = "../assets/img/hww-b-w (3).png"
    var hwwImg32 = "../assets/img/hww-clr (3).png"

    var hwwImg4 = "../assets/img/hww-b-w (4).png"
    var hwwImg42 = "../assets/img/hww-clr (4).png"

    var hwwImg5 = "../assets/img/hww-b-w (5).png"
    var hwwImg52 = "../assets/img/hww-clr (5).png"

    const [hwwImgState, setHwwImg] = useState(hwwImg1)
    const [hwwImgState2, setHwwImg2] = useState(hwwImg2)
    const [hwwImgState3, setHwwImg3] = useState(hwwImg3)
    const [hwwImgState4, setHwwImg4] = useState(hwwImg4)
    const [hwwImgState5, setHwwImg5] = useState(hwwImg5)

    const imgHandler = () => {
        setHwwImg(hwwImg12)
    }
    const imgHandlerout = () => {
        setHwwImg(hwwImg1)
    }

    const imgHandler2 = () => {
        setHwwImg2(hwwImg22)
    }
    const imgHandlerout2 = () => {
        setHwwImg2(hwwImg2)
    }

    const imgHandler3 = () => {
        setHwwImg3(hwwImg32)
    }
    const imgHandlerout3 = () => {
        setHwwImg3(hwwImg3)
    }

    const imgHandler4 = () => {
        setHwwImg4(hwwImg42)
    }
    const imgHandlerout4 = () => {
        setHwwImg4(hwwImg4)
    }

    const imgHandler5 = () => {
        setHwwImg5(hwwImg52)
    }
    const imgHandlerout5 = () => {
        setHwwImg5(hwwImg5)
    }




    return (
        <>
            <Navbar1 />
            <div className="main">
                <section className="header1" style={{ backgroundImage: "url(" + "../assets/img/header1.png" + ")" }} >
                    <div className="header1-container">
                        <Container>
                            <Row>
                                <Col md={6} className="header-details">
                                    <h1>Empower Your Learning <br />and Upskill for Data Science, <br />Machine Learning, and <br />AI Career Path</h1>
                                    <Row>
                                        <Col md={9}>
                                            <p>Learn from the best. Experienced online educators and comprehensive curriculum.</p>
                                            <p>Highest quality content in hands-on and project-based model delivered in online synchronous/asynchronous mode.</p>
                                            <Row className="header1-btn-grp">
                                                <Col className="header1-btn1">Find your course !</Col>
                                                <Col className="header1-btn2"><FontAwesome
                                                    className="header1-play-circle"
                                                    name="play-circle"
                                                    size="3x"
                                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                                /></Col>
                                                <Col className="header1-btn3">Play Demo</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col><img className="header1-img" src="../assets/img/header1-img1.png" alt="ai brilliance header zoom image" /></Col>
                            </Row>
                        </Container>
                        <Row className="ai-op">
                            <img src="../assets/img/ai-op.svg" alt="ai brilliance" />
                        </Row>
                    </div>
                </section>
                <CourseDiv />

                <section>
                    <Container className="sec3">
                        <Row>
                            <Col className="sec3-heading">
                                <h2>Upcoming Bootcamp</h2>
                            </Col>
                        </Row>
                        <Row className="upcoming-bc-grp">
                            {bootcampLoading ? <LoadingBox></LoadingBox> :
                                bootcampError ? <MessageBox varinat='danger'>{bootcampError}</MessageBox>
                                    :
                                    <>{bootcamps.results.data.slice(0, 2).map(data => {
                                        return (

                                            <Col key={data.id} md={6} sm={12}>
                                                <div className="upcoming-bc" style={{ backgroundImage: "url(" + data.image + ")" }}>
                                                    <div className="ub-bg-overlay">
                                                        <Row className="ub-details">
                                                            <Col>
                                                                <h4>{data.name} </h4><h6>{data.sub_name}</h6>
                                                            </Col>
                                                            <Col className="txt-r8">
                                                                <Row className="ub-price">{data.price > 0 ? ("$" + data.price) : ("Free")}</Row>
                                                                <Row className="ub-date">{data.date}</Row>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })}

                                    </>
                            }

                        </Row>
                    </Container>
                </section>
                <section className="sec4">
                    <Container>
                        <Row>
                            <Col md="3">
                                <h3>What makes us Different</h3>
                                <Button className="btn-blue">Read About Us</Button>
                            </Col>
                            <Col md="3">
                                <div className="sec4-div">
                                    <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                    <Row><h5>Redefining Learning <br />With Light-board</h5></Row>
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
                            <Col md="3">
                                <div className="sec4-div">
                                    <Row><img className="icon" src="../assets/img/sec4-img-icon1.svg" alt="Redefining Learning With Light-board" /></Row>
                                    <Row><h5>Domain-specific <br />capstone project</h5></Row>
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
                            <Col md="3">
                                <div className="sec4-div">
                                    <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                    <Row><h5>Small Group (5-25) <br />Focused Learning</h5></Row>
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
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container className="sec5">
                        <Row>
                            <Col md={4}>
                                <Row md={12}>
                                    <h3>The Coach & <br />Coding Enablers</h3>
                                </Row>
                                <Row md={12}>
                                    <p>The online education platform that empowers learning in every student and prepare them for data science, machine learning, and AI job market.</p>
                                </Row>
                                <Row>
                                    <img className="py-img" src="../assets/img/Icon-simple-python.svg" />
                                </Row>
                            </Col>
                            <Col md={{ span: 3, offset: 2 }} className="sec5-div2">
                                <h6 className="sec5-coach">COACH</h6>
                                <img src="../assets/img/brain-ai.svg" />
                                <p>The Coach teach you what you need to learn, He will also guide you to your right path</p>
                            </Col>
                            <Col md={3}>
                                <img className="r-p-img" src="../assets/img/rahul-pink.png" alt="rahul rai" />
                                <LinkContainer to="/learnmore"><Button className="btn-blue sec5-btn">Read About Us</Button></LinkContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className="sec5-div3">
                                <p><strong>Coding Enablers’</strong> will be your teaching assistant, who will help you through the matrix on to the coding world</p>
                            </Col>
                            <Col md={{ span: 5, offset: 4 }} sm={10}><img src="../assets/img/theCoach4.png" width="100%" /></Col>
                        </Row>
                        <Row className="sec5-div4">
                            <Col>
                                <h6>Environment <br />Setup</h6>
                            </Col>
                            <Col>
                                <h6>Coding <br />Tutorials</h6>
                            </Col>
                            <Col>
                                <h6>2 hr weekly <br />Coding support</h6>
                            </Col>
                            <Col>
                                <h6>Domain Specific <br />Capstone Project</h6>
                            </Col>
                        </Row>
                        <Row className="sec5-coding">CODING ENABLERS</Row>
                    </Container>
                </section>
                <section className="sec6">
                    <Container>
                        <Row>
                            <h2>How We Work ?</h2>
                        </Row>
                        <Row>
                            <Col><img onMouseOver={() => { contentHandler(hww1); imgHandler(); }} onMouseOut={imgHandlerout} className="hww-img" src={hwwImgState} /></Col>
                            <Col><img onMouseOver={() => { contentHandler(hww2); imgHandler2(); }} onMouseOut={imgHandlerout2} className="hww-img" src={hwwImgState2} /></Col>
                            <Col><img onMouseOver={() => { contentHandler(hww3); imgHandler3(); }} onMouseOut={imgHandlerout3} className="hww-img" src={hwwImgState3} /></Col>
                            <Col><img onMouseOver={() => { contentHandler(hww4); imgHandler4(); }} onMouseOut={imgHandlerout4} className="hww-img" src={hwwImgState4} /></Col>
                            <Col><img onMouseOver={() => { contentHandler(hww5); imgHandler5(); }} onMouseOut={imgHandlerout5} className="hww-img" src={hwwImgState5} /></Col>
                        </Row>
                        <Row><p className="hww-p">{hwwContent}</p></Row>
                    </Container>
                </section>
                <section className="sec7">
                    <Container>
                        <Row>
                            <Col md={4} className="std-feedback">
                                <Row><h4>Student <br />Feedbacks.</h4></Row>
                                <Row><p>Our Students are proudly rendering <br />their service in the following companies</p></Row>
                                <br />
                                <Row><Col><Button className="btn-blue sec5-btn">Join the Gang</Button></Col></Row>
                            </Col>
                            <Col md={{ offset: 1 }} >
                                <Row className="review-row">
                                    <div className="review-1">
                                        <p className="review-p">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn.</p>
                                        <Row className="prof-details">
                                            <Col className="col-pd-0 mw-mc">
                                                <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                            </Col>
                                            <Col className="col-pd-0">
                                                <Row>
                                                    <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                    <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="review-2">
                                        <p className="review-p">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn.</p>
                                        <Row className="prof-details">
                                            <Col className="col-pd-0 mw-mc">
                                                <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                            </Col>
                                            <Col className="col-pd-0">
                                                <Row>
                                                    <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                    <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="review-1">
                                        <p className="review-p">The ultimate learning experience with AIBrilliance,</p>
                                        <Row className="prof-details">
                                            <Col className="col-pd-0 mw-mc">
                                                <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                            </Col>
                                            <Col className="col-pd-0">
                                                <Row>
                                                    <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                    <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Row>
                            </Col>
                            <Col>
                                <div className="rev-half">
                                </div>
                                <div className="review-2">
                                    <p className="review-p">The ultimate learning experience with AIBrilliance,</p>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="review-1 review-vid" style={{ backgroundImage: "url(" + "../assets/img/course1.jpg" + ")" }}>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="review-1">
                                    <p className="review-p">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn.</p>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>

                                <div className="review-1">
                                    <p className="review-p">The ultimate learning experience with AIBrilliance,</p>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="review-2">
                                    <p className="review-p">The ultimate learning experience with AIBrilliance,</p>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="review-1">
                                    <p className="review-p">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn.</p>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
                                                <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="sec8">
                        <Row><p className="sec8-p">Where students whom I have taught datascience and machine learning are working:</p></Row>
                        <Row className="sec8-logo">
                            <Col>
                                <img src="../assets/img/brand5.jpg" />
                            </Col>
                            <Col>
                                <img src="../assets/img/brand4.jpg" />
                            </Col>
                            <Col>
                                <img src="../assets/img/brand3.jpg" />
                            </Col>
                            <Col>
                                <img src="../assets/img/brand2.jpg" />
                            </Col>
                            <Col>
                                <img src="../assets/img/brand1.jpg" />
                            </Col>

                        </Row>
                    </Container>
                </section>
                <section className="sec9">
                    <HomeSlider />
                </section>
                <section className="sec10">
                    <Container>
                        <Row><h2 className="sec10-h2">Webinars</h2></Row>
                        <Row className="justify-content-md-center">
                            <Col className="sec10-btn">
                                <Button className="btn-white">All</Button>
                                <Button className="btn-blue">Upcoming</Button>
                                <Button className="btn-white">Past</Button>
                            </Col>
                        </Row>
                        <Row className="web-img-grp">
                            {
                                webinarLoading ? (<LoadingBox></LoadingBox>) :
                                    webinarError ? (<MessageBox>{webinarError}</MessageBox>) :

                                        webinar.results.data.map(web => {
                                            return (
                                                <Col md={6} lg={3} className="web-main-content">
                                                    <h6>15th AUG 21, 11:00 EST</h6>
                                                    <h4>{web.name}<br/>{web.sub_name}</h4>
                                                    <img className="webinar-img" src={web.image} />
                                                </Col>
                                            )
                                        }

                                        )


                            }

                        </Row>
                    </Container>
                </section>
                <section className="sec11">
                    <Container>
                        <Row><h2 className="sec11-h2">Media Gallery</h2></Row>
                        <Row>
                            <Col className="sec11-details" md={6}>
                                <Row className="sec11-para">
                                    <h2>Corporate Training & Talent Partner Program</h2>
                                    <p>Duration - 120 mins</p>
                                    <br />
                                    <Col md={10}>
                                        <p>High quality corporate data science and machine learning programs for upskilling the workforce are hard to find! We can deliver both in-person and online specialized courses to upskill corporate teams at specialized corporate rates.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <img className="mg-main-img" src="../assets/img/mg (4).png" />
                                <img className="sec11-play-img" src="../assets/img/play-btn.png" />
                            </Col>
                        </Row>
                        <Row className="mg-all-vid">
                            <Col md={4}>
                                <div className="mg-sgt-vid">
                                    <img src="../assets/img/mg (1).png" />
                                    <div className="sec11-div-play">
                                        <img className="sec11-play-btn-in" src="../assets/img/play-btn.png" />
                                    </div>
                                    <Col md={8}>
                                        <h5>Corporate Training & Talent Partner Program</h5>
                                    </Col>
                                    <p>Duration - 120 mins</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mg-sgt-vid">
                                    <img src="../assets/img/mg (2).png" />
                                    <div className="sec11-div-play">
                                        <img className="sec11-play-btn-in" src="../assets/img/play-btn.png" />
                                    </div>
                                    <Col md={8}>
                                        <h5>Empowering Women in Data Science</h5>
                                    </Col>
                                    <p>Duration - 120 mins</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mg-sgt-vid">
                                    <img src="../assets/img/mg (3).png" />
                                    <div className="sec11-div-play">
                                        <img className="sec11-play-btn-in" src="../assets/img/play-btn.png" />
                                    </div>
                                    <Col md={8}>
                                        <h5>Experienced Teaching
                                            Policies</h5>
                                    </Col>
                                    <p>Duration - 120 mins</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="sec12">
                    <Container className="sec12-container">
                        <Row>
                            <Col md={{ span: 3, offset: 1 }} className="sec12-help"><h3>How Can We <br />Help You ?</h3></Col>
                            <Col md={{ offset: 1 }}>
                                <form onSubmit={helpHandler}>
                                    <Row>
                                        <Col><p className="sec12-p">Your Name is <input type="text" id='name' placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> and</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p className="sec12-p">you would like to be reached at <input type="email" id='email' placeholder="enter email id" value={email} onChange={(e) => setEmail(e.target.value)} /></p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p className="sec12-p">I have a query on <input type="text" id='query' placeholder="enter your query" value={query} onChange={(e) => setQuery(e.target.value)} />
                                            <button type="submit"><FontAwesome
                                                className="lp-form-arrow"
                                                name="arrow-circle-right"
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                                            /></button></p></Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        </>
    );
}

export default Home;