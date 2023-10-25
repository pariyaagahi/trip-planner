import React from 'react';
//component
import {default as DatePicker} from './../../../Components/DatePicker'
import {Dayjs} from 'dayjs';
//string
import {AppString} from "../../../Assets/String/AppString";

const EndDatePicker = () => {
    const [endDate, setEndDate] = React.useState<Dayjs | null>(null)
    return (
        <div>
            <DatePicker label={AppString.to} value={endDate} onChange={(newValue) => {
                setEndDate(newValue?.getTime())
            }}/>
        </div>
    );
};

export default EndDatePicker;
