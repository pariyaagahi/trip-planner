import React from 'react';
import {AppString} from "../../../Assets/String/AppString";
import './../style.css'
import {useHasUpdateSettingPermission, useIsActiveEmail} from "../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import Switch from "../../SharedComponent/Switch";
import {Grid} from "@mui/material";
import {setIsActiveEmail} from "../../../Slices/MainLayout/MainSlice";

const ActiveEmail = () => {
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const isActiveEmail = useIsActiveEmail()
    const dispatch = useDispatch()
    return (
        <Grid container direction="row-reverse">
            <p className='setting-item-for-activate-service'>
                {AppString.emailService}
            </p>
            <Switch
                disabled={!hasUpdateSettingPermission}
                sx={{marginRight: '156px', marginTop: '15px'}}
                checked={isActiveEmail}
                onChange={() => {
                    dispatch(setIsActiveEmail((!isActiveEmail)))
                }}
            />
        </Grid>
    );
};

export default ActiveEmail;
