import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL
} from './types'

const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    isAuthenticated: false
}

const Authentication = (state=initialState, action) => {

    const { type, payload } = action

    switch(type){
        case REGISTER_USER_SUCCESS: 
            return {
                ...state,
            }
        case LOGIN_USER_SUCCESS: 
            return {
                ...state,
                firstName: payload.user.firstName,
                lastName: payload.user.lastName,
                userName: payload.user.userName,
                isAuthenticated: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                firstName: payload.user.firstName,
                lastName: payload.user.lastName,
                userName: payload.user.userName,
                isAuthenticated: true
            }
        case REGISTER_USER_FAIL:
        case LOGIN_USER_FAIL:
        case FETCH_USER_FAIL:
        default:
            return state;
    }

}

export default Authentication