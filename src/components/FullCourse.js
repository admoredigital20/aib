import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import CdNav from './CdNav'

export default function FullCourse() {
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
                            <div className="course-cat course-cat-active"><h5>All</h5></div>
                            <div className="course-cat" ><h5>Free</h5></div>
                            <div className="course-cat"><h5>Paid</h5></div>
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
                        <Col md="3" className="all-course-card">
                            <div className="course-card" style={{ backgroundImage: "url(" + "../assets/img/course1.jpg" + ")" }}>
                                <div className="free-course">Free</div>
                                <div className="course-detail">
                                    <h5>Information Visualization :</h5><span>Using Python</span>
                                    <div className="user-credit">
                                        <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
                                        <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">120</span>
                                    </div>
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
                            </div>
                        </Col>
                        <Col md="3" className="all-course-card">
                            <div className="course-card" style={{ backgroundImage: "url(" + "../assets/img/course1.jpg" + ")" }}>
                                <div className="free-course">Free</div>
                                <div className="course-detail">
                                    <h5>Information Visualization :</h5><span>Using Python</span>
                                    <div className="user-credit">
                                        <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
                                        <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">120</span>
                                    </div>
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
                            </div>
                        </Col>
                        <Col md="3" className="all-course-card">
                            <div className="course-card" style={{ backgroundImage: "url(" + "../assets/img/course1.jpg" + ")" }}>
                                <div className="free-course">Free</div>
                                <div className="course-detail">
                                    <h5>Information Visualization :</h5><span>Using Python</span>
                                    <div className="user-credit">
                                        <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
                                        <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">120</span>
                                    </div>
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
                            </div>
                        </Col>
                        <Col md="3" className="all-course-card">
                            <div className="course-card" style={{ backgroundImage: "url(" + "../assets/img/course1.jpg" + ")" }}>
                                <div className="free-course">Free</div>
                                <div className="course-detail">
                                    <h5>Information Visualization :</h5><span>Using Python</span>
                                    <div className="user-credit">
                                        <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
                                        <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">120</span>
                                    </div>
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
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
