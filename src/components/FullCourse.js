import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import CdNav from './CdNav'
import FullCoursess from './data';

import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { listCourse } from '../actions/courseActions';
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import Footer from './Footer';


export default function FullCourse() {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;

    const sidebarfun = () => {
        if (sidebarIsOpen) {
            setSidebarIsOpen(false)
        } else {
            setSidebarIsOpen(true)
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listCourse())
    }, [dispatch])

    const [items, setItems] = useState([])
    const [price, setPrice] = useState("All")

    useEffect(() => {
        if (!loading) {
            if (!error) {
                console.log(courses.results.data, 'full');
                setItems(courses.results.data)
            }
        }

    }, [courses])




    const { pathname } = useLocation();



    const filterItem = (categItem) => {
        const updatedItems = courses.results.data.filter((curElem) => {
            return curElem.course_type == categItem

        })
        setItems(updatedItems)

    }

    const filterItem1 = (categItem) => {
        if (price == "All") {
            const updatedItems = courses.results.data.filter((curElem) => {
                return curElem.task_id == categItem
            })
            setItems(updatedItems)
        }
        if (price == "Free") {
            const updatedItems = courses.results.data.filter((curElem) => {
                return curElem.course_type == "Free" && curElem.task_id == categItem;
            })
            setItems(updatedItems)
        }
        if (price == "Paid") {
            const updatedItems = courses.results.data.filter((curElem) => {
                return curElem.course_type == "Paid" && curElem.task_id == categItem
            })
            setItems(updatedItems)
        }

    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "...." : str
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const activeBtn = (e) => {

        var elems = document.querySelector(".course-cat-active");
        if (elems !== null) {
            elems.classList.remove("course-cat-active");
        }
        var elems1 = document.querySelector(".af-active");
        if (elems1 !== null) {
            elems1.classList.remove("af-active");
        }
        e.target.parentNode.classList.add("course-cat-active")
    }

    const afActive = (e) => {
        var elems = document.querySelector(".af-active");
        if (elems !== null) {
            elems.classList.remove("af-active");
        }
        e.target.classList.add("af-active")
    }


    return (
        <div className="fc-main">
            <div>
                <CdNav />
            </div>
            <div className="fc-container">
                <div className="container fullcourse-padding">
                    <Row className="fc-btns-grp">
                        <Col className="fc-discover">
                            <h4>Discover</h4>
                        </Col>
                        <Col className="all-course-cat">
                            <div className="course-cat course-cat-active" onClick={(e) => { setItems(courses.results.data); activeBtn(e); setPrice("All") }} ><h5>All</h5></div>
                            <div className="course-cat" onClick={(e) => { filterItem('Free'); activeBtn(e); setPrice("Free") }} ><h5>Free</h5></div>
                            <div className="course-cat" onClick={(e) => { filterItem('Paid'); activeBtn(e); setPrice("Paid") }}><h5>Paid</h5></div>
                        </Col>
                        <Col className="all-course-cat all-crse-end">
                            <div className="course-cat1" onClick={sidebarfun} ><h5 >Advanced Filters &nbsp;<FontAwesome
                                className="adv-fil"
                                name={!sidebarIsOpen ? "sort-down" : "sort-up"}
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            /></h5></div>
                        </Col>
                    </Row>
                    {sidebarIsOpen ? (
                        <Row className='advancedfilter'>
                            <Col className="all-course-cat">
                                <div className="course-cat" onClick={(e) => { afActive(e); filterItem1(2); }}  ><h5>Coding</h5></div>
                                <div className="course-cat" onClick={(e) => { afActive(e); filterItem1(3); }}  ><h5>R Programming</h5></div>
                                <div className="course-cat" onClick={(e) => { afActive(e); filterItem1(4); }}  ><h5>Big Data</h5></div>
                                <div className="course-cat" onClick={(e) => { afActive(e); filterItem1(5); }} ><h5>AI</h5></div>
                                <div className="course-cat" onClick={(e) => { afActive(e); filterItem1(6); }}  ><h5>Python</h5></div>
                                <div className="course-cat" onClick={(e) => { afActive(e); filterItem1(7); }}  ><h5>ML</h5></div>
                            </Col>

                        </Row>
                    ) : ""}

                    <Row>
                        {loading ? <LoadingBox></LoadingBox> :
                            error ? <MessageBox>{error}</MessageBox> :
                                (
                                    <>{items ? (
                                        items.map((elem) => {
                                            const { id, name, sub_name, course_image, course_type, course_code, author_image, author_name, author_position } = elem;
                                            return (

                                                <Col md="3" key={id} className="all-course-card ">
                                                    <Link to={{ pathname: "/bootcamp", state: { cid: id }, }}>    <div className="course-card" style={{ backgroundImage: "url(" + course_image + ")" }}>
                                                        <div className="free-course">{course_type}</div>
                                                        <div className="course-detail">
                                                            <h5>{name} :</h5><span>{truncate(sub_name, 30)}</span>
                                                            <div className="user-credit">
                                                                <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
                                                                <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">{course_code}</span>
                                                            </div>
                                                            <Row className="prof-details">
                                                                <Col className="col-pd-0 mw-mc">
                                                                    <img src={author_image} className="prof-pic" alt="prof-pic" />
                                                                </Col>
                                                                <Col className="col-pd-0">
                                                                    <Row>
                                                                        <Col md="12" className="col-pd-0 prof-name">{author_name}</Col>
                                                                        <Col className="col-pd-0 prof-dsgn">{author_position}</Col>
                                                                    </Row>

                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                </Col>
                                            )
                                        })) : <MessageBox>No Courses Are Found</MessageBox>}</>
                                )}
                    </Row>
                </div>
                <Footer />
            </div>
        </div>
    )
}
