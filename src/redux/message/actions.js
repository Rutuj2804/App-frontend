import {
    MESSAGE_SET,
    REMOVE_MESSAGE
} from './types'

export const add_message = (message, mood) => async dispatch => {

    const body = { message, mood }

    try {

        dispatch({
            type: MESSAGE_SET,
            payload: body
        })

        setTimeout(()=>{
            dispatch({
                type: REMOVE_MESSAGE,
            }) 
        }, 5000)

    } catch (error) {
        console.log(error);
    }

}