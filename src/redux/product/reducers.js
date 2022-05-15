import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    GET_PRODUCT_CLOTHING_SUCCESS,
    GET_PRODUCT_ELECTRONICS_SUCCESS,
    GET_PRODUCT_FOOTWEAR_SUCCESS,
    GET_ALL_PRODUCT_SUCCESS,
    GET_ALL_PRODUCT_FAIL,
    GET_PRODUCT_CLOTHING_FAIL,
    GET_PRODUCT_ELECTRONICS_FAIL,
    GET_PRODUCT_FOOTWEAR_FAIL,
    REMOVE_MESSAGES_FROM_PRODUCT,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL
} from './types'

const initialState = {
    clothing: [],
    electronics: [],
    footwear: [],
    products: [],
    product: {
        name: "",
        description: "",
        image: "",
        price: "",
        discountedPrice: "",
        discountPercent: "",
        category: {
            name: ""
        }
    },
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
        case GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                product: payload
            }
        case REMOVE_MESSAGES_FROM_PRODUCT:
            return {
                ...state,
                success: "",
                error: ""
            }
        case GET_ALL_PRODUCT_FAIL:
        case ADD_PRODUCT_FAIL:
        case GET_ALL_PRODUCT_FAIL:
        case GET_PRODUCT_CLOTHING_FAIL:
        case GET_PRODUCT_ELECTRONICS_FAIL:
        case GET_PRODUCT_FOOTWEAR_FAIL:
        case GET_PRODUCT_BY_ID_FAIL:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }

}

export default Product