import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL
} from './types'
import axios from 'axios'

export const register_user = (userName, password, firstName, lastName) => async dispatch => {

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({ userName, password, firstName, lastName });

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, body, config)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: res.data
        })
    }

}

export const login_user = (userName, password) => async dispatch => {

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({ userName, password });

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, body, config)

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: res.data
        })
    }

}

export const get_user = () => async dispatch => {

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localhost.getItem('token')}`,
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/register`, config)

        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_USER_FAIL,
            payload: res.data
        })
    }

}