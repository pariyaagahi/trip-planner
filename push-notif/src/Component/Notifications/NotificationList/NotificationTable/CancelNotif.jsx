import React, {useEffect, useState} from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {AppString} from "../../../../Assets/String/AppString";
import DialogBox from "../../../SharedComponent/DialogBox";
//redux
import {useDispatch} from "react-redux";
import {
    setIsOpenSnackbar,
    setSnackbarMessage,
    cancel,
    setSelectedRequestMasterId
} from "../../../../Slices/Notification/notifSlice";
import {useTableData} from "../../../../CustomHook/UseReduxData";
import {IconButton, Tooltip} from "@mui/material";
import {logOut} from "../../../../Slices/Authentication/authSlice";
import {useNavigate} from "react-router-dom";

const CancelHandler = (props) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    // const [isDisableCancleIcon, setIsDisableCancleIcon] = useState(false)
    const tableDataList = useTableData()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function getSelectedRow(requestMasterId) {
        return tableDataList.filter((item) => item.requestMasterId === requestMasterId)[0]
    }

    // useEffect(() => {
    // }, [isDisableCancleIcon]);


    function onClickCancelIcon(requestMasterId) {
        const status = getSelectedRow(requestMasterId).status
        if (status === 1 || status === 0) {
            setIsOpenDialog(true)
        } else if (status === 5) {
            dispatch(setIsOpenSnackbar(true));
            dispatch(setSnackbarMessage('پیام قبلا لغو شده است'))
            dispatch(setSelectedRequestMasterId(null))
        } else {
            dispatch(setIsOpenSnackbar(true));
            dispatch(setSnackbarMessage('نمیتوان لغو کرد'))
            dispatch(setSelectedRequestMasterId(null))
        }
    }

    function handleCancel(requestMasterId) {
        dispatch(setIsOpenSnackbar(true));
        setIsOpenDialog(false);
        dispatch(cancel({requestMasterId}))
            .unwrap()
            .then((response) => {
                dispatch(setSnackbarMessage(response?.message))
                setTimeout(() => {
                    window.location.reload(true);
                }, 2000)
            })
            .catch((error) => {
                dispatch(setSnackbarMessage(error?.response?.data?.message))
            })
        // dispatch(setSelectedRequestMasterId(null))
    }

    function handleCloseDialog() {
        setIsOpenDialog(false)
    }

    return (
        <div>
            <IconButton style={{padding: '0px'}}
                        onClick={() => {
                            dispatch(setSelectedRequestMasterId(props.requestMasterId))
                            onClickCancelIcon(props.requestMasterId)
                        }}
            >
                <Tooltip title={AppString.cancel}>
                    <HighlightOffIcon
                        className='table-cancel-icon'
                    />
                </Tooltip>
            </IconButton>
            {
                isOpenDialog &&
                <DialogBox
                    showAcceptButton
                    showDeclineButton
                    showWarningIcon
                    open={isOpenDialog}
                    text={AppString.cancelNotifWarningDialogText}
                    acceptButtonText='تایید'
                    declineButtonText='انصراف'
                    handleOnclickAcceptButton={() => handleCancel(props.requestMasterId)}
                    handleOnclickDeclineButton={() => handleCloseDialog()}
                />
            }
        </div>
    );
};

export default CancelHandler;
