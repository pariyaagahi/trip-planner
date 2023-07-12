import React from 'react';
import {AppString} from "../../../Assets/String/AppString";
import './../style.css'
import {useHasUpdateSettingPermission, useIsActiveNotification} from "../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import {Grid} from "@mui/material";
import Switch from "../../SharedComponent/Switch";
import {setIsActiveNotification} from "../../../Slices/MainLayout/MainSlice";

const ActiveNotification = () => {
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const isActiveNotification = useIsActiveNotification()
    const dispatch = useDispatch()
    return (
        <Grid container direction="row-reverse">
            <p className='setting-item-for-activate-service'>
                {AppString.notificationService}
            </p>
            <Switch
                disabled={!hasUpdateSettingPermission}
                sx={{marginRight: '124px', marginTop: '15px'}}
                checked={isActiveNotification}
                onChange={() => {
                    dispatch(setIsActiveNotification((!isActiveNotification)))
                }}
            />
        </Grid>
    );
};

export default ActiveNotification;
