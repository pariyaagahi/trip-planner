import {useSelector} from "react-redux";
import {
    appTypeErrMsg,
    clearNotifDetailInput,
    dateRangeErrMsg, editNotifErrorMsg,
    endDate,
    endTime, isEditIconClicked,
    isHideNotifTitle,
    isOpenCreateNotifDialogBox,
    isOpenCreateNotification, isOpenEditNotifDialogBox, isOpenFilterAccordion, isOpenScheduleAccordion,
    isOpenSnackbar, isSearchButtonClicked,
    nationalcode,
    nationalCodeErrMsg,
    notifText,
    notifTextErrMsg,
    notifTitle,
    notifTitleErrMsg, pageNumber,
    saveNotifErrorMsg,
    searchEndDate,
    searchStartDate,
    selectedAppType,
    selectedBusinessCategory,
    selectedMerchantType,
    selectedProvince,
    selectedPsp,
    selectedRequestMasterId,
    selectedResidencyType, selectedSearchSender,
    selectedSearchServiceType,
    selectedServiceType,
    selectedTerminalType,
    serviceTypeErrMsg,
    snackbarMessage,
    startDate,
    startTime,
    terminalNum,
    terminalNumberErrMsg,
    timeRangeErrMsg
} from "../../Slices/Notification/notifSlice";
import {
    isOpenSubmitSettingDialogBox,
    isSubmitSettingClicked
} from "../../Slices/Setting/settingSlice";
import {
    baseData,
    isBaseDataLoaded,
    sender,
    serviceType,
    appType,
    businessCategory,
    psp,
    province,
    merchantType,
    residencyType,
    terminalType,
    status,
    hasNextPage,
    tableDataIsLoading,
    tableData,
    isActiveAlarm,
    isActiveEmail,
    isActiveNotification,
    isActiveSms,
    dashboardScheduleChoice,
    isActiveLoadMaster,
    isActiveSaveMaster,
    permissions,
    hasUpdateSettingPermission,
    hasPauseResumeRequestPermission,
    hasLoadBaseDataPermission,
    hasGetUserInfoPermission,
    hasDeleteRequestPermission,
    hasUpdateRequestPermission,
    hasLoadDashboardPermission,
    hasLoadTablePermission,
    hasLoadSettingPermission,
    hasCancelRequestPermission,
    hasSaveRequestPermission,
    ipAddressValidLoadMaster,
    ipAddressValidSaveMaster,
} from "../../Slices/MainLayout/MainSlice";
import {
    alarmGaugePercent,
    alarmTotalCount,
    dashboardBaseData, emailGaugePercent,
    emailTotalCount, notificationGaugePercent,
    notificationTotalCount, smsGaugePercent,
    smsTotalCount
} from "../../Slices/Dashboard/dashboardSlice";

