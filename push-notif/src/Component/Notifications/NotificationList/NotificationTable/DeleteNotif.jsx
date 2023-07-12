import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
//redux
import {useDispatch} from "react-redux";
import {
    deleteNotif,
    setIsOpenSnackbar,
    setSnackbarMessage,
    setSelectedRequestMasterId
} from "../../../../Slices/Notification/notifSlice";
import DialogBox from "../../../SharedComponent/DialogBox";
import {AppString} from "../../../../Assets/String/AppString";
import {useTableData} from "../../../../CustomHook/UseReduxData";
import {IconButton, Tooltip} from "@mui/material";
import {logOut} from "../../../../Slices/Authentication/authSlice";
import {useNavigate} from "react-router-dom";

const DeleteHandler = (props) => {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const tableDataList = useTableData()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onClickDeleteIcon(requestMasterId) {
        const status = tableDataList.filter((item) => item.requestMasterId === requestMasterId)[0].status
        if (status === 0) {
            setIsOpenDialog(true)
        } else {
            dispatch(setIsOpenSnackbar(true));
            dispatch(setSnackbarMessage(AppString.failDeleteMsg))
            dispatch(setSelectedRequestMasterId(null))
        }
    }

    function handleDelete(requestMasterId) {
        dispatch(setIsOpenSnackbar(true));
        setIsOpenDialog(false)
        dispatch(deleteNotif({requestMasterId}))
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
                            onClickDeleteIcon(props.requestMasterId)
                        }}
            >
                <Tooltip title={AppString.delete}>
                    <DeleteIcon
                        className='table-delete-icon'
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
                    text={AppString.deleteNotifWarningDialogText}
                    acceptButtonText={AppString.accept}
                    declineButtonText={AppString.decline}
                    handleOnclickAcceptButton={() => handleDelete(props.requestMasterId)}
                    handleOnclickDeclineButton={() => handleCloseDialog()}
                />
            }
        </div>
    );
};

export default DeleteHandler;
