import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAIL,
    REMOVE_MESSAGES_FROM_CATEGORY
} from './types'
import axios from 'axios'
import { start_loading, stop_loading } from '../actions'

export const fetch_categories = () => async dispatch => {

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    try {
        
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/category/get/`, config)

        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_CATEGORIES_FAIL,
            payload: error.message
        })
    }

    setTimeout(()=>dispatch(remove_messages()), 5000)

    dispatch(stop_loading())

}

const remove_messages = () => async dispatch => {
    dispatch({
        type: REMOVE_MESSAGES_FROM_CATEGORY
    })
}