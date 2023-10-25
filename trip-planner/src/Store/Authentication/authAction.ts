import {createAsyncThunk} from "@reduxjs/toolkit";
//type
import {LoginInputType, RegisterInputType} from "../../Types/authentication";
import {MessageType} from "../../Types/common";
//service
import AuthService from "../../Service/authService";

//<outputType , inputType , errorType>
export const login = createAsyncThunk<void, LoginInputType, { rejectValue: MessageType }>("authentication/login",
    async (input, thunkApi) => {
        try {
            const response = await AuthService.login(input)
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue({message: ''})
        }
    })

export const register = createAsyncThunk<void, RegisterInputType, { rejectValue: MessageType }>("authentication/register",
    async (input, thunkApi) => {
        try {
            const response = await AuthService.register(input)
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue({message: ''})
        }
    })