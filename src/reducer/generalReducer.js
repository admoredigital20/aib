import { BOOTCAMP_LIST_FAIL, BOOTCAMP_LIST_REQUEST, BOOTCAMP_LIST_SUCCESS } from "../constants/generalConstant";

export const bootcampListReducer = (state ={loading:true },action) =>{
    switch(action.type){
        case BOOTCAMP_LIST_REQUEST:
            return {loading:true};
        case BOOTCAMP_LIST_SUCCESS:
            return {loading:false,bootcamps:action.payload}
        case BOOTCAMP_LIST_FAIL:
            return {loading:false,error:action.payload}    
         default:
             return state;   
    }
}