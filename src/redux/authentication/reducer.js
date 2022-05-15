import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    FETCH_ALL_USER_SUCCESS,
    REMOVE_AUTH_ERRORS
} from './types'

const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    users: [],
    isAdmin: false,
    isAuthenticated: false,
    success: "",
    error: "",
}

const Authentication = (state=initialState, action) => {

    const { type, payload } = action

    switch(type){
        case REGISTER_USER_SUCCESS: 
            return {
                ...state,
                success: "User Registered Successfully"
            }
        case LOGIN_USER_SUCCESS: 
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                firstName: payload.user.firstName,
                lastName: payload.user.lastName,
                userName: payload.user.userName,
                isAdmin: payload.user.isAdmin,
                isAuthenticated: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName,
                userName: payload.userName,
                isAdmin: payload.isAdmin,
                isAuthenticated: true
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                firstName: '',
                lastName: '',
                userName: '',
                isAdmin: false,
                isAuthenticated: false
            }
        case FETCH_ALL_USER_SUCCESS:
            return{
                ...state,
                users: payload
            }
        case REMOVE_AUTH_ERRORS:
            return {
                ...state,
                success: "",
                error: "",
            }
        case REGISTER_USER_FAIL:
        case LOGOUT_USER_FAIL:
        case LOGIN_USER_FAIL:
        case FETCH_USER_FAIL:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }

}

export default Authentication