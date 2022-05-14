import {
    LOADING_STARTED,
    LOADING_STOPPED
} from './types'

export const start_loading = () => async dispatch => {
    dispatch({
        type: LOADING_STARTED
    })
}

export const stop_loading = () => async dispatch => {
    dispatch({
        type: LOADING_STOPPED
    })
}