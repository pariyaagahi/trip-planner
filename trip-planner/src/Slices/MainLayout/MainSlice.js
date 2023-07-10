import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import NotifService from "../../Service/notifService";
import {AppString} from "../../Assets/String/AppString";
import {getSettingBaseConfig} from "../Setting/settingSlice";
import {totalPermissions} from "../../App/permissions";

export const loadData = createAsyncThunk(
    "notif/loadData",
    async (_, {rejectWithValue}) => {
        try {
            const response = await NotifService.loadData();
            return response?.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const loadTable = createAsyncThunk(
    "notif/loadTable",
    async ({
               page, size, userId, serviceType, startDateSend, endDateSend
           }, {
               rejectWithValue
           }) => {
        try {
            const response = await NotifService.loadTable(page, size, userId, serviceType, startDateSend, endDateSend);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getUserInfo = createAsyncThunk(
    "auth/getInfo",
    async (_, {rejectWithValue}) => {
        try {
            const response = await NotifService.getUserInfo();
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

function getOptions(baseData, baseType) {
    return baseData.filter((a) => a.baseType == baseType)
        .map(function (a, i) {
            return a.lov
        })[0]
}

function filterTableTimeRange(notifTableData) {
    notifTableData.map((item) => {
        const startTime = new Date(item.startTimeSend)
        const endTime = new Date(item.endTimeSend)
        item.tableStartTime =
            startTime.getHours() +
            ':' +
            startTime.getMinutes()

        item.tableEndTime =
            endTime.getHours() +
            ':' +
            endTime.getMinutes()

    })
}

function filterTableDateRange(notifTableData) {
    notifTableData.map((item) => {
        const startDate = new Date(item.startDateSend)
        const endDate = new Date(item.endDateSend)
        item.tableStartDate = item.startDateSend != null ? startDate.toLocaleDateString('fa', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        }) : '_'
        item.tableEndDate = item.startDateSend != null ? endDate.toLocaleDateString('fa', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        }) : '_'
    })
}

function calculateTotalNotifCount(notifTableData) {
    notifTableData.map((item) => {
        item.totalCount = ` ${item?.successCount + item?.failedCount} / ${item?.successCount} `
    })
}

function filterTableData(notifTableData) {
    filterTableDateRange(notifTableData)
    filterTableTimeRange(notifTableData)
    calculateTotalNotifCount(notifTableData)
    return notifTableData
}

const initialState = {
    isBaseDataLoaded: false,
    tableDataIsLoading: false,
    hasNextPage: false,
    isActiveSms: false,
    isActiveEmail: false,
    isActiveNotification: false,
    isActiveAlarm: false,
    isActiveLoadMaster: false,
    isActiveSaveMaster: false,
    ipAddressValidLoadMaster: '',
    ipAddressValidSaveMaster: '',
    hasUpdateSettingPermission: false,
    hasPauseResumeRequestPermission: false,
    hasDeleteRequestPermission: false,
    hasLoadDashboardPermission: false,
    hasLoadTablePermission: false,
    hasLoadSettingPermission: false,
    hasCancelRequestPermission: false,
    hasSaveRequestPermission: false,
    userInformation: {},
    permissions: [],
    dashboardScheduleChoice: [],
    tableData: [],
    baseData: [],
    serviceType: [],
    appType: [],
    businessCategory: [],
    psp: [],
    province: [],
    merchantType: [],
    residencyType: [],
    terminalType: [],
    status: [],
    sender: [],
}
const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsActiveSms(state, action) {
            state.isActiveSms = action.payload
        },
        setIsActiveEmail(state, action) {
            state.isActiveEmail = action.payload
        },
        setIsActiveNotification(state, action) {
            state.isActiveNotification = action.payload
        },
        setIsActiveAlarm(state, action) {
            state.isActiveAlarm = action.payload
        },
        setIsActiveLoadMaster(state, action) {
            state.isActiveLoadMaster = action.payload
        },
        setIsActiveSaveMaster(state, action) {
            state.isActiveSaveMaster = action.payload
        },
        setIpAddressValidLoadMaster(state, action) {
            state.ipAddressValidLoadMaster = action.payload
        },
        setIpAddressValidSaveMaster(state, action) {
            state.ipAddressValidSaveMaster = action.payload
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(loadData.pending, ((state, action) => {
                state.tableDataIsLoading = true
            }))
            .addCase(loadData.fulfilled, (state, action) => {
                state.baseData = action.payload
                state.isBaseDataLoaded = true
                state.serviceType = getOptions(action.payload, AppString.ServiceType)
                state.appType = getOptions(action.payload, AppString.AppType)
                state.businessCategory = getOptions(action.payload, AppString.BusinessCategory)
                state.psp = getOptions(action.payload, AppString.Psp)
                state.province = getOptions(action.payload, AppString.Province)
                state.merchantType = getOptions(action.payload, AppString.MerchantType)
                state.residencyType = getOptions(action.payload, AppString.ResidencyType)
                state.terminalType = getOptions(action.payload, AppString.TerminalType)
                state.status = getOptions(action.payload, AppString.Status)
                state.sender = getOptions(action.payload, AppString.Sender)
                state.dashboardScheduleChoice = getOptions(action.payload, AppString.ScheduleChoice)
            })
            .addCase(loadTable.pending, ((state, action) => {
                state.tableDataIsLoading = true
            }))
            .addCase(loadTable.fulfilled, (state, action) => {
                state.tableData = filterTableData(action.payload?.data)
                state.hasNextPage = action.payload?.nextPage
                state.tableDataIsLoading = false
            })
            .addCase(getSettingBaseConfig.fulfilled, (state, action) => {
                state.isActiveSms = action.payload?.activeSms
                state.isActiveNotification = action.payload?.activeNotification
                state.isActiveEmail = action.payload?.activeEmail
                state.isActiveAlarm = action.payload?.activeAlarm
                state.isActiveLoadMaster = action.payload?.activeLoadMaster
                state.isActiveSaveMaster = action.payload?.activeSaveMaster
                state.ipAddressValidLoadMaster = action.payload?.ipAddressValidLoadMaster
                state.ipAddressValidSaveMaster = action.payload?.ipAddressValidSaveMaster
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInformation = action.payload
                state.permissions = action?.payload?.permissions
                state.permissions?.map((item) => {
                    if (totalPermissions.updateSetting === item) {
                        state.hasUpdateSettingPermission = true
                    }
                    if (totalPermissions.pauseAndResumeRequest === item) {
                        state.hasPauseResumeRequestPermission = true
                    }
                    if (totalPermissions.deleteRequest === item) {
                        state.hasDeleteRequestPermission = true
                    }
                    if (totalPermissions.loadDashboard === item) {
                        state.hasLoadDashboardPermission = true
                    }
                    if (totalPermissions.loadTableData === item) {
                        state.hasLoadTablePermission = true
                    }
                    if (totalPermissions.loadSetting === item) {
                        state.hasLoadSettingPermission = true
                    }
                    if (totalPermissions.cancelRequest === item) {
                        state.hasCancelRequestPermission = true
                    }
                    if (totalPermissions.saveRequest === item) {
                        state.hasSaveRequestPermission = true
                    }

                })
            })
    })
});
export const {
    setIsActiveSms,
    setIsActiveNotification,
    setIsActiveAlarm,
    setIsActiveEmail,
    setIsActiveLoadMaster,
    setIsActiveSaveMaster,
    setIpAddressValidLoadMaster,
    setIpAddressValidSaveMaster
} = mainSlice.actions
export const isBaseDataLoaded = (state) => state.main.isBaseDataLoaded
export const baseData = (state) => state.main.baseData
export const serviceType = (state) => state.main.serviceType
export const appType = (state) => state.main.appType
export const businessCategory = (state) => state.main.businessCategory
export const psp = (state) => state.main.psp
export const province = (state) => state.main.province
export const merchantType = (state) => state.main.merchantType
export const residencyType = (state) => state.main.residencyType
export const terminalType = (state) => state.main.terminalType
export const status = (state) => state.main.status
export const sender = (state) => state.main.sender
export const hasNextPage = (state) => state.main.hasNextPage
export const tableDataIsLoading = (state) => state.main.tableDataIsLoading
export const tableData = (state) => state.main.tableData
export const isActiveSms = (state) => state.main.isActiveSms
export const isActiveEmail = (state) => state.main.isActiveEmail
export const isActiveNotification = (state) => state.main.isActiveNotification
export const isActiveAlarm = (state) => state.main.isActiveAlarm
export const isActiveLoadMaster = (state) => state.main.isActiveLoadMaster
export const isActiveSaveMaster = (state) => state.main.isActiveSaveMaster
export const dashboardScheduleChoice = (state) => state.main.dashboardScheduleChoice
export const userInformation = (state) => state.main.userInformation
export const permissions = (state) => state.main.permissions
export const hasUpdateSettingPermission = (state) => state.main.hasUpdateSettingPermission
export const hasPauseResumeRequestPermission = (state) => state.main.hasPauseResumeRequestPermission
export const hasDeleteRequestPermission = (state) => state.main.hasDeleteRequestPermission
export const hasLoadDashboardPermission = (state) => state.main.hasLoadDashboardPermission
export const hasLoadTablePermission = (state) => state.main.hasLoadTablePermission
export const hasLoadSettingPermission = (state) => state.main.hasLoadSettingPermission
export const hasCancelRequestPermission = (state) => state.main.hasCancelRequestPermission
export const hasSaveRequestPermission = (state) => state.main.hasSaveRequestPermission
export const ipAddressValidLoadMaster = (state) => state.main.ipAddressValidLoadMaster
export const ipAddressValidSaveMaster = (state) => state.main.ipAddressValidSaveMaster

export default mainSlice.reducer;