import React from 'react';
import TextField from "@mui/material/TextField";
import {loginInputLabelProps, loginInputProps, loginInputSx} from "./style";

const TextInput = (props) => {
    return (
        <TextField
            size='small'
            inputProps={{style: loginInputProps}}
            InputProps={props.InputProps}
            InputLabelProps={{style: loginInputLabelProps}}
            sx={loginInputSx}
            value={props.value}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
            label={props.label}
            type={props.type}
            placeholder={props.placeholder}
            style={props.style}
        />
    );
};

export default TextInput;
