import React from 'react';
import './style.css'
import {AppString} from "../../Assets/String/AppString";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import {
    useAlarmTotalCount,
    useEmailTotalCount,
    useNotificationTotalCount,
    useSmsTotalCount
} from "../../CustomHook/UseReduxData";

const TotalCount = () => {
    const smsTotalCount = useSmsTotalCount()
    const emailTotalCount = useEmailTotalCount()
    const notificationTotalCount = useNotificationTotalCount()
    const alarmTotalCount = useAlarmTotalCount()
    return (
        <Box className='total-count-box' sx={{boxShadow: 5}}>
            <p className='total-count-title'>
                {AppString.dashboardTotalCount}
            </p>
            <div>
                <Grid container direction='row-reverse' className='service-grid' style={{marginTop: '30px'}}>
                    <div className='service-text-div'>
                        <p>
                            {AppString.notification}
                        </p>
                    </div>
                    <Box className='service-box' sx={{boxShadow: 5}}>
                        <div className='service-box-count-div'>
                            {notificationTotalCount ? notificationTotalCount : 0}
                        </div>
                    </Box>
                </Grid>
                <Grid container direction='row-reverse' className='service-grid'>
                    <div className='service-text-div'>
                        <p>
                            {AppString.alarm}
                        </p>
                    </div>
                    <Box className='service-box' sx={{boxShadow: 5}}>
                        <div className='service-box-count-div'>
                            {alarmTotalCount ? alarmTotalCount : 0}
                        </div>
                    </Box>
                </Grid>
                <Grid container direction='row-reverse' className='service-grid'>
                    <div className='service-text-div'>
                        <p>
                            {AppString.sms}
                        </p>
                    </div>
                    <Box className='service-box' sx={{boxShadow: 5}}>
                        <div className='service-box-count-div'>
                            {smsTotalCount ? smsTotalCount : 0}
                        </div>
                    </Box>
                </Grid>
                <Grid container direction='row-reverse' className='service-grid'>
                    <div className='service-text-div'>
                        <p>
                            {AppString.email}
                        </p>
                    </div>
                    <Box className='service-box' sx={{boxShadow: 5}}>
                        <div className='service-box-count-div'>
                            {emailTotalCount ? emailTotalCount : 0}
                        </div>
                    </Box>
                </Grid>
            </div>
        </Box>
    );
};

export default TotalCount;
