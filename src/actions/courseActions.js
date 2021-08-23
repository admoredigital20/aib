import axios from "axios";
import { COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS } from "../constants/courseConstant"
import { LH } from "../constants/generalConstant";

export const listCourse = ( )=>  async (dispatch) =>{
    dispatch({
        type:COURSE_LIST_REQUEST
       
    });
  
    try{
       const {data} =await axios.get("http://3.109.5.41/app/api/courses/list")
       dispatch({type:COURSE_LIST_SUCCESS,payload:data})
       
    }catch(error){
        dispatch({type:COURSE_LIST_FAIL,payload:error.message})
       
    }
}