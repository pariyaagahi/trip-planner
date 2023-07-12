import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import SettingService from "../../Service/settingService";

export const getSettingBaseConfig = createAsyncThunk(
    "notif/getSettingBaseConfig",
    async (_, {rejectWithValue}) => {
        try {
            const response = await SettingService.getSettingBaseConfig();
            return response?.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const updateSetting = createAsyncThunk(
    "notif/updateSetting",
    async ({
               activeSms,
               activeNotification,
               activeEmail,
               activeAlarm,
               activeLoadMaster,
               activeSaveMaster,
               ipAddressValidLoadMaster,
               ipAddressValidSaveMaster
           }, {rejectWithValue}) => {
        try {
            const response = await SettingService.updateSetting(activeSms, activeNotification, activeEmail, activeAlarm, activeLoadMaster, activeSaveMaster, ipAddressValidLoadMaster, ipAddressValidSaveMaster)
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
const initialState = {
    isSubmitSettingClicked: false,
    isOpenSubmitSettingDialogBox: false,
}
const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setIsSubmitSettingClicked(state, action) {
            state.isSubmitSettingClicked = action.payload
        },
        setIsOpenSubmitSettingDialogBox(state, action) {
            state.isOpenSubmitSettingDialogBox = action.payload
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(updateSetting.fulfilled, (state, action) => {
            })
    })
});
export const {
    setIsSubmitSettingClicked,
    setIsOpenSubmitSettingDialogBox
} = settingSlice.actions

export const isSubmitSettingClicked = (state) => state.setting.isSubmitSettingClicked
export const isOpenSubmitSettingDialogBox = (state) => state.setting.isOpenSubmitSettingDialogBox
export default settingSlice.reducer;