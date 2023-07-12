import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import {
    pauseAndResume,
    setIsOpenSnackbar,
    setSelectedRequestMasterId, setSnackbarMessage
} from "../../../../Slices/Notification/notifSlice";
import {AppString} from "../../../../Assets/String/AppString";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {useDispatch} from "react-redux";
import {logOut} from "../../../../Slices/Authentication/authSlice";
import {useNavigate} from "react-router-dom";

const ResumeHandler = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onClickResumeIcon(requestMasterId) {
        dispatch(setIsOpenSnackbar(true))
        const status = 8
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
    }

    return (
        <div>
            <IconButton style={{padding: '0px'}}
                        onClick={() => {
                            dispatch(setSelectedRequestMasterId(props.requestMasterId))
                            onClickResumeIcon(props.requestMasterId)
                        }}
            >
                <Tooltip title={AppString.resume}>
                    <PlayCircleOutlineIcon
                        className='table-cancel-icon'
                    />
                </Tooltip>
            </IconButton>
        </div>
    );
};

export default ResumeHandler;
