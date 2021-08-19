import { COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS } from "../constants/courseConstant";

export const courseListReducer = (state ={loading:true,courses:[] },action) =>{
    switch(action.type){
        case COURSE_LIST_REQUEST:
            return {loading:true};
        case COURSE_LIST_SUCCESS:
            return {loading:false,courses:action.payload}
        case COURSE_LIST_FAIL:
            return {loading:false,error:action.payload}    
         default:
             return state;   
    }
}