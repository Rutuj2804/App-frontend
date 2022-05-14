import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAIL
} from './types'

const initialState = {
    categories: []
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
        default:
            return state;
    }

}

export default Category