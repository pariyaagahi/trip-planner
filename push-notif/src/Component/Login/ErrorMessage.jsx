import React from 'react';
import Box from "@mui/material/Box";
import {loginErrorBoxSx} from "./style";

const ErrorMessage = (props) => {
    return (
        <Box
            sx={loginErrorBoxSx}>
            <p className='login-error'>
                {props.errMsg}
            </p>
        </Box>
    );
};

export default ErrorMessage;
