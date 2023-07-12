import React from 'react';
import {Grid} from "@mui/material";
import './style.css'

const CustomOutlinedInput = (props) => {
    return (
        <Grid container direction='row-reverse'>
            <p className='outlinedInput-label'>
                {props.label}
            </p>
            <input
                value={props.value}
                className='numeric-input'
                onInput={props.onInput}
                onKeyDown={props.onKeyDown}
                type="number"
                onBlur={props.onBlur}
                style={{marginRight: props.spaceBetweenLabelAndInputBox}}
            />
        </Grid>

    );
};

export default CustomOutlinedInput;
