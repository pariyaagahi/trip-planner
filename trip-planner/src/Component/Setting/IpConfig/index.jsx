import React from 'react';
import {Grid, Stack} from "@mui/material";
import {AppString} from "../../../Assets/String/AppString";
import IpValidLoadMaster from "./IpValidLoadMaster";
import IpValidSaveMaster from "./IpValidSaveMaster";

const IpConfigSetting = () => {
    return (
        <div style={{marginRight: '50px', minWidth: '300px'}}>
            <Grid container direction='row-reverse'>
                <Stack>
                    <p className='setting-title-for-ip-config'>
                        {AppString.settingIpConfigTitle}
                    </p>
                    <IpValidLoadMaster/>
                    <IpValidSaveMaster/>
                </Stack>
            </Grid>
        </div>
    );
};

export default IpConfigSetting;
