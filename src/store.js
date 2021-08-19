import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { courseListReducer } from "./reducer/courseReducer";
import { bootcampListReducer } from "./reducer/generalReducer";
import { userRegisterReducer, userSigninReducer } from "./reducer/userReducer";

const initialState= {
  userSignin:{
    userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
  }
};
const reducer = combineReducers({
  courseList:courseListReducer,
  bootcampList:bootcampListReducer,
  userSignin:userSigninReducer,
  userRegister:userRegisterReducer,

})

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store =createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk) ));

export default store