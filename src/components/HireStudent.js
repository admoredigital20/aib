import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'

function HireStudent() {

    
   

    return (
        <div className='hire-main'>
            <Row className='hirestudent'>
               <Col md={7} className='hirestudent-first'>
                  <Container className='hirestudent-cntnr'>
                      <h1 >We have got brilliant minds !Hire our students !</h1>
                      <p>Get free access to the best talent !</p>
                      <div className='hirestudent-div'>
                          <Container className='div-conatiner'>
                            <p>Why Our Students ?</p>
                            <p1>Our students are formally trained by working on hand-on real-life projects and have balanced knowledge in data science, machine learning, and coding!</p1>
                         </Container>                        
                      </div>
                  </Container>
                  <hr/>
                  <Container className='hirestudent-cntnr2'>
                      <h1>Frequently Asked Questions</h1>
                      <p>How does our placement process work?</p>
                      <hr/>
                      <p className="mt-3">Is there any placement cost?</p>
                  </Container>
               </Col>
               <Col MD={5} className='hirestudent-second'>
                 <Container>
                     <p>Enter the following details,To learn about hiring a student from AIBrilliance</p>

            <Modal.Body>
                    <Form className='hire' >
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control id="email" placeholder="Enter Your Name *"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" id="password" required placeholder="Work Email *"   />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control id="email" placeholder="Phone Number *"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" id="password" required placeholder="What your organization needs ? *"   />
                        </Form.Group>
                       
                        <Button className="signin-btn mt-4" type="submit">
                            Submit Details
                        </Button>
                        
                    </Form>

                </Modal.Body>
                 </Container>
               </Col>
            </Row>
        </div>
    )
}

export default HireStudent
