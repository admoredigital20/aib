import React from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

function ContactUs(props) {
    return (
        <div>
            <div className='hire-main'>
            <Row className='hirestudent'>
               <Col md={6} className='hirestudent-first'>
                  <Container className='hirestudent-cntnr'>
                      <h1 >We’re here to help!</h1>
                      <p>Leave your query and we’ll reach out to you.</p>
                    
                      <Modal.Body>
                    <Form className='hire' >
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control id="email" placeholder="Enter Your Name *"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" id="password" required placeholder="Email *"   />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control id="email" placeholder="Phone Number *"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" id="password" required placeholder="Type Your Query ? "   />
                        </Form.Group>
                       
                        <Button className="signin-btn mt-4" type="submit">
                            Submit Details
                        </Button>
                        
                    </Form>

                </Modal.Body>                   
                    
                  </Container>
                
                 
               </Col>
               <Col MD={5} className='Contactus-second' style={{ backgroundImage: "url(" + "../assets/img/contactus.png" + ")" }}>
                 <a class="fa fa-times close" onClick={()=>props.state()} ></a> 
                 <i ></i> 
                 <Container style={{paddingTop:"20px"}}>
                     <h1>Email</h1>
                     <p>rahul.rai@aibrilliance.com</p>
                 </Container>
                 <Container>
                     <h1>Contact</h1>
                     <p>+1512-921-9360</p>
                 </Container>
                 <Container>
                     <h1>Office Location</h1>
                     <p>Fremont  <br />
                      <span className='contact-span'>  39152 Guardino Dr, <br />
                    Fremont, 94538, United States</span></p>
                    <p>CHARLOTTE  <br />
                      <span className='contact-span'>  601 Beauhaven Ln, <br />
                      Waxhaw, 28173, United States</span></p>
                 </Container>
                 <Container>
                     <h1>Follow us on </h1>
                     <div className='contactus-social'>
                            <a href="https://www.facebook.com/AIBrilliance"><FontAwesome
                                name="facebook-square"
                                size="2x"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                            <a href="https://www.instagram.com/ai_brilliance/"><FontAwesome
                                name="instagram"
                                size="2x"
                                href=''
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                            <a href="https://twitter.com/?lang=en"><FontAwesome
                                name="twitter"
                                size="2x"
                                href=''
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                            <a href="https://www.linkedin.com/company/aibrilliance/"><FontAwesome
                                name="linkedin"
                                size="2x"
                                href=''
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                                <a href="https://www.linkedin.com/company/aibrilliance/"><FontAwesome
                                name="youtube"
                                size="2x"
                                href=''
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                           
                        </div>
                 </Container>
               </Col>
            </Row>
        </div>
        </div>
    )
}

export default ContactUs
