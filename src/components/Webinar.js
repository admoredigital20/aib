import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { webinarCourse } from '../actions/webinarAction'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import ZoomPage from './ZoomPage'



function Webinar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const webinarList = useSelector(state => state.webinarList)
    const { loading: webinarLoading, error: webinarError, webinar } = webinarList

    const dispatch = useDispatch()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
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



    const [items, setItems] = useState([])

    useEffect(() => {
        dispatch(webinarCourse())
        console.log(webinar, 'webinar');
    }, [])

    useEffect(() => {
        if (!webinarLoading) {
            if (!webinarError) {
                setItems(webinar.results.data.filter((curElem) => {
                    return curElem.status == "Next"
                }))
            }
        }
    }, [webinar])



    const filterItem = (categItem) => {
        const updatedItems = webinar.results.data.filter((curElem) => {
            return curElem.status == categItem


        })
        setItems(updatedItems)

    }

    

    const btnPast = () => {
        const upcoming = document.getElementById("upc")
        upcoming.classList.remove("course-cat-active1")
    }

    const activeBtn = (e) => {
        var elems = document.querySelector(".course-cat-active1");
        if (elems !== null) {
            elems.classList.remove("course-cat-active1");
        }
        e.target.classList.add("course-cat-active1")
    }

    return (
        <div>
            <section className="sec10">
                <Container>
                    <Row><h2 className="sec10-h2">Webinars</h2></Row>
                        <Row className="justify-content-md-center">
                            <Col className="all-course-cat mb-5">
                                <div className="course-cat" onClick={(e) => { setItems(webinar.results.data); activeBtn(e); btnPast(); }} ><h5 className=''>All</h5></div>
                                <div className="course-cat"  onClick={(e) => { filterItem('Next'); activeBtn(e) }} ><h5 id="upc" className="course-cat-active1">Upcoming</h5></div>
                                <div className="course-cat" onClick={(e) => { filterItem('Completed'); activeBtn(e); btnPast(); }}><h5 className=''>Past</h5></div>
                            </Col>
                        </Row>


                    <Modal className="sec-10-modal" show={show} onHide={handleClose}>

                        <Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <div className='zoom-sec1'>
                                        <h2>Industrial Applications -1</h2>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <ZoomPage />
                        </Modal.Body>

                    </Modal>
                    <Row className="web1-row">
                        {
                            webinarLoading ? (<LoadingBox></LoadingBox>) :
                                webinarError ? (<MessageBox>{webinarError}</MessageBox>) :

                                    items.map((elem) => {
                                        const { id, date, image, name, webinar_link, status, time } = elem;
                                        return (

                                            <>
                                            
                                                <Col className="web1-col mt-4" md={4} >
                                             
                                                    <button className="webinar-btn" variant="light" onClick={handleShow}>
                                                        <div className="web1-main">
                                                            <img className="web1-img" src={image} />
                                                            <div className="web1-content">
                                                                <br />
                                                                <h6>{date}</h6>
                                                            </div>
                                                        </div>
                                                    </button>
                                                  
                                                </Col>
                                               

                                            </>
                                        )
                                    })}
                    </Row>

                </Container>
            </section>
        </div >
    )
}

export default Webinar
