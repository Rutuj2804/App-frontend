import {
    FETCH_CART_ITEMS_SUCCESS,
    FETCH_CART_ITEMS_FAIL
} from './types'

const initialState = {
    cart: [],
    success: "",
    error: ""
}

const Cart = (state=initialState, action) => {

    const { type, payload } = action

    switch(type){
        case FETCH_CART_ITEMS_SUCCESS:
            return {
                ...state,
                cart: payload
            }
        case FETCH_CART_ITEMS_FAIL:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }

}

export default Cart