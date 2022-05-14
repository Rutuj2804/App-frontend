import {
    FETCH_CART_ITEMS_SUCCESS,
    FETCH_CART_ITEMS_FAIL,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL
} from './types'
import axios from 'axios'
import { start_loading, stop_loading } from '../actions'

export const get_cart_items = () => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/cart/get`, config)

        dispatch({
            type: FETCH_CART_ITEMS_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_CART_ITEMS_FAIL,
            payload: error.message
        })
    }

    dispatch(stop_loading())

}

export const add_to_cart = (id) => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/cart/add/${id}`, {},config)

        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: ADD_TO_CART_FAIL,
            payload: error.message
        })
    }

    dispatch(stop_loading())

}

export const remove_to_cart = (id, cartId) => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/cart/remove/${id}`, {},config)

        dispatch({
            type: REMOVE_FROM_CART_SUCCESS,
            payload: cartId
        })

    } catch (error) {
        dispatch({
            type: REMOVE_FROM_CART_FAIL,
            payload: error.message
        })
    }

    dispatch(stop_loading())

}