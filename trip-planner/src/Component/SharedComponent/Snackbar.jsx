import React from 'react';
import './style.css'
//mui components
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//redux
import {isOpenSnackbar, setIsOpenSnackbar, setSnackbarMessage} from "../../Slices/Notification/notifSlice";
import {useDispatch, useSelector} from "react-redux";

const CustomSnackbar = (props) => {
    const isOpen = useSelector(isOpenSnackbar)
    const dispatch = useDispatch()

    function handleClose() {
        dispatch(setIsOpenSnackbar(false))
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );
    return (
        <div>
            <Snackbar
                autoHideDuration={3000}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={isOpen}
                onClose={() => {
                    dispatch(setIsOpenSnackbar(false))
                    dispatch(setSnackbarMessage(''))
                }}
                message={props.message}
                action={action}
            />
        </div>
    );
};

export default CustomSnackbar;
