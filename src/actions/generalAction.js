import axios from "axios";
import { BOOTCAMP_LIST_FAIL, BOOTCAMP_LIST_REQUEST, BOOTCAMP_LIST_SUCCESS, CONTACTUS_FAIL, CONTACTUS_REQUEST, CONTACTUS_SUCCESS, HELP_LIST_FAIL, HELP_LIST_REQUEST, HELP_LIST_SUCCESS, HIRESTUDENT_FAIL, HIRESTUDENT_REQUEST, HIRESTUDENT_SUCCESS, LH, PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS, SLIDER_EMAIL_FAIL, SLIDER_EMAIL_REQUEST, SLIDER_EMAIL_SUCCESS } from "../constants/generalConstant";


export const listBootcamp = ( )=>  async (dispatch) =>{
    dispatch({
        type:BOOTCAMP_LIST_REQUEST
       
    });
  
    try{
       const {data} =await axios.get(`${LH}/app/api/bootcamp/list`)
       dispatch({type:BOOTCAMP_LIST_SUCCESS,payload:data})
       
    }catch(error){
        dispatch({type:BOOTCAMP_LIST_FAIL,payload:error.message})
       
    }
}


export const helpList = (name,email,query) =>async(dispatch)=>{
    dispatch({type:HELP_LIST_REQUEST,payload:name,email,query});

    try{
        const {data} =await axios.post(`${LH}/app/api/help`,{name,email,query})
        dispatch({type:HELP_LIST_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:HELP_LIST_FAIL,payload:error.message})
    }
}


export const contactList =(name,email,query,phone_number)=>async(dispatch)=>{
    dispatch({type:CONTACTUS_REQUEST,payload:name,email,query,phone_number})
    try{
        const {data}=await axios.post(`${LH}/app/api/contact/us`,{name,email,query,phone_number})
        dispatch({type:CONTACTUS_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:CONTACTUS_FAIL,payload:error.message})
    }
}


export const sliderEmail =(email)=>async(dispatch)=>{
    dispatch({type:SLIDER_EMAIL_REQUEST,payload:email})
    try{
        const {data}=await axios.post(`${LH}/app/api/know/more`,{email})
        dispatch({type:SLIDER_EMAIL_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:SLIDER_EMAIL_FAIL,payload:error.message})
    }
}

export const paymentAction=(course_id,course_name,price)=>async(dispatch)=>{
    dispatch({type:PAYMENT_REQUEST,payload:course_id,course_name,price})
    try{
        const {data}=await axios.post(`${LH}/app/api/payment`,{course_id,course_name,price})
        dispatch({type:PAYMENT_SUCCESS,payload:data.results.data})
    }catch(error){
        dispatch({type:PAYMENT_FAIL,payload:error.message})
    }
 }

 export const hireStudent=(name,email,query,phone_number)=>async(dispatch)=>{
     dispatch({type:HIRESTUDENT_REQUEST,payload:name,email,query,phone_number})
     try{
        const {data}= await axios.post(`${LH}/app/api/hire/student`,{name,email,query,phone_number}) 
        dispatch({type:HIRESTUDENT_SUCCESS,payload:data})
     }catch(error){
         dispatch({type:HIRESTUDENT_FAIL,payload:error.message})
     }
 }