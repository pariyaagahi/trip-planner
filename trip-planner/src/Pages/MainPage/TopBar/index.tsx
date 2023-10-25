import React from 'react';
//components
import {default as EventItem} from "../../../Components/TopEvent";
import AddEventButton from "./AddEventButton";
//mui
import {Grid} from "@mui/material";

const TopBar = () => {
    return (
        <Grid container  wrap='nowrap' sx={{overflow: "auto"}}>
            <Grid item>
                <AddEventButton/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
            <Grid item>
                <EventItem/>
            </Grid>
        </Grid>
    );
};

export default TopBar;
