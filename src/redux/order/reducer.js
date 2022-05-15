import {
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,
    REMOVE_MESSAGES_FROM_ORDER
} from './types'

const initialState = {
    cart: [],
    success: "",
    error: ""
}

const Order = (state=initialState, action) => {

    const { type, payload } = action

    switch(type){
        case PLACE_ORDER_SUCCESS:
            return {
                ...state,
                success: "Order Successfully Placed"
            }
        case PLACE_ORDER_FAIL:
            return {
                ...state,
                error: payload
            }
        case REMOVE_MESSAGES_FROM_ORDER:
            return {
                ...state,
                success: "",
                error: ""
            }
        default:
            return state;
    }

}

export default Order