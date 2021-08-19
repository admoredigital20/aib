import axios from "axios";
import { BOOTCAMP_LIST_FAIL, BOOTCAMP_LIST_REQUEST, BOOTCAMP_LIST_SUCCESS, LH } from "../constants/generalConstant";


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