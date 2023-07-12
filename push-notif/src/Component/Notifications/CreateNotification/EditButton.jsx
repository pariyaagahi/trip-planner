import React, {useEffect, useState} from 'react';
import {AppString} from "../../../Assets/String/AppString";
import {useDispatch} from "react-redux";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
    edit,
    setAppTypeErrMsg, setClearNotifDetailInput,
    setDateRangeErrMsg, setEditNotifErrMsg, setIsOpenEditNotifDialogBox,
    setIsOpenFilterAccordion,
    setIsOpenScheduleAccordion,
    setNationalCodeErrMsg,
    setNotifTextErrMsg,
    setNotifTitleErrMsg,
    setSaveNotifErrMsg,
    setServiceTypeErrMsg,
    setTerminalNumberErrMsg,
    setTimeRangeErrMsg,
} from "../../../Slices/Notification/notifSlice";
import {
    useEndDate,
    useEndTime,
    useIsHideNotifTitle,
    useNationalcode,
    useNotifText,
    useNotifTitle,
    useSelectedAppType,
    useSelectedBusinessCategory, useSelectedMerchantType, useSelectedProvince,
    useSelectedPsp, useSelectedRequestMasterId, useSelectedResidencyType,
    useSelectedServiceType, useSelectedTerminalType, useServiceType,
    useStartDate,
    useStartTime, useStatus,
    useTerminalNum
} from "../../../CustomHook/UseReduxData";
import {logOut} from "../../../Slices/Authentication/authSlice";
import {useNavigate} from "react-router-dom";

