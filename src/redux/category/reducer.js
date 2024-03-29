import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAIL,
    REMOVE_MESSAGES_FROM_CATEGORY
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
        case REMOVE_MESSAGES_FROM_CATEGORY: 
            return{
                ...state,
                error: ""
            }
        default:
            return state;
    }

}

export default Category