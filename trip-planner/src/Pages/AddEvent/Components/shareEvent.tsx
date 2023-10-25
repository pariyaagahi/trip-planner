import React from 'react';
//mui
import {Checkbox, Grid} from "@mui/material";
//string
import {AppString} from "../../../Assets/String/AppString";

const ShareEvent = () => {
    const label = {inputProps: {'aria-label': 'Checkbox demo'}};
    return (
       <div>
           <Grid container direction='row-reverse'>
               <div className='share-event-text'>
                   {AppString.shareEvent}
               </div>
               <div>
                   <Checkbox className='share-event-check-box' {...label}/>
               </div>
           </Grid>
       </div>
    );
};

export default ShareEvent;
