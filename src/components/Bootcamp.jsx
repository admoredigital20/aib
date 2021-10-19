import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Accordion } from "react-bootstrap";
import CdNav from "./CdNav";

export default function Bootcamp() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    handleToggle();
  }, []);

  return (
    <div>
      <CdNav />
      <div>
        <Row className="main-cd">
          <Col md={1} xs={0} className="side-bar">
            <div className="sb-items">
              <Row className="sb-item">
                <a href="#cd1">
                  <Col className="sb-active cd1-div">
                    <img
                      className="sb-item"
                      src="../assets/img/sidebar-img-1.png"
                      style={{ width: "25px" }}
                    />
                  </Col>
                </a>
              </Row>
              <Row className="sb-item">
                <a href="#cd3">
                  <Col className="cd3-div">
                    <img
                      className="sb-item"
                      src="../assets/img/sidebar-img-2.png"
                      style={{ width: "25px" }}
                    />
                  </Col>
                </a>
              </Row>
              <Row className="sb-item">
                <a href="#cd4">
                  <Col className="cd4-div">
                    <img
                      className="sb-item"
                      src="../assets/img/sidebar-img-3.png"
                      style={{ width: "25px" }}
                    />
                  </Col>
                </a>
              </Row>
              <Row className="sb-item">
                <a href="#cd5">
                  <Col className="cd5-div">
                    <img
                      className="sb-item"
                      src="../assets/img/sidebar-img-4.png"
                      style={{ width: "25px" }}
                    />
                  </Col>
                </a>
              </Row>
              <Row className="sb-item">
                <a href="#cd6">
                  <Col className="cd6-div">
                    <img
                      className="sb-item"
                      src="../assets/img/sidebar-img-5.png"
                      style={{ width: "25px" }}
                    />
                  </Col>
                </a>
              </Row>
            </div>
          </Col>
          <Col style={{ minHeight: "100vh" }}>
            <div class="wrapper1">
              <nav id="sidebar-bc" className={isActive ? "active" : null}>
                <div class="sidebar-bc-header">
                  <h5>Content Navigator</h5>
                </div>
                <Accordion className="bc-acc" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="bc-acc-hd">
                        <h5>Week 0</h5>
                        <div className="d-flex">
                          <span class="material-icons">slideshow</span>
                          <p>15 hrs</p>
                          <span class="material-icons">slideshow</span>
                          <p>15 hrs</p>
                          <span class="material-icons">slideshow</span>
                          <p>15 hrs</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div class="wrapper2">
                        <ul class="StepProgress">
                          <li class="StepProgress-item is-done is-done-finish">
                            <span class="material-icons">slideshow</span>
                            <p>0.1 Welcome</p>
                          </li>

                          <li class="StepProgress-item ">
                            <span class="material-icons">slideshow</span>
                            <p>0.1 Welcome</p>
                          </li>
                          <li class="StepProgress-item">
                            <span class="material-icons">slideshow</span>
                            <p>0.1 Welcome</p>
                          </li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="bc-acc-hd">
                        <h5>Week 0</h5>
                        <div className="d-flex">
                          <span class="material-icons">slideshow</span>
                          <p>15 hrs</p>
                          <span class="material-icons">slideshow</span>
                          <p>15 hrs</p>
                          <span class="material-icons">slideshow</span>
                          <p>15 hrs</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {/* <Row>
                        <Col md={1}></Col>
                      </Row> */}
                      <div class="wrapper2">
                        <ul class="StepProgress">
                          <li class="StepProgress-item is-done is-done-finish">
                            Orderd wednesday, 4 august
                          </li>

                          <li class="StepProgress-item">out for delivery</li>
                          <li class="StepProgress-item">Arriving thursday</li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </nav>

              <div id="content">
                <button
                  type="button"
                  onClick={handleToggle}
                  id="sidebarCollapse"
                  class="btn btn-info"
                >
                  <span class="material-icons">first_page</span>
                </button>
                <div>
                  <div className="bc-main">
                    <Row className="bc-breadcrumbs">
                      <Col md={12}>
                        <h6>
                          {" "}
                          Bootcamp &gt; Information Visualization :… &gt; Lesson
                          0.1{" "}
                        </h6>
                      </Col>
                      <Col md={12}>
                        <h5>0.1 Welcome</h5>
                      </Col>
                      <Col md={12}>
                        <h6>Estimated time to complete: span 29 mins </h6>
                      </Col>
                    </Row>
                    <Row>
                      <video
                        id="my-video"
                        class="video-js vjs-theme-forest"
                        controls
                        preload="auto"
                        width="640"
                        height="264"
                        poster="MY_VIDEO_POSTER.jpg"
                        data-setup="{}"
                      >
                        <source src="http://localhost:3000/assets/vid/MY_VIDEO.mp4" type="video/mp4" />
                        <p class="vjs-no-js">
                          To view this video please enable JavaScript, and
                          consider upgrading to a web browser that
                          <a
                            href="https://videojs.com/html5-video-support/"
                            target="_blank"
                          >
                            supports HTML5 video
                          </a>
                        </p>
                      </video>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
