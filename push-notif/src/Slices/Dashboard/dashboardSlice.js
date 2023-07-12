import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import DashboardService from "../../Service/dashboardService";

export const loadDashboard = createAsyncThunk(
    "dashboard/loadDashboard",
    async ({scheduleChoice, startDateSend, endDateSend}, {rejectWithValue}) => {
        try {
            const response = await DashboardService.loadDashboard(scheduleChoice, startDateSend, endDateSend);
            return response?.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

function getServiceTotalCount(baseData, serviceKey) {
    return baseData?.filter((item) => item?.serviceType === serviceKey)[0]?.failedCount
        + baseData?.filter((item) => item?.serviceType === serviceKey)[0]?.successCount
}

function getServiceGaugePercent(baseData, serviceKey) {
    const data = baseData?.filter((item) => item?.serviceType === serviceKey)[0]
    return Math.trunc(((data?.successCount) / (data?.successCount + data?.failedCount)) * 100)
}

const initialState = {
    dashboardBaseData: [],
    smsTotalCount: '',
    emailTotalCount: '',
    notificationTotalCount: '',
    alarmTotalCount: '',
    smsGaugePercent: '',
    emailGaugePercent: '',
    notificationGaugePercent: '',
    alarmGaugePercent: '',

}
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(loadDashboard.fulfilled, (state, action) => {
                state.dashboardBaseData = action.payload
                state.smsTotalCount = getServiceTotalCount(action.payload, 0)
                state.emailTotalCount = getServiceTotalCount(action.payload, 1)
                state.notificationTotalCount = getServiceTotalCount(action.payload, 2)
                state.alarmTotalCount = getServiceTotalCount(action.payload, 3)
                state.smsGaugePercent = getServiceGaugePercent(action.payload, 0)
                state.emailGaugePercent = getServiceGaugePercent(action.payload, 1)
                state.notificationGaugePercent = getServiceGaugePercent(action.payload, 2)
                state.alarmGaugePercent = getServiceGaugePercent(action.payload, 3)
            })
    })
});
export const {} = dashboardSlice.actions
export const dashboardBaseData = (state) => state.dashboard.dashboardBaseData
export const smsTotalCount = (state) => state.dashboard.smsTotalCount
export const emailTotalCount = (state) => state.dashboard.emailTotalCount
export const notificationTotalCount = (state) => state.dashboard.notificationTotalCount
export const alarmTotalCount = (state) => state.dashboard.alarmTotalCount
export const smsGaugePercent = (state) => state.dashboard.smsGaugePercent
export const emailGaugePercent = (state) => state.dashboard.emailGaugePercent
export const notificationGaugePercent = (state) => state.dashboard.notificationGaugePercent
export const alarmGaugePercent = (state) => state.dashboard.alarmGaugePercent
export default dashboardSlice.reducer;