import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import { } from "redux-devtools-extension"
export const store = configureStore({
    reducer: {},
}) 