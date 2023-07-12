import React, {useEffect, useState} from 'react';
import {Grid, Stack} from "@mui/material";
//components
import ActiveSms from "./ActiveSms";
import ActiveEmail from "./ActiveEmail";
import ActiveAlarm from "./ActiveAlarm";
import ActiveNotification from "./ActiveNotification";
import {AppString} from "../../../Assets/String/AppString";

const ActivateServicesSetting = () => {

    return (
        <div style={{marginRight: '50px' , minWidth:'300px'}}>
            <Grid container direction='row-reverse'>
                <Stack spacing={-2}>
                    <p className='setting-title-for-activate-services'>
                        {AppString.settingActiveServiceTitle}
                    </p>
                    <ActiveSms/>
                    <ActiveEmail/>
                    <ActiveNotification/>
                    <ActiveAlarm/>
                </Stack>
            </Grid>
        </div>
    );
};

export default ActivateServicesSetting;
