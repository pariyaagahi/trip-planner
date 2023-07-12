import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import NotifService from "../../Service/notifService";

export const save = createAsyncThunk(
    "notif/save",
    async ({
               serviceType,
               title,
               body,
               appType,
               categoryCode,
               pspCode,
               provinceId,
               terminalTypeCode,
               merchantTypeCode,
               terminalNumber,
               residencyTypeCode,
               nationalCode,
               startDateSend,
               startTimeSend,
               endDateSend,
               endTimeSend
           }, {
               rejectWithValue
           }) => {
        try {
            const response = await NotifService.save(serviceType, title, body, appType, categoryCode, pspCode, provinceId, terminalTypeCode, merchantTypeCode, terminalNumber, residencyTypeCode, nationalCode, startDateSend, startTimeSend, endDateSend, endTimeSend);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const cancel = createAsyncThunk(
    "notif/cancel",
    async ({
               requestMasterId
           }, {rejectWithValue}) => {
        try {
            const response = await NotifService.cancel(requestMasterId)
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const pauseAndResume = createAsyncThunk(
    "notif/pauseAndResume",
    async ({
               requestMasterId, status
           }, {rejectWithValue}) => {
        try {
            const response = await NotifService.pauseAndResume(requestMasterId, status)
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteNotif = createAsyncThunk(
    "notif/deleteNotif",
    async ({
               requestMasterId
           }, {rejectWithValue}) => {
        try {
            const response = await NotifService.deleteNotif(requestMasterId)
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const edit = createAsyncThunk(
    "notif/edit",
    async ({
               requestMasterId,
               serviceType,
               title,
               body,
               appType,
               businessCategoryId,
               pspId,
               provinceId,
               terminalType,
               merchantType,
               terminalNumber,
               residencyType,
               nationalCode,
               startDateSend,
               startTimeSend,
               endDateSend,
               endTimeSend
           }, {rejectWithValue}) => {
        try {
            const response = await NotifService.edit(requestMasterId,
                serviceType,
                title,
                body,
                appType,
                businessCategoryId,
                pspId,
                provinceId,
                terminalType,
                merchantType,
                terminalNumber,
                residencyType,
                nationalCode,
                startDateSend,
                startTimeSend,
                endDateSend,
                endTimeSend);
            return response;
        } catch (error) {
            console.log('error is : ' + error)
            return rejectWithValue(error);
        }
    }
)

const initialState = {
    isOpenCreateNotification: false,
    isOpenFilterAccordion: false,
    isOpenScheduleAccordion: false,
    isHideNotifTitle: false,
    isOpenCreateNotifDialogBox: false,
    isOpenEditNotifDialogBox: false,
    isOpenSnackbar: false,
    isEditIconClicked: null,
    clearNotifDetailInput: false,
    isSearchButtonClicked: false,
    selectedServiceType: '',
    selectedAppType: '',
    selectedBusinessCategory: '',
    selectedPsp: '',
    selectedProvince: '',
    selectedMerchantType: '',
    selectedResidencyType: '',
    selectedTerminalType: '',
    selectedRequestMasterId: '',
    notifTitle: '',
    notifText: '',
    terminalNum: '',
    nationalcode: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    serviceTypeErrMsg: '',
    notifTitleErrMsg: '',
    notifTextErrMsg: '',
    appTypeErrMsg: '',
    terminalNumberErrMsg: '',
    nationalCodeErrMsg: '',
    dateRangeErrMsg: '',
    timeRangeErrMsg: '',
    saveNotifErrorMsg: '',
    editNotifErrorMsg: '',
    selectedSearchServiceType: '',
    selectedSearchSender: '',
    searchStartDate: '',
    searchEndDate: '',
    snackbarMessage: '',
    pageNumber: 0,
}

const notifSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setIsOpenCreateNotification(state, action) {
            state.isOpenCreateNotification = action.payload
        },
        setIsOpenFilterAccordion(state, action) {
            state.isOpenFilterAccordion = action.payload
        },
        setIsOpenScheduleAccordion(state, action) {
            state.isOpenScheduleAccordion = action.payload
        },
        setIsHideNotifTitle(state, action) {
            state.isHideNotifTitle = action.payload
        },
        setIsOpenSnackbar(state, action) {
            state.isOpenSnackbar = action.payload
        },
        setIsEditIconClicked(state, action) {
            state.isEditIconClicked = action.payload
        },
        setSnackbarMessage(state, action) {
            state.snackbarMessage = action.payload
        },
        setSelectedRequestMasterId(state, action) {
            state.selectedRequestMasterId = action.payload
        },
        setNotifTitleValue(state, action) {
            state.notifTitle = action.payload
        },
        setNotifTextValue(state, action) {
            state.notifText = action.payload
        },
        setTerminalNumberValue(state, action) {
            state.terminalNum = action.payload
        },
        setNationalCodeValue(state, action) {
            state.nationalcode = action.payload
        },
        setStartDateValue(state, action) {
            state.startDate = action.payload
        },
        setEndDateValue(state, action) {
            state.endDate = action.payload
        },
        setStartTimeValue(state, action) {
            state.startTime = action.payload
        },
        setEndTimeValue(state, action) {
            state.endTime = action.payload
        },
        setServiceTypeErrMsg(state, action) {
            state.serviceTypeErrMsg = action.payload
        },
        setNotifTitleErrMsg(state, action) {
            state.notifTitleErrMsg = action.payload
        },
        setNotifTextErrMsg(state, action) {
            state.notifTextErrMsg = action.payload
        },
        setAppTypeErrMsg(state, action) {
            state.appTypeErrMsg = action.payload
        },
        setTerminalNumberErrMsg(state, action) {
            state.terminalNumberErrMsg = action.payload
        },
        setNationalCodeErrMsg(state, action) {
            state.nationalCodeErrMsg = action.payload
        },
        setDateRangeErrMsg(state, action) {
            state.dateRangeErrMsg = action.payload
        },
        setTimeRangeErrMsg(state, action) {
            state.timeRangeErrMsg = action.payload
        },
        setSaveNotifErrMsg(state, action) {
            state.saveNotifErrorMsg = action.payload
        },
        setEditNotifErrMsg(state, action) {
            state.editNotifErrorMsg = action.payload
        },
        setIsOpenCreateNotifDialogBox(state, action) {
            state.isOpenCreateNotifDialogBox = action.payload
        },
        setIsOpenEditNotifDialogBox(state, action) {
            state.isOpenEditNotifDialogBox = action.payload
        },
        setSearchServiceTypeValue(state, action) {
            state.selectedSearchServiceType = action.payload
        },
        setSearchSenderValue(state, action) {
            state.selectedSearchSender = action.payload
        },
        setSearchStartDateValue(state, action) {
            state.searchStartDate = action.payload
        },
        setSearchEndDateValue(state, action) {
            state.searchEndDate = action.payload
        },
        setClearNotifDetailInput(state, action) {
            state.clearNotifDetailInput = action.payload
        },
        setIsSearchButtonClicked(state, action) {
            state.isSearchButtonClicked = action.payload
        },
        setPageNumber(state, action) {
            state.pageNumber = action.payload
        },
        setServiceTypeValue(state, action) {
            state.selectedServiceType = action.payload
        },
        setAppTypeValue(state, action) {
            state.selectedAppType = action.payload
        },
        setBusinessCategoryValue(state, action) {
            state.selectedBusinessCategory = action.payload
        },
        setPspValue(state, action) {
            state.selectedPsp = action.payload
        },
        setProvinceValue(state, action) {
            state.selectedProvince = action.payload
        },
        setMerchantTypeValue(state, action) {
            state.selectedMerchantType = action.payload
        },
        setResidencyTypeValue(state, action) {
            state.selectedResidencyType = action.payload
        },
        setTerminalTypeValue(state, action) {
            state.selectedTerminalType = action.payload
        },
        clearErrorMsg(state) {
            state.serviceTypeErrMsg = ''
            state.notifTitleErrMsg = ''
            state.notifTextErrMsg = ''
            state.appTypeErrMsg = ''
            state.timeRangeErrMsg = ''
            state.dateRangeErrMsg = ''
            state.terminalNumberErrMsg = ''
            state.nationalCodeErrMsg = ''
            state.saveNotifErrorMsg = ''
            state.editNotifErrorMsg = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(save.fulfilled, (state, action) => {
            })
            .addCase(cancel.fulfilled, (state, action) => {
            })
            .addCase(deleteNotif.fulfilled, (state, action) => {
            })
            .addCase(edit.fulfilled, (state, action) => {
            })
            .addCase(pauseAndResume.fulfilled, ((state, action) => {
            }))
    },
});

export const {
    setIsOpenCreateNotification,
    setIsOpenFilterAccordion,
    setIsOpenScheduleAccordion,
    setIsHideNotifTitle,
    setNationalCodeValue,
    setTerminalNumberValue,
    setNotifTextValue,
    setNotifTitleValue,
    setStartDateValue,
    setStartTimeValue,
    setEndDateValue,
    setEndTimeValue,
    setNationalCodeErrMsg,
    setTerminalNumberErrMsg,
    setNotifTextErrMsg,
    setNotifTitleErrMsg,
    setServiceTypeErrMsg,
    setTimeRangeErrMsg,
    setAppTypeErrMsg,
    setDateRangeErrMsg,
    setSaveNotifErrMsg,
    setEditNotifErrMsg,
    setIsOpenCreateNotifDialogBox,
    setIsOpenEditNotifDialogBox,
    setSearchStartDateValue,
    setSearchServiceTypeValue,
    setSearchEndDateValue,
    setSearchSenderValue,
    setIsOpenSnackbar,
    setSnackbarMessage,
    setSelectedRequestMasterId,
    setIsEditIconClicked,
    setClearNotifDetailInput,
    setIsSearchButtonClicked,
    setPageNumber,
    setBusinessCategoryValue,
    setServiceTypeValue,
    setMerchantTypeValue,
    setProvinceValue,
    setPspValue,
    setAppTypeValue,
    setTerminalTypeValue,
    setResidencyTypeValue,
    clearErrorMsg
} = notifSlice.actions

export const isOpenCreateNotification = (state) => state.notification.isOpenCreateNotification
export const isOpenFilterAccordion = (state) => state.notification.isOpenFilterAccordion
export const isOpenScheduleAccordion = (state) => state.notification.isOpenScheduleAccordion
export const isHideNotifTitle = (state) => state.notification.isHideNotifTitle
export const selectedAppType = (state) => state.notification.selectedAppType
export const selectedResidencyType = (state) => state.notification.selectedResidencyType
export const selectedMerchantType = (state) => state.notification.selectedMerchantType
export const selectedPsp = (state) => state.notification.selectedPsp
export const selectedServiceType = (state) => state.notification.selectedServiceType
export const selectedProvince = (state) => state.notification.selectedProvince
export const selectedBusinessCategory = (state) => state.notification.selectedBusinessCategory
export const selectedTerminalType = (state) => state.notification.selectedTerminalType
export const notifTitle = (state) => state.notification.notifTitle
export const notifText = (state) => state.notification.notifText
export const terminalNum = (state) => state.notification.terminalNum
export const nationalcode = (state) => state.notification.nationalcode
export const startDate = (state) => state.notification.startDate
export const startTime = (state) => state.notification.startTime
export const endDate = (state) => state.notification.endDate
export const endTime = (state) => state.notification.endTime
export const serviceTypeErrMsg = (state) => state.notification.serviceTypeErrMsg
export const notifTitleErrMsg = (state) => state.notification.notifTitleErrMsg
export const notifTextErrMsg = (state) => state.notification.notifTextErrMsg
export const appTypeErrMsg = (state) => state.notification.appTypeErrMsg
export const terminalNumberErrMsg = (state) => state.notification.terminalNumberErrMsg
export const nationalCodeErrMsg = (state) => state.notification.nationalCodeErrMsg
export const dateRangeErrMsg = (state) => state.notification.dateRangeErrMsg
export const timeRangeErrMsg = (state) => state.notification.timeRangeErrMsg
export const saveNotifErrorMsg = (state) => state.notification.saveNotifErrorMsg
export const editNotifErrorMsg = (state) => state.notification.editNotifErrorMsg
export const isOpenCreateNotifDialogBox = (state) => state.notification.isOpenCreateNotifDialogBox
export const selectedSearchServiceType = (state) => state.notification.selectedSearchServiceType
export const selectedSearchSender = (state) => state.notification.selectedSearchSender
export const searchStartDate = (state) => state.notification.searchStartDate
export const searchEndDate = (state) => state.notification.searchEndDate
export const isOpenSnackbar = (state) => state.notification.isOpenSnackbar
export const snackbarMessage = (state) => state.notification.snackbarMessage
export const selectedRequestMasterId = (state) => state.notification.selectedRequestMasterId
export const isEditIconClicked = (state) => state.notification.isEditIconClicked
export const clearNotifDetailInput = (state) => state.notification.clearNotifDetailInput
export const isOpenEditNotifDialogBox = (state) => state.notification.isOpenEditNotifDialogBox
export const isSearchButtonClicked = (state) => state.notification.isSearchButtonClicked
export const pageNumber = (state) => state.notification.pageNumber


export default notifSlice.reducer;