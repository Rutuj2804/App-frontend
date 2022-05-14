import {
    MESSAGE_SET,
    REMOVE_MESSAGE
} from './types'

const initialState = {
    message: "hello",
    mood: 1
}

const Message = (state=initialState, action) => {

    const { type, payload } = action

    switch(type){
        case MESSAGE_SET: 
            return {
                ...state,
                message: payload.message,
                mood: payload.mood
            }
        case REMOVE_MESSAGE:
            return {
                ...state,
                message: ''
            }
        default:
            return state;
    }

}

export default Message