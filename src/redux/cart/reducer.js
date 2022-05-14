import {
    FETCH_CART_ITEMS_SUCCESS,
    FETCH_CART_ITEMS_FAIL,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL
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
                cart: payload,
            }
        case ADD_TO_CART_SUCCESS: 
            return {
                ...state,
                success: "Product Successfully Added To Cart"
            }
        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                cart: state.cart.filter(val=>val._id!==payload),
                success: "Product Successfully Removed From Cart"
            }
        case REMOVE_FROM_CART_FAIL:
        case ADD_TO_CART_FAIL:
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