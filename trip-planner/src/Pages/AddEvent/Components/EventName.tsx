import React from 'react';
//component
import {default as TextField} from "../../../Components/TextField";
//string
import {AppString} from "../../../Assets/String/AppString";

const EventName = () => {
    const ref = React.createRef<HTMLInputElement>();
    return (
        <TextField inputRef={ref} label={AppString.eventName} sx={{width:'350px'}}/>
    );
};

export default EventName;
