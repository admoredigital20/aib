import axios from "axios";
import { BOOTCAMP_LIST_FAIL, BOOTCAMP_LIST_REQUEST, BOOTCAMP_LIST_SUCCESS, HELP_LIST_FAIL, HELP_LIST_REQUEST, HELP_LIST_SUCCESS, LH } from "../constants/generalConstant";


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