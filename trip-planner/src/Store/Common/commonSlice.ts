import {createSlice, PayloadAction} from "@reduxjs/toolkit";
//types
import {BaseState} from "../../Types/common";
import {getBaseData} from "./commonAction";

const initialState: BaseState = {
    isOpenSnackBar: false,
    snackBarMessage: '',
    baseData: []
}
export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setIsOpenSnackBar(state, action: PayloadAction<boolean>) {
            state.isOpenSnackBar = action.payload
        },
        setSnackbarMessage(state, action: PayloadAction<string>) {
            state.snackBarMessage = action.payload
        },
    },
    extraReducers: (builder => {
        builder.addCase(getBaseData.fulfilled, (((state, action) => {
            state.baseData = action?.payload
        })))
    })
})
export const {
    setSnackbarMessage,
    setIsOpenSnackBar
} = commonSlice.actions
export default commonSlice.reducer