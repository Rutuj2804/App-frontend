import {
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,
    REMOVE_MESSAGES_FROM_ORDER
} from './types'
import axios from 'axios'
import { start_loading, stop_loading, get_cart_items } from '../actions'

export const place_order = (products, address) => async dispatch =>{

    dispatch(start_loading())

    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${localStorage.getItem('token')}`
        }
    }

    const body = JSON.stringify({ products, address })

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/order/place`, body, config)
console.log(res.data);
        dispatch({
            type: PLACE_ORDER_SUCCESS,
            payload: res.data
        })

        dispatch(get_cart_items())

    } catch (error) {
        dispatch({
            type: PLACE_ORDER_FAIL,
            payload: error.message
        })
    }
    
    setTimeout(()=>dispatch(remove_messages()), 5000)

    dispatch(stop_loading())

}

const remove_messages = () => async dispatch => {
    dispatch({
        type: REMOVE_MESSAGES_FROM_ORDER
    })
}