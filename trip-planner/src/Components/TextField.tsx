import React from 'react';
//mui
import {TextField} from "@mui/material";
//style
import './style.css'
//helper
import {cacheRtl} from "../Helpers/common";
//rtl
import {CacheProvider} from "@emotion/react";
//types
import {TextFieldProps} from "../Types/common";

const CustomTextField = (props: TextFieldProps) => {
    return (
        <CacheProvider value={cacheRtl}>
            <TextField sx={props.sx}
                       dir='rtl'
                       label={props.label}
                       inputRef={props.inputRef}
                       id="filled-basic"
                       variant="filled"
            />
        </CacheProvider>
    );
};

export default CustomTextField;
