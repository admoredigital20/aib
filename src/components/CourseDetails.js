import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Col, Row, Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ChatApp from '../chat/ChatApp'
import CdNav from './CdNav'
import { useSelector } from 'react-redux';
import { listCourse } from '../actions/courseActions';
import { useDispatch } from 'react-redux';

var FontAwesome = require('react-fontawesome')

export default function CourseDetails(props) {
    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;
    const location = useLocation()
    const cid = location.state?.cid
    console.log(cid,"id cid");
    
  


    // const course=courses.results.data.find(x=>x._id === props.match.params.id)
    const dispatch= useDispatch()
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(listCourse())
      console.log(courses);
    }, [pathname,dispatch]);

    
    const [sc, setSc] = useState([])

    useEffect(() => {
        if (!loading) {
            if (!error) {
                const IC = courses.results.data.filter(elm => {
                    return elm.id == cid
                })
                setSc(IC[0])
                console.log(sc.name,"ppp");

            }
        }
        
    }, [courses])

    useEffect(() => {
        const sections = document.querySelectorAll(".section");
        const navLi = document.querySelectorAll(".sb-items .sb-item .col");
        document.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("sb-active");
                if (li.classList.contains(current + "-div")) {
                    li.classList.add("sb-active");
                }
            });
        });
    }, [])




    return (
        <div>
            <CdNav />
            <div>
                <Row className="main-cd" >
                    <Col md={1}
                        xs={0}
                        className="side-bar" >
                        <div className="sb-items" >

                            <Row className="sb-item" >
                                <a href="#cd1" >
                                    < Col className="sb-active cd1-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-1.png" style={{width:"25px"}} />
                                    </Col>
                                </a >
                            </Row>
                            <Row className="sb-item" >
                                <a href="#cd3" >
                                    < Col className="cd3-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-2.png" style={{width:"25px"}}  />
                                    </Col>
                                </a >
                            </Row>
                            <Row className="sb-item" >
                                <a href="#cd4" >
                                    < Col className="cd4-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-3.png" style={{width:"25px"}} />
                                    </Col>
                                </a >
                            </Row>
                            <Row className="sb-item" >
                                <a href="#cd5" >
                                    < Col className="cd5-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-4.png" style={{width:"25px"}} />
                                    </Col>
                                </a >
                            </Row>
                            <Row className="sb-item" >
                                <a href="#cd6" >
                                    < Col className="cd6-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-5.png" style={{width:"25px"}} />
                                    </Col>
                                </a >
                            </Row>
                        </div >
                    </Col>
                    <Col className="right-div"  >
                        <Row className="cd1 section"
                            id="cd1"
                            style={
                                { backgroundImage: "url(" + "../assets/img/bc-header.png" + ")" }
                            } >
                            <Col md={12}
                                className="cd1-breadcrumbs" >
                                <h6 > Bootcamp &gt;{sc.name}  </h6>

                            </Col>
                            <Col className="cd1-play-btn" >
                                <Row >
                                    {/* < FontAwesome className="header1-play-circle"
                                        name="play-circle"
                                        size="5x"
                                        style={
                                            { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                        }
                                    /> */}
                                    <Col>
                                        <img src="../assets/img/Play@2x.png" />
                                    </Col>

                                </Row >
                                <Col >
                                    <h6 className="cd1-header-h6" > Couse <br /> Preview </h6>
                                </Col >
                            </Col>
                        </Row >
                        <Row className="cd1-detail-row" >
                            <Col md={{ span: 3, offset: 7 }} xs={{ span: 5, offset: 5 }} className="cd1-detail-bar" >
                                <img src="../assets/img/cd-details-img.jpg" />
                                <Row className="cd1-dtl-grp mt-4">
                                    <Col md={6} xs={12}> < p className="cd1-detail-bar-pargra cd1-p-left" > Discounted Price </p></Col >
                                    <Col md={6} xs={12}> < p className="cd1-detail-bar-pargra cd1-p-r8" > Slots left </p></Col >
                                </Row>
                                <Row className="cd1-dtl-grp">
                                    <Col className="price" >
                                        <h2 className='cd1-detail-free' > {sc.course_type}</h2> <p className='cd1-detail-bar-h2 cd1-detail-old'> $1200 </p>
                                    </Col >
                                    <Col > < h3 className='cd1-detail-bar-h2 cd1-p-r8 mt-3 mb-0'> 8 / 25 </h3></Col >
                                </Row>
                                <Row >
                                    <Col md={12} >
                                       <Link to={{pathname: "/payment",state: { cid2: cid },}}> <Button className='cd1-detail-row-btn' > Enroll Now </Button> </Link> </Col > 
                                </Row>
                                <Row >
                                    <Col >
                                        <p className='cd1-detail-row-par' > Batch Starting on <h6 className="">15th Jun 21</h6></p>
                                    </Col >
                                </Row>
                            </Col >
                        </Row>
                        <Row className="mt-4 mb-4 mbl-cd1">
                            <Col xs={5} className="mbl-cd1-img">
                                <img src="../assets/img/cd-details-img.jpg" />
                            </Col>

                            <Col xs={6}>
                                <Row>
                                    <Col>
                                        <Row>
                                            <p>Discounted Price</p>
                                        </Row>
                                        <Row>
                                            <Col><h2 className='cd1-detail-free' > Free </h2> <p className='cd1-detail-bar-h2 cd1-detail-old'> $1200 </p></Col>
                                        </Row>
                                    </Col>

                                    <Col >
                                        <Row>
                                            <p className="cd1-p-r8">Slots left</p>
                                        </Row>
                                        <Row>
                                            <p className="cd1-p-r8">8/25</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button className='cd1-detail-row-btn' > Enroll Now </Button>
                                </Row>
                                <Row>
                                    <p className='cd1-detail-row-par' > Batch Starting on <h6 className="">15th Jun 21</h6></p>
                                </Row>
                            </Col>
                            <Col md={{ offset: 1 }} xs={0}>
                            </Col>

                        </Row>
                        <Row className="cd2"
                            id="cd2" >
                            <Col md={4}
                                className="cd2-details" >
                                <h1 className="cd2-heading" > {sc.name} <br /> {sc.sub_name} </h1> <p className="cd2-dtl-p"> In this course we’ ll introduce you to the essentials of the Python language, development culture, and important parts of the Python standard library.This course will help you develop the foundation you need to work on any Python project </p>
                                <Row className="cd2-prof-details" >
                                    <Col className="col-pd-0 mw-mc" >
                                        <img src="../assets/img/Rectangle-WS.png"
                                            className="prof-pic"
                                            alt="prof-pic" />
                                    </Col>
                                    <Col className="col-pd-0" >
                                        <Row className="" >
                                            <Col md="12" className="col-pd-0 cd2-prof-dsgn" > Author </Col>
                                            <Col className="col-pd-0 cd2-prof-name" > {sc.author_name},   {sc.author_position}</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Row className="cd2-mouse" >
                                <p className="cd2-more-details" > More Details < img src={sc.author_image} /> </p>
                            </Row >

                        </Row>
                        <Row className="cd3 section" id="cd3" >
                            <Col md={7} >
                                <Accordion >
                                    <Accordion.Item className="main-acc-item" >
                                        <Accordion.Header className="acc-header" > What will you learn ? < br /> < p className="acc-h-p" > 4 Modules• 4 Mini Project• 1 Major Project• 36 h 15 m total length </p></Accordion.Header >

                                    </Accordion.Item>
                                </Accordion >
                                <Accordion defaultActiveKey="0"
                                    className="cd3-course-acc" >
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header > 0. Welcome to the information visualization </Accordion.Header>
                                        <Accordion.Body className="acc-body" >
                                            <Row className="acc-body-row" >
                                                <Col > < FontAwesome className="cd3-acc-icon"
                                                    name="play-circle"
                                                    style={
                                                        { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                    }
                                                />&nbsp;&nbsp;&nbsp;&nbsp;0.1 Introduction</Col >
                                            </Row>
                                            <Row className="acc-body-row" >
                                                <Col >
                                                    < FontAwesome className="cd3-acc-icon"
                                                        name="play-circle"
                                                        style={
                                                            { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                        }
                                                    />&nbsp;&nbsp;&nbsp;&nbsp;0.2 Information Visualization using python
                                                </Col >
                                            </Row>
                                            <Row className="acc-body-row" >
                                                <Col >
                                                    < FontAwesome className="cd3-acc-icon"
                                                        name="play-circle"
                                                        style={
                                                            { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                        }
                                                    />&nbsp;&nbsp;&nbsp;&nbsp;0.3 How to start using python
                                                </Col >
                                            </Row>
                                            <Row className="acc-body-row" >
                                                <Col >
                                                    < FontAwesome className="cd3-acc-icon"
                                                        name="play-circle"
                                                        style={
                                                            { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                        }
                                                    />&nbsp;&nbsp;&nbsp;&nbsp;0.4 Hands on python code explained</Col >
                                            </Row>
                                        </Accordion.Body >
                                    </Accordion.Item>
                                </Accordion >
                                <Accordion defaultActiveKey="0"
                                    className="cd3-course-acc" >
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header > 1. Advance information visualization </Accordion.Header>
                                        <Accordion.Body className="acc-body" >
                                            <Row className="acc-body-row" >
                                                <Col >
                                                    < FontAwesome className="cd3-acc-icon"
                                                        name="play-circle"
                                                        style={
                                                            { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                        }
                                                    />&nbsp;&nbsp;&nbsp;&nbsp;0.1 Introduction</Col >
                                            </Row>
                                            <Row className="acc-body-row" >
                                                <Col >
                                                    < FontAwesome className="cd3-acc-icon"
                                                        name="play-circle"
                                                        style={
                                                            { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                        }
                                                    />&nbsp;&nbsp;&nbsp;&nbsp;0.2 Information Visualization using python
                                                </Col >
                                            </Row>
                                            <Row className="acc-body-row" >
                                                <Col >
                                                    < FontAwesome className="cd3-acc-icon"
                                                        name="play-circle"
                                                        style={
                                                            { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                        }
                                                    />&nbsp;&nbsp;&nbsp;&nbsp;0.3 How to start using python</Col >
                                            </Row>
                                            <Row className="acc-body-row" >
                                                <Col >
                                                    < FontAwesome className="cd3-acc-icon"
                                                        name="play-circle"
                                                        style={
                                                            { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                        }
                                                    />&nbsp;&nbsp;&nbsp;&nbsp;0.4 Hands on python code explained</Col >
                                            </Row>
                                        </Accordion.Body >
                                    </Accordion.Item>
                                </Accordion >
                            </Col>
                            <Col md={{ span: 3, offset: 1 }} >
                                <div className="cd3-certi" >
                                    <Row >
                                        < h5 > Shareable Certificate </h5>
                                    </Row >
                                    <Row >
                                        < p > Earn a Certificate upon completion </p>
                                    </Row >
                                    <Row >
                                        < img src="../assets/img/cert-cd3.jpg" />
                                    </Row>
                                </div >
                                <div className="cd3-tags" >
                                    <Row >
                                        < h5 > You’ ll Learn </h5>
                                    </Row >
                                    <Row >
                                        < p > By the end of this course </p>
                                    </Row >
                                    <Row >
                                        <Col className="cd3-tags-col" >
                                            < p className="cd3-tags-p" > Python </p>
                                        </Col >
                                        <Col className="cd3-tags-col" >
                                            < p className="cd3-tags-p" > Pandas </p>
                                        </Col >
                                        <Col className="cd3-tags-col" >
                                            < p className="cd3-tags-p" > NumPy </p>
                                        </Col >
                                        <Col className="cd3-tags-col" >
                                            < p className="cd3-tags-p" > SciPy </p>
                                        </Col >
                                        <Col className="cd3-tags-col" >
                                            < p className="cd3-tags-p" > MatPlotLib </p>
                                        </Col >
                                        <Col className="cd3-tags-col" >
                                            < p className="cd3-tags-p" > Jupyter Notebooks </p>
                                        </Col >
                                    </Row>
                                </div >
                            </Col>
                        </Row>
                        <Row className="cd4 section" id="cd4" >
                            <Col md={6} className="cd4-1" >
                                <Row >
                                    <h2 className="cd4-h2" > Meet your Captain, Challenge Slayers <br /> and peers
                                        for this class </h2>
                                </Row >
                                <Row className="cd4-coach-det" >
                                    <Col md={3}
                                        className="cd4-pic-div" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <img className='talk-img' src='../assets/img/talk.png'/>
                                    </Col >
                                    <Col className='coach-padding'>
                                        <h4 className="cd4-coach-name" > Dr.Rahul Rai </h4>
                                        <h4 className="cd4-coach-name1" > AI Coach </h4>
                                        <div className="cd4-dtls-bottom" >
                                            <h6 > About Me </h6>
                                            <p> Dean’ s Distinguished Professor at Clemson University, USA and An expert in AI and Analytics and have led several prestigious research initiatives and innovations in intelligent manufacturing, ML and AI, including a rich stint with NASA </p>
                                        </div >
                                    </Col>
                                </Row >
                                <Row className="all-task-master" >
                                    <Col className="cd4-task-master" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <h5 > Bruce Stewart </h5>
                                        <h6 > Task Master </h6>
                                        <p > Dean’ s Distinguished Professor at Clemson University, USA </p>
                                    </Col >
                                    <Col className="cd4-task-master" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <h5 > Bruce Stewart </h5> <h6 > Task Master </h6> <p > Dean’ s Distinguished Professor at Clemson University, USA </p> </Col > <Col className="cd4-task-master" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <h5 > Bruce Stewart </h5> <h6 > Task Master </h6> <p > Dean’ s Distinguished Professor at Clemson University, USA </p>
                                    </Col >
                                    <Col className="cd4-task-master" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <h5 > Bruce Stewart </h5> <h6 > Task Master </h6> <p > Dean’ s Distinguished Professor at Clemson University, USA </p>
                                    </Col >
                                </Row>


                            </Col>
                            <Col md={{ span: 5, offset: 1 }} >
                                < ChatApp />
                            </Col >
                        </Row>
                        <Row className="cd5 section" id="cd5" >
                            <Col md={5} >
                                <Row >
                                    <h2 className="cd5-header" > Scoring and Certificate </h2>
                                </Row >
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            }
                                        /> <div className="verticalLine" > </div>
                                    </Col >
                                    <Col className="cd5-det" >
                                        <h5 className='cd5-h5'> No’ of Modules </h5> <p > 4 Modules and 18 lessons </p> </Col >

                                </Row>
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            } /> <div className="verticalLine" > </div>
                                    </Col >
                                    <Col className="cd5-det" >
                                        <h5 className='cd5-h5'> Quiz </h5> <p >Multiple Choice questions </p>
                                    </Col >

                                </Row>
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            } /> <div className="verticalLine" > </div> </Col > <Col className="cd5-det" >
                                        <h5 className='cd5-h5'> Mini Project </h5> <p > Each Module will have a Mini Project </p> </Col >

                                </Row>
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            }
                                        />
                                        <div className="verticalLine1" >
                                        </div>
                                    </Col >
                                    <Col className="cd5-det" >
                                        <h5 className='cd5-h5'> Major Project </h5>
                                        <p > Talk to your coach on what industry <br/>you prefer for your career </p>
                                        <Row >
                                            <div className="cd5-get-eva">
                                                    <img className="cd5-baby" src="../assets/img/cd-baby.png" alt="" />
                                                <div className="get-eva-det" >
                                                    <h6> Get Evaluated! </h6>
                                                    <p> During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes </p>
                                                </div >
                                            </div>
                                        </Row >
                                    </Col>


                                </Row>
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            }
                                        />
                                    </Col >
                                    <Col className="cd5-det" >
                                        <h5 className='cd5-h5' > Certificate and Recommendation</h5>
                                        <p > Receive an industry recognized certificate and personal recommendation from our coach </p>
                                    </Col >

                                </Row>
                            </Col >
                            <Col md={7}
                                className="cd5-cert-img" >
                                <img src="../assets/img/v12.png" />
                            </Col>

                        </Row>
                    </Col >
                </Row>
            </div >

        </div>
    )
}