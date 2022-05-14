import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    GET_PRODUCT_CLOTHING_SUCCESS,
    GET_PRODUCT_CLOTHING_FAIL,
    GET_PRODUCT_ELECTRONICS_SUCCESS,
    GET_PRODUCT_ELECTRONICS_FAIL,
    GET_PRODUCT_FOOTWEAR_SUCCESS,
    GET_PRODUCT_FOOTWEAR_FAIL,
    GET_ALL_PRODUCT_SUCCESS,
    GET_ALL_PRODUCT_FAIL
} from './types'
import axios from 'axios'
import { start_loading, stop_loading } from '../actions'

export const add_product = (name, description, category, price, discountedPrice, discountPercent, image, navigate) => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    const body = new FormData();
    body.append('name', name)
    body.append('description', description)
    body.append('category', category)
    body.append('price', price)
    body.append('discountedPrice', discountedPrice)
    body.append('discountPercent', discountPercent)
    body.append('image', image, image.name)

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/products/create`, body, config)

        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_FAIL,
            payload: error.message
        })
    }

    dispatch(stop_loading())

}

export const get_product_category_wise = () => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/few/627e8aeed9997fdff5328ddb`, config)

        dispatch({
            type: GET_PRODUCT_CLOTHING_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: GET_PRODUCT_CLOTHING_FAIL,
            payload: error.message
        })
    }

    dispatch(stop_loading())

}

export const get_product_electronics = () => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/few/627f79f3ef3a76376a27399c`, config)

        dispatch({
            type: GET_PRODUCT_ELECTRONICS_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: GET_PRODUCT_ELECTRONICS_FAIL,
            payload: error.message
        })
    }

    dispatch(stop_loading())

}

export const get_product_footwear = () => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/few/627f7a11ef3a76376a2739a0`, config)

        dispatch({
            type: GET_PRODUCT_FOOTWEAR_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: GET_PRODUCT_FOOTWEAR_FAIL,
            payload: error.message
        })
    }

    dispatch(stop_loading())

}

export const get_products = () => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/getall/`, config)

        dispatch({
            type: GET_ALL_PRODUCT_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCT_FAIL,
            payload: error.message
        })
    }

    dispatch(stop_loading())

}