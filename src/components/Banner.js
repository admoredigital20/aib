import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Navbar1 from './Navbar';

export default function Banner() {



    const [bnrImg, setBnrImg] = useState(false)

    const bnrFun = () => {
        setBnrImg(true)
    }
    const bnrFunOut = () => {
        setBnrImg(false)
    }

    const [bnrImg2, setBnrImg2] = useState(false)

    const bnrFun2 = () => {
        setBnrImg2(true)
    }
    const bnrFunOut2 = () => {
        setBnrImg2(false)
    }

    const [bnrImg3, setBnrImg3] = useState(false)

    const bnrFun3 = () => {
        setBnrImg3(true)
    }
    const bnrFunOut3 = () => {
        setBnrImg3(false)
    }


    return (
        <section className="sec0">
            <Navbar1 />
            <div className="banner0" style={{ backgroundImage: "url(" + "../assets/img/header2.png" + ")" }}>
                <Container>
                    <Row className="bnr-content">
                        <Col md={5} >
                            <Row>
                                <Col md={12}>
                                    <h1>Empower Your Learning <br />and Upskill for Data Science, Machine Learning, and <br />AI Career Path</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={11}>
                                    <p>Learn from the best. Experienced online educators and comprehensive curriculum.</p>
                                    <p>Highest quality content in hands-on and project-based model delivered in online synchronous/asynchronous mode.</p>
                                    <Row>
                                        <Col className="bnr-play">
                                            <img src="../assets/img/play-btn.png" />
                                            <h6>Introduction</h6>
                                        </Col >
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={7} className="bnr-img">
                            <div className="fr-div">
                                {bnrImg ? <> <img className="ft" src="../assets/img/firsttext.png" alt="" /> </>
                                    :
                                    <></>
                                }
                                <img className="fr" onMouseOver={bnrFun} onMouseOut={bnrFunOut} src="../assets/img/1round.png" alt="" />
                            </div>
                            <Row>

                                <Col md={1} className="tr-div">

                                    <img className="tr" onMouseOver={bnrFun3} onMouseOut={bnrFunOut3} src="../assets/img/3round.png" alt="" />
                                    {bnrImg3 ? <> <img className="tt" src="../assets/img/firsttext3.png" alt="" /> </>
                                        :
                                        <></>
                                    }
                                </Col>
                                <Col>
                                    <img className="header-img" src="../assets/img/header1-img2.png" alt="" />
                                </Col>
                                <Col md={1} className="sr-div">
                                    {bnrImg2 ? <> <img className="st" src="../assets/img/firsttext2.png" alt="" /> </>
                                        :
                                        <></>
                                    }
                                    <img className="sr" onMouseOver={bnrFun2} onMouseOut={bnrFunOut2} src="../assets/img/2round.png" alt="" />
                                </Col>
                            </Row>

                            {/* <div className="fr-div">

                            </div> */}
                        </Col>
                        <div md={12} className="header-mouse">
                            <img src="../assets/img/mouse.png" alt="" />
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
