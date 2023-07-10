import React from 'react';
import {Switch} from "@mui/material";
import './style.css'

const CustomSwitch = (props) => {
    return (
        <Switch
            size='small'
            disabled={props.disabled}
            sx={props.sx}
            checked={props.checked}
            onChange={props.onChange}
            inputProps={{
                readOnly: props.readOnly
            }}
        />
    );
};

export default CustomSwitch;
