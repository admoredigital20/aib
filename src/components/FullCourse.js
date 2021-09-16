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


export default function FullCourse() {


    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listCourse())
    }, [dispatch])

    const [items, setItems] = useState([])

    useEffect(() => {
        if (!loading) {
            if (!error) {
                console.log(courses.results.data,'full');
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

    function truncate(str,n) {
        return str?.length>n?str.substr(0,n-1)+ "...." :str
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const activeBtn = (e) => {

        var elems = document.querySelector(".course-cat-active");
        if (elems !== null) {
            elems.classList.remove("course-cat-active");
        }
        e.target.parentNode.classList.add("course-cat-active")
    }

    return (
        <div>
            <div>
                <CdNav />
            </div>

            <div className="fc-container">
                <div className="container">
                    <Row className="fc-btns-grp">
                        <Col className="fc-discover">
                            <h4>Discover</h4>
                        </Col>
                        <Col className="all-course-cat">
                            <div className="course-cat course-cat-active" onClick={(e) => { setItems(courses.results.data); activeBtn(e) }} ><h5>All</h5></div>
                            <div className="course-cat" onClick={(e) => { filterItem('Free'); activeBtn(e) }} ><h5>Free</h5></div>
                            <div className="course-cat" onClick={(e) => { filterItem('Paid'); activeBtn(e) }}><h5>Paid</h5></div>
                        </Col>
                        <Col className="all-course-cat">
                            <div className="course-cat1"><h5>Advanced Filters &nbsp;<FontAwesome
                                className="adv-fil"
                                name="sort-up"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            /></h5></div>
                        </Col>
                    </Row>
                    <Row>
                        {loading ? <LoadingBox></LoadingBox> :
                            error ? <MessageBox>{error}</MessageBox> :
                                (
                                    <>{
                                        items.map((elem) => {
                                            const { id, name, sub_name, course_image, course_type, course_code, author_image, author_name, author_position } = elem;
                                            return (

                                                <Col md="3" key={id} className="all-course-card ">
                                                 <Link to='/bootcamp'>    <div className="course-card" style={{ backgroundImage: "url(" + course_image + ")" }}>
                                                        <div className="free-course">{course_type}</div>
                                                        <div className="course-detail">
                                                            <h5>{name} :</h5><span>{truncate(sub_name,30)}</span>
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
                                        })}</>
                                )}
                    </Row>
                </div>
            </div>
        </div>
    )
}
