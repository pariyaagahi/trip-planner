import EditIcon from '@mui/icons-material/Edit'
import React, {useEffect} from 'react';
//redux
import {
    setIsOpenSnackbar,
    setSnackbarMessage,
    setIsOpenCreateNotification,
    setIsEditIconClicked,
    setSelectedRequestMasterId,
    setNotifTitleValue,
    setNotifTextValue,
    setTerminalNumberValue,
    setNationalCodeValue,
    setStartTimeValue,
    setEndTimeValue,
    setStartDateValue,
    setEndDateValue, clearErrorMsg, setClearNotifDetailInput
} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {AppString} from "../../../../Assets/String/AppString";
import {useIsEditIconClicked, useSelectedServiceType, useTableData} from "../../../../CustomHook/UseReduxData";
import {IconButton, Tooltip} from "@mui/material";
import {
    setAppTypeValue,
    setBusinessCategoryValue, setMerchantTypeValue, setProvinceValue,
    setPspValue, setResidencyTypeValue,
    setServiceTypeValue, setTerminalTypeValue
} from "./../../../../Slices/Notification/notifSlice";

const EditHandler = (props) => {
    const tableDataList = useTableData()
    const isEditClicked = useIsEditIconClicked()
    const dispatch = useDispatch()

    function getSelectedRow(requestMasterId) {
        return tableDataList.filter((item) => item.requestMasterId === requestMasterId)[0]
    }

    function showNotifData(requestMasterId) {
        dispatch(setClearNotifDetailInput(false))
        const selectedRow = getSelectedRow(requestMasterId)
        dispatch(setServiceTypeValue(selectedRow.serviceType))
        dispatch(setNotifTitleValue(selectedRow.title))
        dispatch(setNotifTextValue(selectedRow.body))
        dispatch(setAppTypeValue(selectedRow.appType))
        dispatch(setBusinessCategoryValue(selectedRow.businessCategoryId))
        dispatch(setPspValue(selectedRow.pspId))
        dispatch(setProvinceValue(selectedRow.provinceId))
        dispatch(setMerchantTypeValue(selectedRow.merchantType))
        dispatch(setResidencyTypeValue(selectedRow.residencyType))
        dispatch(setTerminalTypeValue(selectedRow.terminalType))
        dispatch(setTerminalNumberValue(selectedRow.terminalNumber))
        dispatch(setNationalCodeValue(selectedRow.nationalCode))
        dispatch(setStartTimeValue(new Date(selectedRow.startTimeSend).getTime()))
        dispatch(setEndTimeValue(new Date(selectedRow.endTimeSend).getTime()))
        dispatch(setStartDateValue(new Date(selectedRow.startDateSend).getTime()))
        dispatch(setEndDateValue(new Date(selectedRow.endDateSend).getTime()))
    }

    function scrollToTopOfThePage() {
        const element = document.getElementById('componentToScrollTo');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    function onClickEditIcon(requestMasterId) {
        const selectedRow = getSelectedRow(requestMasterId)
        dispatch(setIsEditIconClicked(false))
        if (selectedRow.status === 0) {
            dispatch(setIsOpenCreateNotification(true))
            dispatch(setIsEditIconClicked(!isEditClicked))
            dispatch(clearErrorMsg())
            showNotifData(requestMasterId);
            scrollToTopOfThePage()
        } else {
            dispatch(setIsOpenSnackbar(true))
            dispatch(setSnackbarMessage(AppString.failEditMsg))
            dispatch(setIsEditIconClicked(null))
            dispatch(setSelectedRequestMasterId(null))
        }
    }

    return (
        <div>
            <IconButton style={{padding: '0px'}}
                        onClick={() => {
                            dispatch(setSelectedRequestMasterId(props.requestMasterId))
                            onClickEditIcon(props.requestMasterId)
                        }}
            >
                <Tooltip title={AppString.edit}>
                    <EditIcon
                        className='table-edit-icon'
                    />
                </Tooltip>
            </IconButton>
        </div>
    );
};

export default EditHandler;
