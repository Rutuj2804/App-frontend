import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    FETCH_ALL_USER_SUCCESS,
    FETCH_ALL_USER_FAIL,
    REMOVE_AUTH_ERRORS
} from './types'
import axios from 'axios'
import { start_loading, stop_loading } from '../actions'

export const register_user = (userName, password, firstName, lastName, navigate) => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({ userName, password, firstName, lastName });

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, body, config)
console.log(res.data);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data
        })

        navigate('/login')

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.error ? error.response.data.error : error.message
        })
    }

    setTimeout(()=>dispatch(remove_errors()), 5000)

    dispatch(stop_loading())

}

export const login_user = (userName, password, navigate) => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({ userName, password });

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, body, config)
        console.log(res.data);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        })

        navigate('/')

    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response.data.error ? error.response.data.error : error.message 
        })
    }

    setTimeout(()=>dispatch(remove_errors()), 5000)

    dispatch(stop_loading())

}

export const get_user = () => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`,
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/`, config)

        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        console.log(error);
        dispatch({
            type: FETCH_USER_FAIL,
            payload: error.message
        })
    }

    setTimeout(()=>dispatch(remove_errors()), 5000)

    dispatch(stop_loading())

}

export const get_all_user = () => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`,
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/users`, config)

        dispatch({
            type: FETCH_ALL_USER_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        console.log(error);
        dispatch({
            type: FETCH_ALL_USER_FAIL,
            payload: error.message
        })
    }

    setTimeout(()=>dispatch(remove_errors()), 5000)

    dispatch(stop_loading())

}

export const logout_user = (navigate) => async dispatch => {

    dispatch(start_loading())

    try {
        
        localStorage.removeItem('token')

        dispatch({
            type: LOGOUT_USER_SUCCESS
        })

        navigate('/login')

    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGOUT_USER_FAIL
        })
    }

    dispatch(stop_loading())

}

const remove_errors = () => async dispatch => {
    dispatch({
        type: REMOVE_AUTH_ERRORS
    })
}