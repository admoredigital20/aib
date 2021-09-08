import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { webinarCourse } from '../actions/webinarAction'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'



function Webinar() {


    const webinarList = useSelector(state => state.webinarList)
    const { loading: webinarLoading, error: webinarError, webinar } = webinarList

    const dispatch = useDispatch()

    
    const [items, setItems] = useState([])

    useEffect(()=>{
        dispatch(webinarCourse())
        console.log(webinar,'webinar');
    },[])

    useEffect(() => {
        if (!webinarLoading) {
            if (!webinarError) {
                console.log(webinar.results.data,'full');
                setItems(webinar.results.data)
            }
        }
    }, [webinar])

    const filterItem = (categItem) => {
        const updatedItems = webinar.results.data.filter((curElem) => {
            return curElem.status == categItem


        })
        setItems(updatedItems)

    }

    const activeBtn = (e) => {

        var elems = document.querySelector(".course-cat-active");
        if (elems !== null) {
            elems.classList.remove("course-cat-active");
        }
        e.target.parentNode.classList.add("course-cat-active")
    }
    return (
        <div>
            <section className="sec10">
                    <Container>
                        <Row><h2 className="sec10-h2">Webinars</h2></Row>
                        <Row className="justify-content-md-center">
                            <Col className="sec10-btn">
                                <Button className="btn-white" onClick={(e) => { setItems(webinar.results.data); activeBtn(e) }}>All</Button>
                                <Button className="btn-blue" onClick={(e) => { filterItem('Next'); activeBtn(e) }}>Upcoming</Button>
                                <Button className="btn-white" onClick={(e) => { filterItem('Completed'); activeBtn(e) }}>Past</Button>
                            </Col>
                        </Row>
                        <Row className="web-img-grp">
                            {  
                                webinarLoading ? (<LoadingBox></LoadingBox>) :
                                    webinarError ? (<MessageBox>{webinarError}</MessageBox>) :

                                         items.map((elem) => {
                                            const { id, date, image, name, webinar_link, status, time } = elem;
                                            return (
                                                <Col md={6} lg={3} className="web-main-content">
                                                   
                                                    <h6>15th AUG 21, 11:00 EST</h6>
                                                    <h4>{name} <br/> </h4>
                                                    <Link to='/zoompage'> <img className="webinar-img" src={image} />
                                                    </Link>
                                                </Col>
                                             
                                            )
                                        }

                                        )


                            }

                        </Row>
                    </Container>
                </section>
        </div>
    )
}

export default Webinar
