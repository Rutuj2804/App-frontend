import {
    
} from './types'

const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    place: '',
    designation: '',
    isAuthenticated: false
}

const Authentication = (state=initialState, action) => {

    const { type, payload } = action

    switch(type){
        
        default:
            return state;
    }

}

export default Authentication