import React from 'react';
//styles
import './style.css'
//mui
import {Grid, Stack} from "@mui/material";
//components
import EventType from "./Components/EventType";
import EventName from "./Components/EventName";
import UploadImage from "./Components/UploadImage";
import StartDatePicker from "./Components/StartDatePicker";
import EndDatePicker from "./Components/EndDatePicker";
import ShareEvent from "./Components/shareEvent";
import Button from "./Components/Button";

const AddEvent = () => {
    return (
        <Stack className='add-event-layout' spacing={1}>
            <div className='add-event-items'>
                <EventType/>
            </div>
            <div className='add-event-items'>
                <EventName/>
            </div>
            <Grid container className='add-event-items' direction='row-reverse' style={{marginTop: '30px'}}>
                <Grid item>
                    <StartDatePicker/>
                </Grid>
                <Grid item style={{marginRight: '10px'}}>
                    <EndDatePicker/>
                </Grid>
            </Grid>
                <div  className='add-event-items' style={{marginTop:'20px'}}>
                    <UploadImage/>
                </div>
            <div className='add-event-items' style={{marginTop:'20px'}}>
                <ShareEvent/>
            </div>
            <div className='add-event-items' style={{marginTop:'20px'}}>
                <Button/>
            </div>


        </Stack>
    );
};

export default AddEvent;
