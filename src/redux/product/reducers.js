import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL
} from './types'

const initialState = {
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
        default:
            return state;
    }

}

export default Product