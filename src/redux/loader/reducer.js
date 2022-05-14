import {
    LOADING_STARTED,
    LOADING_STOPPED
} from './types'

const initialState = {
    loading: 0
}

const Loader = (state=initialState, action) => {

    const { type } = action

    switch(type){
        case LOADING_STARTED: 
            return {
                ...state,
                loading: state.loading + 1
            }
        case LOADING_STOPPED:
            return {
                ...state,
                loading: state.loading - 1
            }
        default:
            return state;
    }

}

export default Loader