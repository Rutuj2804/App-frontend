import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    GET_PRODUCT_CLOTHING_SUCCESS,
    GET_PRODUCT_ELECTRONICS_SUCCESS,
    GET_PRODUCT_FOOTWEAR_SUCCESS,
    GET_ALL_PRODUCT_SUCCESS,
} from './types'

const initialState = {
    clothing: [],
    electronics: [],
    footwear: [],
    products: [],
    success: "",
    error: ""
}

const Product = (state=initialState, action) => {

    const { type, payload } = action

    switch(type){
        case ADD_PRODUCT_SUCCESS: 
            return {
                ...state,
                success: "Successfully Added Product"
            }
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                error: payload
            }
        case GET_PRODUCT_CLOTHING_SUCCESS:
            return {
                ...state,
                clothing: payload
            }
        case GET_PRODUCT_ELECTRONICS_SUCCESS:
            return {
                ...state,
                electronics: payload
            }
        case GET_PRODUCT_FOOTWEAR_SUCCESS:
            return {
                ...state,
                footwear: payload
            }
        case GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }

}

export default Product