import {configureStore} from '@reduxjs/toolkit'
import {getDefaultMiddleware} from '@reduxjs/toolkit'
//slices (reducers)
import authReducer from "../Slices/Authentication/authSlice";
import notificationReducer from "../Slices/Notification/notifSlice"
import settingReducer from './../Slices/Setting/settingSlice'
import dashboardReducer from "../Slices/Dashboard/dashboardSlice";
import mainReducer from "../Slices/MainLayout/MainSlice";

const reducer = {
    auth: authReducer,
    main : mainReducer,
    dashboard: dashboardReducer,
    notification : notificationReducer,
    setting: settingReducer,
}
export const store = configureStore({
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
    reducer: reducer
});