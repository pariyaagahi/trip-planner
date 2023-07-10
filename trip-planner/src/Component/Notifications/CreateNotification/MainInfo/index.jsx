import React from 'react';
//components
import ServiceType from "./ServiceType";
import NotifTitle from "./NotifTitle";
import NotifText from "./NotifText";
//mui components
import {Grid} from '@mui/material'
//redux
import {useIsHideNotifTitle} from "../../../../CustomHook/UseReduxData";

const MainInfo = () => {
    const isHideTitle = useIsHideNotifTitle()
    return (
        <div className='create-notif-main-info-div'>
            <Grid container direction='row-reverse' className='create-notif-main-info-grid' >
                <div>
                    <ServiceType/>
                </div>
                <div style={{marginRight: '50px'}}>
                    {!isHideTitle && <NotifTitle/>}
                </div>
            </Grid>
                <NotifText/>
        </div>
    );
};

export default MainInfo;
