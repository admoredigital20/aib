import axios from "axios";
import { COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS } from "../constants/courseConstant"
import { LH, PAYMENT_FAIL, PAYMENT_REQUEST } from "../constants/generalConstant";

export const listCourse = ( )=>  async (dispatch) =>{
    dispatch({
        type:COURSE_LIST_REQUEST
       
    });
  
    try{
       const {data} =await axios.get(`${LH}/app/api/courses/list`)
       dispatch({type:COURSE_LIST_SUCCESS,payload:data})
       
    }catch(error){
        dispatch({type:COURSE_LIST_FAIL,payload:error.message})
       
    }
}

export const getPayment=({course_id,course_name,price})=>async(dispatch)=>{
    dispatch({
        type:PAYMENT_REQUEST,payload:course_id,course_name,price
    })
    try{
        const {data}=await axios.get(`${LH}/app/api/payment`,course_id,course_name,price)
        dispatch({type:COURSE_LIST_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:PAYMENT_FAIL,payload:error.message})
    }
}