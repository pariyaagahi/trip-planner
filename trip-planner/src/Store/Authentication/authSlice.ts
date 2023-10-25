import {createSlice, PayloadAction} from "@reduxjs/toolkit";
//type
import {AuthState} from "../../Types/authentication";
//actions
import {login, register} from "./authAction";

const initialState: AuthState = {
    isLoginTabClicked: false,
    isRegisterTabClicked: false
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoginTabClicked(state, action: PayloadAction<boolean>) {
            state.isLoginTabClicked = action.payload
        },
        setIsRegisterTabClicked(state, action: PayloadAction<boolean>) {
            state.isRegisterTabClicked = action.payload
        }
    },
    extraReducers:
        (builder => {
            builder.addCase(login.fulfilled, ((state, action) => {
            }))
            builder.addCase(register.fulfilled, ((state, action) => {
            }))
        })

})
export const {setIsLoginTabClicked, setIsRegisterTabClicked} = authSlice.actions
export default authSlice.reducer;