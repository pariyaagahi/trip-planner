import React from 'react';
import './style.css'
//mui components
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Typography from '@mui/material/Typography'
import {Grid} from '@mui/material'

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}))

const DialogBox = (props) => {
    return (
        <BootstrapDialog
            PaperProps={{
                sx: {height: '200px', width: '500px'},
            }}
            aria-labelledby="customized-dialog-title"
            open={props.open}
        >
            <DialogContent dividers sx={{margin: '0 auto'}}>
                <Grid container>
                    <Typography
                        gutterBottom
                        className='dialog-box-text'
                    >
                        {props.text}
                    </Typography>
                    {
                        props.showCheckIcon &&
                        <CheckCircleIcon
                            className='dialog-box-check-icon'
                        />
                    }
                    {
                        props.showWarningIcon &&
                        <WarningAmberIcon
                            className='dialog-box-warning-icon'
                        />
                    }
                </Grid>
            </DialogContent>
            <DialogActions style={{textAlign: 'center', justifyContent: 'center' , marginBottom:'5px'}}>
                {props.showAcceptButton &&
                    <Button
                        className='dialog-box-accept-btn'
                        autoFocus
                        onClick={props.handleOnclickAcceptButton}
                    >
                        {props.acceptButtonText}
                    </Button>
                }
                {
                    props.showDeclineButton &&
                    <Button
                        className='dialog-box-decline-btn'
                        autoFocus
                        onClick={props.handleOnclickDeclineButton}
                    >
                        {props.declineButtonText}
                    </Button>
                }
            </DialogActions>
        </BootstrapDialog>
    );
};

export default DialogBox;
