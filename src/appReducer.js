import {formAPI} from "./app-api";


const initialState = {
    isDisabled: false,
    openModal: false,
    setError: false,
    typeModal: 'ok' || 'error'
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
        case 'SET-ERROR':
            return {
                ...state,
                setError: action.value
            }
        case 'SET-TYPE-MODAL':
            return {
                ...state,
                typeModal: action.value
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
export const setError = (value) => {
    return {
        type: 'SET-ERROR',
        value
    }
}
export const setTypeModal = (value) => {
    return {
        type: 'SET-TYPE-MODAL',
        value
    }
}

// thunk
export const sendForm = (name, email, message) => (dispatch) => {
    dispatch(setIsDisabled(true))
    formAPI.post(name, email, message)
        .then(res => {
            dispatch(setIsDisabled(false))
            dispatch(setTypeModal('ok'))
            dispatch(setOpenModal(true))
        })
        .catch(err => {
            dispatch(setTypeModal('error'))
            dispatch(setOpenModal(true))
        })

}