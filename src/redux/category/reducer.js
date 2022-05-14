import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAIL
} from './types'

const initialState = {
    categories: [],
    error: ""
}

const Category = (state=initialState, action) => {

    const { type, payload } = action

    switch(type){
        case FETCH_CATEGORIES_SUCCESS: 
            return {
                ...state,
                categories: payload
            }
        case FETCH_CATEGORIES_FAIL:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }

}

export default Category