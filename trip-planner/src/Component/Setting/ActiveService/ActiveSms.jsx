import React from 'react';
import {AppString} from "../../../Assets/String/AppString";
import './../style.css'
import {Grid} from "@mui/material";
import Switch from "../../SharedComponent/Switch";
import {useHasUpdateSettingPermission, useIsActiveSms} from "../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import {setIsActiveSms} from "../../../Slices/MainLayout/MainSlice";

const ActiveSms = () => {
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const isActiveSms = useIsActiveSms()
    const dispatch = useDispatch()

    return (
        <Grid container direction="row-reverse">
            <p className='setting-item-for-activate-service'>
                {AppString.smsService}
            </p>
            <Switch
                checked={isActiveSms}
                disabled={!hasUpdateSettingPermission}
                sx={{marginRight: '154px', marginTop: '15px'}}
                onChange={() => {
                    dispatch(setIsActiveSms((!isActiveSms)))
                }}
            />
        </Grid>
    );
};

export default ActiveSms;
