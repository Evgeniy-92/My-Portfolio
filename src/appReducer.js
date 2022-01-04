import {formAPI} from "./app-api";


const initialState = {
    isSent: false,
    isDisabled: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-IS-SENT':
            return {
                ...state,
                isSent: action.value
            }
        case 'SET-IS-DISABLED':
            return {
                ...state,
                isDisabled: action.value
            }
        default:
            return state
    }
}

// action
export const setIsSent = (value) => {
    return {
        type: 'SET-IS-SENT',
        value
    }
}
export const setIsDisabled = (value) => {
    return {
        type: 'SET-IS-DISABLED',
        value
    }
}

// thunk
export const sendForm = (name, email, message) => (dispatch) => {
    dispatch(setIsDisabled(true))
    formAPI.post(name, email, message)
        .then(res => {
            dispatch(setIsSent(true))
            dispatch(setIsDisabled(false))
        })
}