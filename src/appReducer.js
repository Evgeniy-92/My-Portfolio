import {formAPI} from "./app-api";


const initialState = {
    isSent: false,
    isDisabled: false,
    openModal: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-IS-DISABLED':
            return {
                ...state,
                isDisabled: action.value
            }
        case 'SET-OPEN-MODAL':
            return {
                ...state,
                openModal: action.value
            }
        default:
            return state
    }
}

// action
export const setIsDisabled = (value) => {
    return {
        type: 'SET-IS-DISABLED',
        value
    }
}
export const setOpenModal = (value) => {
    return {
        type: 'SET-OPEN-MODAL',
        value
    }
}

// thunk
export const sendForm = (name, email, message) => (dispatch) => {
    dispatch(setIsDisabled(true))
    formAPI.post(name, email, message)
        .then(res => {
            dispatch(setIsDisabled(false))
            dispatch(setOpenModal(true))
        })

}