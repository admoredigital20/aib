
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalVideo from 'react-modal-video'
import AiSlider from './AiSlider';
import Webinar from './Webinar';
import MediaGallery from './MediaGallery';






var FontAwesome = require('react-fontawesome')





const Home = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')

    const [isOpen, setOpen] = useState(false)


    const bootcampList = useSelector(state => state.bootcampList)
    const { loading: bootcampLoading, error: bootcampError, bootcamps } = bootcampList

    // const webinarList = useSelector(state => state.webinarList)
    // const { loading: webinarLoading, error: webinarError, webinar } = webinarList

    const help = useSelector(state => state.help)
    const { loading: loadingHelp, error: errorHelp, helpQuery } = help

    console.log(bootcamps);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listBootcamp())
        // dispatch(webinarCourse())

    }, [dispatch])


    useEffect(() => {
        console.log(bootcamps);
    }, [])

    const userSignin = useSelector(state => state.userSignin)
    const { loading, error, userInfo } = userSignin


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





    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



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
                                                <Col className="header1-btn2">
                                                    <img src="../assets/img/play-btn.png" />
                                                </Col>
                                                <Col className="header1-btn3">Play Demo</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col><img className="header1-img" src="../assets/img/header1-img1.png" alt="ai brilliance header zoom image" /></Col>
                            </Row>

                        </Container>

                    </div>

                </section>
                <Row className="ai-op1">
                    <img src="../assets/img/ai-op.svg" alt="ai brilliance" />
                </Row>
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
                                    <>
                                        {bootcamps.results.data.slice(0, 2).map(data => {
                                            return (

                                                <Col key={data.id} md={6} sm={12}>
                                                    <div className="upcoming-bc" style={{ backgroundImage: "url(" + data.image + ")" }}>
                                                        <div className="ub-bg-overlay">
                                                            <Row className="ub-details">
                                                                <Col lg={8} md={8}>
                                                                    <h4>{data.name}: </h4><h6>{data.sub_name}</h6>
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
                            <Col md="3" className="make-us-diff">
                                <h3 className='sec4-h3'>What makes us Different</h3>
                                <Button className="btn-blue"><span className='sec4-btn-tiltle'>Read About Us</span><img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button>
                            </Col>
                            <Col md="9">
                                <Slider {...settings}>
                                    <Col md="3">
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
                                    <Col md="3">
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
                                    <Col md="3">
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
                                    <Col md="3">
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
                                    <Col md="3">
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
                                    <Col md="3">
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
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <img className="sec5-shade-1" src="../assets/img/triangle.png" />

                    <Container className="sec5">

                        <Row>
                            <Col md={4}>
                                <Row md={12}>
                                    <h3 className='sec5-h3'>The Coach & <br />Coding Enablers</h3>
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
                            <Col md={3} className='z-index'>
                                <img className="r-p-img" src="../assets/img/rahul-pink.png" alt="rahul rai" />
                                <LinkContainer to="/learnmore"><Button className="btn-blue sec5-btn"><span className='sec4-btn-tiltle'>Learn More</span> <img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button></LinkContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className="sec5-div3">
                                <p><strong style={{ fontSize: "1.2rem" }}>Coding Enablers’</strong> will be your teaching assistant, who will help you through the matrix on to the coding world</p>
                            </Col>
                            <Col md={{ span: 5, offset: 4 }} sm={10}><img src="../assets/img/theCoach4.png" width="100%" /></Col>
                        </Row>
                        <div className="tick-div">
                            <Row>
                                <Col className="tick-line" md={{ span: 9, offset: 1 }}>
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="sec5-tick-all" md={{ span: 1, offset: 1 }}>
                                    <img src="../assets/img/tick.png" />
                                </Col>
                                <Col className="sec5-tick-all" md={{ span: 1, offset: 2 }}>
                                    <img src="../assets/img/tick.png" />
                                </Col>
                                <Col className="sec5-tick sec5-tick-all" md={{ span: 1, offset: 1 }}>
                                    <img src="../assets/img/tick.png" />
                                </Col>
                                <Col className="sec5-tick sec5-tick-all" md={{ span: 1, offset: 1 }}>
                                    <img src="../assets/img/tick.png" />
                                </Col>
                            </Row>
                        </div>
                        <Row className="sec5-div4">
                            <Col xs={6} sm={3} className="div4-col">
                                <h6>Environment <br />Setup</h6>
                            </Col>
                            <Col xs={6} sm={3}>
                                <h6>Coding <br />Tutorials</h6>
                            </Col>
                            <Col xs={6} sm={3}>
                                <h6>2 hr weekly <br />Coding support</h6>
                            </Col>
                            <Col xs={6} sm={3}>
                                <h6>Domain Specific <br />Capstone Project</h6>
                            </Col>
                        </Row>
                        <Row className="sec5-coding">CODING ENABLERS</Row>
                    </Container>
                    <div className="sec5-cir"></div>
                </section>
                <section className="sec6">
                    <Container>
                        <Row>
                            <h2>How We Work ?</h2>
                        </Row>
                        <Row className="sec6-hover-img">
                            <Col><img onMouseOver={() => { contentHandler(hww1); imgHandler(); }} onMouseOut={imgHandlerout} className="hww-img" src={hwwImgState} /></Col>
                            <Col><img onMouseOver={() => { contentHandler(hww2); imgHandler2(); }} onMouseOut={imgHandlerout2} className="hww-img" src={hwwImgState2} /></Col>
                            <Col><img onMouseOver={() => { contentHandler(hww3); imgHandler3(); }} onMouseOut={imgHandlerout3} className="hww-img" src={hwwImgState3} /></Col>
                            <Col><img onMouseOver={() => { contentHandler(hww4); imgHandler4(); }} onMouseOut={imgHandlerout4} className="hww-img" src={hwwImgState4} /></Col>
                            <Col><img onMouseOver={() => { contentHandler(hww5); imgHandler5(); }} onMouseOut={imgHandlerout5} className="hww-img" src={hwwImgState5} /></Col>
                        </Row>
                        <Row><p className="hww-p">{hwwContent}</p></Row>
                    </Container>

                    <hr className="hww-hr" />
                </section>
                <section className="sec7">
                    <Container>
                        <Row>
                            <Col md={4} className="std-feedback">
                                <Row><h4>Student <br />Feedbacks.</h4></Row>
                                <Row><p>Our Students are proudly rendering <br />their service in the following companies</p></Row>
                                <br />
                                <Row className="sec5-btn-row"><Col>
                                    {userInfo ?
                                        <>
                                            <LinkContainer to="/fullcourse"><Button className="btn-blue sec5-btn"><span className='sec4-btn-tiltle'>Join the Gang</span><img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button></LinkContainer>
                                        </>
                                        :
                                        <LinkContainer to="/bootcamp"><Button className="btn-blue sec5-btn"><span className='sec4-btn-tiltle'>Join the Gang</span><img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button></LinkContainer>
                                    }

                                </Col></Row>
                            </Col>
                            <Col md={{ offset: 1 }} >
                                <Row className="review-row">
                                    <div className="review-1">
                                        <p className="review-p">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn.</p>
                                        <Row className="prof-details">
                                            <Col className="col-pd-0 mw-mc">
                                                <img src="../assets/img/testi-1.png" className="prof-pic" alt="prof-pic" />
                                            </Col>
                                            <Col className="col-pd-0">
                                                <Row>
                                                    <Col md="12" className="col-pd-0 prof-name">Terry Smith</Col>
                                                    <Col className="col-pd-0 prof-dsgn">Product Analyst</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RkrLAtu28M8" onClose={() => setOpen(false)} />
                                    <div className="review-0 review-vid" onClick={() => setOpen(true)} style={{ backgroundImage: "url(" + "../assets/img/okk.png" + ")", backgroundColor: "none" }}>
                                        <Row className="prof-details">
                                            <Col className="col-pd-0 mw-mc">
                                                <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                            </Col>
                                            <Col className="col-pd-0">
                                                <Row>
                                                    <Col md="12" className="col-pd-0 prof-name">Rahul Rail</Col>
                                                    <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="review-1">
                                        <p className="review-p">The ultimate learning experience with AIBrilliance,</p>
                                        <Row className="prof-details">
                                            <Col className="col-pd-0 mw-mc">
                                                <img src="../assets/img/testi-2.png" className="prof-pic" alt="prof-pic" />
                                            </Col>
                                            <Col className="col-pd-0">
                                                <Row>
                                                    <Col md="12" className="col-pd-0 prof-name">Sandra Watkins</Col>
                                                    <Col className="col-pd-0 prof-dsgn">Data Analyst</Col>
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
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RkrLAtu28M8" onClose={() => setOpen(false)} />
                                <div className="review-0 review-vid" onClick={() => setOpen(true)} style={{ backgroundImage: "url(" + "../assets/img/ok.png" + ")", backgroundColor: "none" }}>
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
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RkrLAtu28M8" onClose={() => setOpen(false)} />
                                <div className="review-0 review-vid" onClick={() => setOpen(true)} style={{ backgroundImage: "url(" + "../assets/img/okkk.png" + ")", backgroundColor: "none" }}>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Rahul Rail</Col>
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

                <section style={{ paddingBottom: "35px" }}>
                    <Container className="sec8">
                        <Row><p className="sec8-p">“Student graduates of Dr. Rai are working for” in place of text currently before companies logos:</p></Row>
                        <Container>
                            <Row className="sec8-logo">
                                <Col>
                                    <img src="../assets/img/brand1.png" />
                                </Col>
                                <Col>
                                    <img src="../assets/img/brand2.png" />
                                </Col>
                                <Col>
                                    <img src="../assets/img/brand3.png" />
                                </Col>
                            </Row>
                            <Row className="sec8-logo">
                                <Col>
                                    <img src="../assets/img/brand4.png" />
                                </Col>
                                <Col>
                                    <img src="../assets/img/brand5.png" />
                                </Col>
                                <Col>
                                    <img src="../assets/img/brand6.png" />
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </section>
                <section className="sec9">
                    <AiSlider />
                </section>


                <Webinar />

                <MediaGallery />
                <section className="sec12">
                    <Container className="sec12-container">
                        <Row>
                            <Col md={{ span: 3, offset: 1 }} className="sec12-help"><h3>How Can We <br />Help You ?<img style={{ height: "60px" }} src='../assets/img/420.png' />  </h3>  </Col>
                            <Col md={{ offset: 1 }}>
                                <form onSubmit={helpHandler}>
                                    <Row>
                                        <Col><p className="sec12-p">Your Name is <input type="text" id='name' placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> and</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p className="sec12-p">you would like to be reached at <input type="email" id='email' placeholder="enter email id" value={email} onChange={(e) => setEmail(e.target.value)} /></p></Col>
                                    </Row>
                                    <Row>
                                        <Col className="sec12-p-div"><p className="sec12-p">I have a query on <input type="text" id='query' placeholder="enter your query" value={query} onChange={(e) => setQuery(e.target.value)} />
                                            <button type="submit"><FontAwesome
                                                className="lp-form-arrow"
                                                name="arrow-circle-right"
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                                            /></button></p>
                                        </Col>
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