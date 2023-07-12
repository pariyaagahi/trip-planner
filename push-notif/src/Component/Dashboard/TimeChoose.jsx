import React, {useEffect, useState} from 'react';
import './style.css'
import {AppString} from "../../Assets/String/AppString";
//mui components
import FormControl from '@mui/material/FormControl';
import {FormControlLabel, Grid, Radio, RadioGroup} from "@mui/material";
import DatePicker from "../SharedComponent/DatePicker";
import {useDispatch} from "react-redux";
import Button from "@mui/material/Button";
import {loadDashboard} from "../../Slices/Dashboard/dashboardSlice";
import Box from "@mui/material/Box";
import {setIsOpenSnackbar, setSnackbarMessage} from "../../Slices/Notification/notifSlice";
import {logOut} from "../../Slices/Authentication/authSlice";
import {useNavigate} from "react-router-dom";

const TimeChoose = () => {
    const [radioBtnValue, setRadioBtnValue] = useState(1);
    const [startDateSend, setStartDateSend] = React.useState('')
    const [endDateSend, setEndDateSend] = React.useState('')
    const [dataIsLoaded, setDataIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function dateRangeLabel() {
        return <Grid container>
            <div dir='ltr'>
                <DatePicker
                    disabled={radioBtnValue !== "3"}
                    label={AppString.dateRange}
                    value={startDateSend || null}
                    onChange={(newValue) => {
                        setStartDateSend(newValue?.getTime())
                    }}
                />
            </div>
            <div dir='ltr' style={{marginRight: '10px'}}>
                <DatePicker
                    disabled={radioBtnValue !== "3" ? true : false}
                    label={AppString.to}
                    value={endDateSend || null}
                    onChange={(newValue) => {
                        setEndDateSend(newValue?.getTime())
                    }}
                />
            </div>
        </Grid>
    }

    function onClickSearch() {
        if (dataIsLoaded && radioBtnValue) {
            const scheduleChoice = radioBtnValue?.toString()
            dispatch(loadDashboard({scheduleChoice, startDateSend, endDateSend})).unwrap().then((response) => {
            })
                .catch((error) => {
                    dispatch(setIsOpenSnackbar(true))
                    dispatch(setSnackbarMessage(AppString.dashboardSearchErrorMsg))
                })
        }
    }

    useEffect(() => {
        const scheduleChoice = "1"
        dispatch(loadDashboard({scheduleChoice, startDateSend, endDateSend})).unwrap()
            .then((response) => {
                setDataIsLoaded(true)
            })
            .catch((e) => {
                setDataIsLoaded(false)
                dispatch(setIsOpenSnackbar(true))
                dispatch(setSnackbarMessage(AppString.dashboardSearchErrorMsg))
            })
    }, [])

    return (
        <Box className='time-choose-box' sx={{boxShadow: 5}}>
            <p className='time-choose-title'>
                {AppString.timeChoose}
            </p>
            <Grid container className='time-choose-grid'>
                <div>
                    <FormControl>
                        <RadioGroup row
                                    onChange={(event, value) => setRadioBtnValue(value)}
                                    defaultValue={1}
                        >
                            <FormControlLabel
                                value={0}
                                // value={timeChoose[0]?.key}
                                // label={timeChoose[0]?.value}
                                label={AppString.yesterday}
                                control={<Radio/>}
                            />
                            <FormControlLabel
                                value={1}
                                // value={timeChoose[1]?.key}
                                // label={timeChoose[1]?.value}
                                label={AppString.lastWeek}
                                control={<Radio/>}
                                className='radio-button-label'
                            />
                            <FormControlLabel
                                value={2}
                                // value={timeChoose[2]?.key}
                                // label={timeChoose[2]?.value}
                                label={AppString.lastMonth}
                                control={<Radio/>}
                                className='radio-button-label'
                            />
                            <FormControlLabel
                                value={3}
                                // value={timeChoose[3]?.key}
                                // label={timeChoose[3]?.value}
                                label={dateRangeLabel()}
                                control={<Radio/>}
                                className='radio-button-label'
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div style={{marginRight: '20px'}}>
                    <Button
                        onClick={onClickSearch}
                        variant="contained"
                        className='search-btn'>
                        {AppString.search}
                    </Button>
                </div>
            </Grid>
        </Box>
    );
};

export default TimeChoose;