export const useIsOpenCreateNotification = () => {
    return useSelector(isOpenCreateNotification)
}
export const useIsOpenFilterAccordion = () => {
    return useSelector(isOpenFilterAccordion)
}
export const useIsOpenScheduleAccordion = () => {
    return useSelector(isOpenScheduleAccordion)
}
export const useBaseData = () => {
    return useSelector(baseData)
}
export const useServiceType = () => {
    return useSelector(serviceType)
}
export const useAppType = () => {
    return useSelector(appType)
}
export const useBusinessCategory = () => {
    return useSelector(businessCategory)
}
export const usePsp = () => {
    return useSelector(psp)
}
export const useProvince = () => {
    return useSelector(province)
}
export const useMerchantType = () => {
    return useSelector(merchantType)
}
export const useResidencyType = () => {
    return useSelector(residencyType)
}
export const useTerminalType = () => {
    return useSelector(terminalType)
}
export const useStatus = () => {
    return useSelector(status)
}
export const useSender = () => {
    return useSelector(sender)
}
export const useIsHideNotifTitle = () => {
    return useSelector(isHideNotifTitle)
}
export const useSelectedAppType = () => {
    return useSelector(selectedAppType)
}
export const useSelectedResidencyType = () => {
    return useSelector(selectedResidencyType)
}
export const useSelectedMerchantType = () => {
    return useSelector(selectedMerchantType)
}
export const useSelectedPsp = () => {
    return useSelector(selectedPsp)
}
export const useSelectedServiceType = () => {
    return useSelector(selectedServiceType)
}
export const useSelectedProvince = () => {
    return useSelector(selectedProvince)
}
export const useSelectedBusinessCategory = () => {
    return useSelector(selectedBusinessCategory)
}
export const useSelectedTerminalType = () => {
    return useSelector(selectedTerminalType)
}
export const useNotifTitle = () => {
    return useSelector(notifTitle)
}
export const useNotifText = () => {
    return useSelector(notifText)
}
export const useTerminalNum = () => {
    return useSelector(terminalNum)
}
export const useNationalcode = () => {
    return useSelector(nationalcode)
}
export const useStartDate = () => {
    return useSelector(startDate)
}
export const useStartTime = () => {
    return useSelector(startTime)
}
export const useEndDate = () => {
    return useSelector(endDate)
}
export const useEndTime = () => {
    return useSelector(endTime)
}
export const useServiceTypeErrMsg = () => {
    return useSelector(serviceTypeErrMsg)
}
export const useNotifTitleErrMsg = () => {
    return useSelector(notifTitleErrMsg)
}
export const useNotifTextErrMsg = () => {
    return useSelector(notifTextErrMsg)
}
export const useAppTypeErrMsg = () => {
    return useSelector(appTypeErrMsg)
}
export const useTerminalNumberErrMsg = () => {
    return useSelector(terminalNumberErrMsg)
}
export const useNationalCodeErrMsg = () => {
    return useSelector(nationalCodeErrMsg)
}
export const useDateRangeErrMsg = () => {
    return useSelector(dateRangeErrMsg)
}
export const useTimeRangeErrMsg = () => {
    return useSelector(timeRangeErrMsg)
}
export const useSaveNotifErrorMsg = () => {
    return useSelector(saveNotifErrorMsg)
}
export const useEditNotifErrorMsg = () => {
    return useSelector(editNotifErrorMsg)
}
export const useIsOpenCreateNotifDialogBox = () => {
    return useSelector(isOpenCreateNotifDialogBox)
}
export const useIsOpenEditNotifDialogBox = () => {
    return useSelector(isOpenEditNotifDialogBox)
}
export const useTableData = () => {
    return useSelector(tableData)
}
export const useSelectedSearchServiceType = () => {
    return useSelector(selectedSearchServiceType)
}
export const useSelectedSearchSender = () => {
    return useSelector(selectedSearchSender)
}
export const useSearchStartDate = () => {
    return useSelector(searchStartDate)
}
export const useSearchEndDate = () => {
    return useSelector(searchEndDate)
}
export const useIsOpenSnackbar = () => {
    return useSelector(isOpenSnackbar)
}
export const useSnackbarMessage = () => {
    return useSelector(snackbarMessage)
}
export const useSelectedRequestMasterId = () => {
    return useSelector(selectedRequestMasterId)
}
export const useIsEditIconClicked = () => {
    return useSelector(isEditIconClicked)
}
export const useClearNotifDetailInput = () => {
    return useSelector(clearNotifDetailInput)
}
export const useIsSearchButtonClicked = () => {
    return useSelector(isSearchButtonClicked)
}
export const usePageNumber = () => {
    return useSelector(pageNumber)
}
export const useHasNextPage = () => {
    return useSelector(hasNextPage)
}
export const useIsActiveSms = () => {
    return useSelector(isActiveSms)
}
export const useIsActiveEmail = () => {
    return useSelector(isActiveEmail)
}
export const useIsActiveNotification = () => {
    return useSelector(isActiveNotification)
}
export const useIsActiveAlarm = () => {
    return useSelector(isActiveAlarm)
}
export const useIsActiveLoadMaster = () => {
    return useSelector(isActiveLoadMaster)
}
export const useIsActiveSaveMaster = () => {
    return useSelector(isActiveSaveMaster)
}
export const useIsSubmitSettingClicked = () => {
    return useSelector(isSubmitSettingClicked)
}
export const useIsOpenSubmitSettingDialogBox = () => {
    return useSelector(isOpenSubmitSettingDialogBox)
}
export const useTableDataIsLoading = () => {
    return useSelector(tableDataIsLoading)
}
export const useDashboardScheduleChoice = () => {
    return useSelector(dashboardScheduleChoice)
}
export const useIsBaseDataLoaded = () => {
    return useSelector(isBaseDataLoaded)
}
export const useDashboardBaseData = () => {
    return useSelector(dashboardBaseData)
}
export const useSmsTotalCount = () => {
    return useSelector(smsTotalCount)
}
export const useEmailTotalCount = () => {
    return useSelector(emailTotalCount)
}
export const useNotificationTotalCount = () => {
    return useSelector(notificationTotalCount)
}
export const useAlarmTotalCount = () => {
    return useSelector(alarmTotalCount)
}
export const useAlarmGaugePercent = () => {
    return useSelector(alarmGaugePercent)
}
export const useSmsGaugePercent = () => {
    return useSelector(smsGaugePercent)
}
export const useEmailGaugePercent = () => {
    return useSelector(emailGaugePercent)
}
export const useNotificationGaugePercent = () => {
    return useSelector(notificationGaugePercent)
}
export const useHasUpdateSettingPermission = () => {
    return useSelector(hasUpdateSettingPermission)
}
export const useHasPauseResumeRequestPermission = () => {
    return useSelector(hasPauseResumeRequestPermission)
}
export const useHasDeleteRequestPermission = () => {
    return useSelector(hasDeleteRequestPermission)
}
export const useHasLoadDashboardPermission = () => {
    return useSelector(hasLoadDashboardPermission)
}
export const useHasLoadTablePermission = () => {
    return useSelector(hasLoadTablePermission)
}
export const useHasLoadSettingPermission = () => {
    return useSelector(hasLoadSettingPermission)
}
export const useHasCancelRequestPermission = () => {
    return useSelector(hasCancelRequestPermission)
}
export const useHasSaveRequestPermission = () => {
    return useSelector(hasSaveRequestPermission)
}
export const useIpAddressValidLoadMaster =()=>{
    return useSelector(ipAddressValidLoadMaster)
}
export const useIpAddressValidSaveMaster =()=>{
    return useSelector(ipAddressValidSaveMaster)
}