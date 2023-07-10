import React from 'react';
import {useSelector} from "react-redux";
import {getCaptchaValue} from "../../Slices/Authentication/authSlice"
import {refreshCaptchaSx} from "./style";
//mui components
import {IconButton} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

export const Captcha = () => {
    const {image} = useSelector(getCaptchaValue)
    return (
        <img
            src={`data:image/png;base64,${image}`}
            alt="captcha"
        />
    );
};

export const RefreshCaptchaIcon = (props) => {
    return (
        <IconButton
            tabIndex={-1}
            onClick={props.onClick}
        >
            <RefreshIcon sx={refreshCaptchaSx}/>
        </IconButton>
    )

}
