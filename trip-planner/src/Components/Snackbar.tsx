import React from 'react';

//style
import './style.css'

//mui components
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//redux
import {useAppDispatch, useAppSelector} from "../CustomHook/reduxHook";
import {setIsOpenSnackBar, setSnackbarMessage} from "../Store/Common/commonSlice";

//types
import {SnackbarProps} from "../Types/common";

const CustomSnackbar = (props: SnackbarProps) => {

    //useSelector
    const {isOpenSnackBar} = useAppSelector(state => state.common)

    //useDispatch
    const dispatch = useAppDispatch()

    function handleClose() {
        dispatch(setIsOpenSnackBar(false))
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
                sx={{position: 'fixed'}}
                autoHideDuration={3000}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={isOpenSnackBar}
                onClose={() => {
                    dispatch(setIsOpenSnackBar(false))
                    dispatch(setSnackbarMessage(''))
                }}
                message={props.message}
                action={action}
            />
        </div>
    );
};

export default CustomSnackbar;
