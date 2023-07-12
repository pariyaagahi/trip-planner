import React from 'react';
import {AppString} from "../../../../Assets/String/AppString";
//mui components
import {Grid, Stack} from "@mui/material";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import StartTime from "./StartTime";
import EndTime from "./EndTime";
//redux
import {useDateRangeErrMsg, useTimeRangeErrMsg} from "../../../../CustomHook/UseReduxData";

const Schedule = () => {
    const dateErrMsg = useDateRangeErrMsg()
    const timeErrMsg = useTimeRangeErrMsg()

    return (
        <>
            <Stack container>
                <Grid container direction='row-reverse'>
                    <Grid item xs={2}>
                        <p className='text'>
                            {AppString.sendNotifDateRange}
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                        <div style={{marginRight: '9px'}}>
                            <StartDate/>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div style={{marginRight: '6px'}}>
                            <EndDate/>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <p className='date-range-err-msg'>
                            {dateErrMsg}
                        </p>
                    </Grid>
                </Grid>
                <Grid container direction='row-reverse'>
                    <Grid item xs={2}>
                        <p className='text'>
                            {AppString.sendNotifTimeRange}
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                        <div style={{marginRight: '2px'}}>
                            <StartTime/>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <EndTime/>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <p className='time-range-err-msg'>
                            {timeErrMsg}
                        </p>
                    </Grid>
                </Grid>
            </Stack>
        </>

    );
};

export default Schedule;
