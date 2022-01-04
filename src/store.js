import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))