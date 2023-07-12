import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from '../../Service/authService'

export const getCaptcha = createAsyncThunk(
    "auth/getCaptcha",
    async (_, {rejectWithValue}) => {
        try {
            const response = await AuthService.getCaptcha();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async ({username, password, captchaId, captchaInput}, {rejectWithValue}) => {
        try {
            const response = await AuthService.login(username, password, captchaId, captchaInput);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const refreshToken = createAsyncThunk(
    "auth/refreshToken",
    async (_, {rejectWithValue}) => {
        try {
            const response = await AuthService.refreshToken();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const logOut = createAsyncThunk(
    "auth/logOut",
    async (_, {rejectWithValue}) => {
        try {
            const response = await AuthService.logOut();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const initialState = {
    captcha: {},
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(getCaptcha.fulfilled, (state, action) => {
                    state.captcha = action.payload
                })

        },

});

export const getCaptchaValue = (state) => state.auth.captcha

const {reducer} = authSlice;
export default reducer;