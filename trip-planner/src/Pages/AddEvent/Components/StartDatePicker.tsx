import React from 'react';
//component
import {default as DatePicker} from './../../../Components/DatePicker'
import {Dayjs} from 'dayjs';
//string
import {AppString} from "../../../Assets/String/AppString";

const StartDatePicker = () => {
    const [startDate, setStartDate] = React.useState<Dayjs | null>(null)
    return (
        <div>
            <DatePicker label={AppString.dateRange} value={startDate} onChange={(newValue) => {
                setStartDate(newValue?.getTime())
            }}/>
        </div>
    );
};

export default StartDatePicker;