const EditButton = () => {
    const dispatch = useDispatch()
    const [hasError, setHasError] = useState(null)
    const [isEditClicked, setIsEditClicked] = useState(false)
    const isHideTitle = useIsHideNotifTitle()
    const title = useNotifTitle()
    const body = useNotifText()
    const terminalNumber = useTerminalNum()
    const nationalCode = useNationalcode()
    const serviceType = useSelectedServiceType()
    const appType = useSelectedAppType()
    const startTimeSend = useStartTime()
    const startDateSend = useStartDate()
    const endTimeSend = useEndTime()
    const endDateSend = useEndDate()
    const pspId = useSelectedPsp()
    const provinceId = useSelectedProvince()
    const terminalType = useSelectedTerminalType()
    const merchantType = useSelectedMerchantType()
    const residencyType = useSelectedResidencyType()
    const requestMasterId = useSelectedRequestMasterId()
    const businessCategoryId = useSelectedBusinessCategory()
    const serviceTypes = useServiceType()

    function scrollToTopOfThePage() {
        const element = document.getElementById('scrollTo');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
        // window.scrollTo(0, 0);
    }

    useEffect(() => {
        dispatch(setSaveNotifErrMsg(''))

        function editNotif() {
            if (hasError === false) {
                dispatch(edit({
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
                }))
                    .unwrap()
                    .then(() => {
                        dispatch(setIsOpenEditNotifDialogBox(true))
                        dispatch(setClearNotifDetailInput(true))
                        dispatch(setDateRangeErrMsg(''))
                        dispatch(setTimeRangeErrMsg(''))
                    })
                    .catch((error) => {
                        dispatch(setIsOpenEditNotifDialogBox(false))
                        dispatch(setEditNotifErrMsg(error.response.data.message))
                        dispatch(setClearNotifDetailInput(false))
                        scrollToTopOfThePage()
                    })

            }
        }

        editNotif()
    }, [isEditClicked])

    function onEditClicked() {
        setIsEditClicked(!isEditClicked)
    }

    function handleErrors() {
        setHasError(false)
        if (!serviceType && serviceType !== 0) {
            dispatch(setServiceTypeErrMsg(AppString.emptyFieldErrMsg))
            setHasError(true)
        }
        if (!isHideTitle && !title) {
            dispatch(setNotifTitleErrMsg(AppString.emptyFieldErrMsg))
            setHasError(true)
        }
        if (!isHideTitle && title && title.length < 10) {
            dispatch(setNotifTitleErrMsg(AppString.minTitleCharacterErrMsg))
            setHasError(true)
        }
        if (!body) {
            dispatch(setNotifTextErrMsg(AppString.emptyFieldErrMsg))
            setHasError(true)
        }
        if (body && body.length < 10) {
            dispatch(setNotifTextErrMsg(AppString.minBodyCharacterErrMsg))
            setHasError(true)
        }
        if (!appType && appType !== 0 && serviceTypes[2]?.key === serviceType) {
            dispatch(setAppTypeErrMsg(AppString.emptyFieldErrMsg))
            setHasError(true)
        }
        if (startTimeSend === '' || startTimeSend === '0' || startTimeSend === undefined || !startDateSend) {
            dispatch(setTimeRangeErrMsg(AppString.emptyFieldErrMsg))
            setHasError(true)
        }
        if (endTimeSend === '' || endTimeSend === '0' || endTimeSend === undefined || !endTimeSend) {
            dispatch(setTimeRangeErrMsg(AppString.emptyFieldErrMsg))
            setHasError(true)
        }
        if (startDateSend === '' || startDateSend === '0' || startDateSend === undefined || !startDateSend) {
            dispatch(setDateRangeErrMsg(AppString.emptyFieldErrMsg))
            setHasError(true)
        }
        if (endDateSend === '' || endDateSend === '0' || endDateSend === undefined || !endDateSend) {
            dispatch(setDateRangeErrMsg(AppString.emptyFieldErrMsg))
            setHasError(true)
        }
        if (startDateSend && (new Date(startDateSend).setHours(0, 0, 0, 0) < new Date(Date.now()).setHours(0, 0, 0, 0))) {
            dispatch(setDateRangeErrMsg(AppString.dateRangeErrMsg))
            setHasError(true)
        }
        if (startTimeSend && endDateSend && (new Date(startDateSend).toDateString() === new Date(Date.now()).toDateString()) && (new Date(Number(startTimeSend)).toTimeString() < new Date(Date.now()).toTimeString())) {
            dispatch(setTimeRangeErrMsg(AppString.timeRangeErrMsg))
            setHasError(true)
        }
        if (startTimeSend && endTimeSend && startTimeSend !== '0' && endTimeSend !== '0' && (startDateSend === endDateSend && (Math.abs(new Date(Number(startTimeSend)) - new Date(Number(endTimeSend))) / 36e5) < 0.99)) {
            dispatch(setTimeRangeErrMsg(AppString.timeRangeMinHoursErrMsg))
            setHasError(true)
        }
        //here 2
        if (startDateSend && endDateSend && new Date(startDateSend).setHours(0, 0, 0, 0) > new Date(endDateSend).setHours(0, 0, 0, 0)) {
            dispatch(setDateRangeErrMsg(AppString.dateRangeErrMsg))
            setHasError(true)
        }
        if (new Date(startDateSend).toDateString() === new Date(endDateSend).toDateString() && startTimeSend > endTimeSend) {
            dispatch(setTimeRangeErrMsg(AppString.timeRangeErrMsg))
            setHasError(true)
        }
        if (terminalNumber && terminalNumber.length <= 7) {
            dispatch(setTerminalNumberErrMsg(AppString.terminalNumberErrorMsg))
            setHasError(true)
        }
        if (nationalCode && nationalCode.length <= 9) {
            dispatch(setNationalCodeErrMsg(AppString.nationalCodeErrorMsg))
            setHasError(true)
        }
    }

    function openAccordions() {
        dispatch(setIsOpenFilterAccordion(true))
        dispatch(setIsOpenScheduleAccordion(true))
    }


    return (
        <CheckCircleOutlineIcon
            onClick={() => {
                openAccordions();
                handleErrors();
                onEditClicked();
            }}
            variant="contained"
            className='create-notif-submit-btn'>
            {AppString.edit}
        </CheckCircleOutlineIcon>
    );
};

export default EditButton;
