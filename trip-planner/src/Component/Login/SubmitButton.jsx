import React from 'react';
import Button from "@mui/material/Button";
import {loginSubmitBtnStyle} from "./style";
import {AppString} from "../../Assets/String/AppString";

const SubmitButton = (props) => {
    return (
        <Button
            type="submit"
            style={loginSubmitBtnStyle}
            onClick={props.onClick}
            variant="contained"
        >
            {AppString.login}
        </Button>
    );
};

export default SubmitButton;
