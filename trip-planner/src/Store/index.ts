import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from '@reduxjs/toolkit'
import authReducer from "./Authentication/authSlice";
import commonReducer from "./Common/commonSlice";

const rootReducer = combineReducers({
    authentication: authReducer,
    common: commonReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend()
})

export type AppDispatch = typeof store.dispatch