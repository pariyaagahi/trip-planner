import React from 'react';
import ActiveLoadMaster from "./ActiveLoadMaster";
import ActiveSaveMaster from "./ActiveSaveMaster";
import {Grid, Stack} from "@mui/material";
import {AppString} from "../../../Assets/String/AppString";

const ActivateJobSetting = () => {
    return (
        <div style={{marginRight: '50px', minWidth: '300px'}}>
            <Grid container direction='row-reverse'>
                <Stack spacing={-2}>
                    <p className='setting-title-for-activate-requests'>
                        {AppString.settingRequestsTitle}
                    </p>
                    <ActiveLoadMaster/>
                    <ActiveSaveMaster/>
                </Stack>
            </Grid>
        </div>
    );
};

export default ActivateJobSetting;
