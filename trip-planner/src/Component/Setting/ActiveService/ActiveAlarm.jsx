import React from 'react';
import {AppString} from "../../../Assets/String/AppString";
import './../style.css'
import {useHasUpdateSettingPermission, useIsActiveAlarm} from "../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";
import {Grid} from "@mui/material";
import Switch from "../../SharedComponent/Switch";
import {setIsActiveAlarm} from "../../../Slices/MainLayout/MainSlice";

const ActiveAlarm = () => {
    const hasUpdateSettingPermission = useHasUpdateSettingPermission()
    const isActiveAlarm = useIsActiveAlarm()
    const dispatch = useDispatch()
    return (
        <Grid container direction="row-reverse">
            <p className='setting-item-for-activate-service'>
                {AppString.alarmService}
            </p>
            <Switch
                disabled={!hasUpdateSettingPermission}
                sx={{marginRight: '130px', marginTop: '15px'}}
                checked={isActiveAlarm}
                onChange={() => {
                    dispatch(setIsActiveAlarm((!isActiveAlarm)))
                }}
            />
        </Grid>
    );
};

export default ActiveAlarm;
