import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL
} from './types'
import axios from 'axios'
import { start_loading, stop_loading, add_message } from '../actions'

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

        // dispatch(add_message("Successfully Added Product", 1))

    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_FAIL,
            payload: error.message
        })

        // dispatch(add_message(error.message,0))
    }

    dispatch(stop_loading())

}