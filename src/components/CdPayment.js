import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CdNav from './CdNav'
import { useSelector } from 'react-redux';
import { listCourse } from '../actions/courseActions';
import { useDispatch } from 'react-redux';
import LoadingBox from './LoadingBox';
import { paymentAction } from '../actions/generalAction';
import MessageBox from './MessageBox';
import { withRouter } from 'react-router';
import Signin from './Signin';


const CdPayment=(history)=> {
    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;
    const paymentReducers=useSelector(state=>state.paymentReducers)
    const {loading:loadingPayment,error:errorPayment,paymentStatus}=paymentReducers
    const userSignin=useSelector(state=>state.userSignin)
    const {loading:userLoading,error:userError, userInfo} = userSignin
    const [sdkReady,setSdkReady] =useState(false)
    const location = useLocation()
    const cid = location.state?.cid2

   
    const [sc, setSc] = useState([])
    const dispatch= useDispatch()
    // const course_id =
    // const course_name
    // const price
    useEffect(() => {      
        dispatch(listCourse())
       
      }, [dispatch]);

    useEffect(() => {
        if (!loading) {
            if (!error) {
                const IC = courses.results.data.filter(elm => {
                    return elm.id == cid
                })
                setSc(IC[0])

            }
        }
        
    }, [courses])
    // useEffect(()=>{
    //     const addPayPalScript = async()=>{
    //         const {data} =await axios.get('http://192.241.138.220/app/api/payment')
    //         const script =document.createElement('script')
    //         script.type="text/javascript";
    //         script.src=`https://www.paypal.com/sdk/js?client-id=${data}`
    //         script.async =true;
    //         script.onload=()=>{
    //             setSdkReady(true)
    //         }
    //         document.body.appendChild(script)
    //     }
    //      if(!window.paypal){
    //          addPayPalScript()
    //      }else{
    //          setSdkReady(true)
    //      }
    //  },[sdkReady])

     const successPaymentHandler=()=>{

     }
     const payment=()=>{
        dispatch(paymentAction(sc.id,sc.name,sc.price))
          
     
                 //  history.push('/')   
     }
     if(paymentStatus){
        // history.push(paymentStatus.payment_redirect_page)
        window.location.href=paymentStatus.payment_redirect_page
        

      }
          
      
        
     
   
    return (
        <div>
            <CdNav />
            <section className="cdp-sec1">
                <Container className="cd-payment">
                    <Row>
                        <Col md={7} className="cdp-col1">
                            <Row >
                                <Col md={12} className="cd1-breadcrumbs" >
                                    <h6 > Bootcamp &gt; {sc.name} &gt; Course Details </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="cdp-os">
                                    <h5>Order summary</h5>
                                </Col>
                            </Row>
                            <Row className="Course-Name mt-4">
                                <Col md={6}>
                                    <h4>Course Name</h4>
                                </Col>
                                <Col md={6}>
                                    <h4 className="cdp-price">Price</h4>
                                </Col>
                            </Row>
                            <hr className="cdp-hr" />
                            <Row>
                                <Col md={6} className="cdp-cn">
                                    <h4>{sc.name}:</h4>
                                    <h5>{sc.sub_name}</h5>
                                    <p className="mt-4 mb-1 cdp-modules"><strong>4</strong> Modules • <strong>4</strong> Mini Project</p>
                                    <p className="cdp-modules"><strong>1</strong> Major Project • <strong>36h 15m</strong> total length</p>
                                </Col>
                                <Col md={6} className="cdp-price">
                                    <h5>{sc.price}.<span className="dbl-zero">00</span></h5>
                                </Col>
                            </Row>
                            <Row>
                                <div className="cdp-radio cdp-active">
                                    <div class="form-check">
                                        <input class="form-check-input cdp-radio-btn" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                        <label class="form-check-label cdp-batch" for="flexRadioDefault1">
                                            Batch 01 - 12<span className="dbl-zero">th</span> Jul 2021
                                        </label><br />
                                        <label class="form-check-label cdp-slot" for="flexRadioDefault1">
                                            Slots available 12/25
                                        </label>
                                    </div>
                                </div>
                                <div className="cdp-radio2">
                                    <div class="form-check">
                                        <input class="form-check-input cdp-radio-btn" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label cdp-batch" for="flexRadioDefault1">
                                            Batch 02 - 12<span className="dbl-zero">th</span> Sep 2021
                                        </label><br />
                                        <label class="form-check-label cdp-slot" for="flexRadioDefault1">
                                            Slots available 12/25
                                        </label>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }} className="cdp-col2">
                            <Row className="cdp-col2-box">
                                <Col md={12} className="col-coupon">
                                    <h6>Have a Coupon ?</h6>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col md={8} className="cpn-input">
                                    <Form.Control type="text" placeholder="Enter the valid coupon" />
                                </Col>
                                <Col md={4}>
                                    <Button className="cpn-apply-btn">Apply</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="cdp-col2-hr mt-2">
                                    <hr />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <h6 className="cdp-box-name">Subtotal</h6>
                                </Col>
                                <Col md={6}>
                                    <h6 className="cdp-box-price">{sc.price}<span className="dbl-zero">00</span></h6>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <h6 className="cdp-box-name">Subtotal</h6>
                                </Col>
                                <Col md={6}>
                                    <h6 className="cdp-box-price cdp-green-price">-$110.<span className="dbl-zero">00</span></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <h6 className="cdp-box-name">Subtotal</h6>
                                </Col>
                                <Col md={6}>
                                    <h6 className="cdp-box-price">$10.<span className="dbl-zero">95</span></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="cdp-col2-hr">
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <h5  className="cdp-box-total">Total (including tax)</h5>
                                </Col>
                                <Col md={6}>
                                    <h6 className="cdp-box-price">$10.<span className="dbl-zero">95</span></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="cdp-col2-hr">
                                   {/* {!sdkReady? <LoadingBox></LoadingBox>: */}
                                   {/* <PayPalButton  onSuccess={successPaymentHandler} onClick={payment}/> */}
                                   {userInfo?(
                                      <button className="paypal"  onClick={payment}>Paypal</button>
                                   ):
                                   (
                                    //    <button className='paypal'>Sign in to purchase</button>
                                    <Signin className='paypal'/>
                                   )}
                                    
                                  
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default withRouter(CdPayment) 