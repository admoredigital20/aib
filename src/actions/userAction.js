import axios from "axios";
import { LH } from "../constants/generalConstant";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

    try {
        const { data } = await axios.post(`${LH}/app/api/login`, { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data.results.data))
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
        console.log('failed');
    }
}


export const register = (username, password, email) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload:{username, password, email}});
    try {
        const { data } = await axios.post(`${LH}/app/api/signup`, {username, password, email})
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_SIGNOUT })
}