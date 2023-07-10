import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import {
    pauseAndResume,
    setIsOpenSnackbar,
    setSelectedRequestMasterId, setSnackbarMessage
} from "../../../../Slices/Notification/notifSlice";
import {AppString} from "../../../../Assets/String/AppString";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import {useDispatch} from "react-redux";
import {logOut} from "../../../../Slices/Authentication/authSlice";
import {useNavigate} from "react-router-dom";

const PauseHandler = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onClickPauseIcon(requestMasterId) {
        dispatch(setIsOpenSnackbar(true))
        const status = 7
        dispatch(pauseAndResume({requestMasterId, status}))
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

    return (
        <div>
            <IconButton style={{padding: '0px'}}
                        onClick={() => {
                            dispatch(setSelectedRequestMasterId(props.requestMasterId))
                            onClickPauseIcon(props.requestMasterId)
                        }}
            >
                <Tooltip title={AppString.pause}>
                    <PauseCircleOutlineIcon
                        className='table-cancel-icon'
                    />
                </Tooltip>
            </IconButton>
        </div>
    );
};

export default PauseHandler;
