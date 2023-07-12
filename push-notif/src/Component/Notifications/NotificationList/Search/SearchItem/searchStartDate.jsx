import React from 'react';
import DatePicker from "../../../../SharedComponent/DatePicker";
import {AppString} from "../../../../../Assets/String/AppString";
//redux
import {useDispatch} from "react-redux";
import {setSearchStartDateValue} from "../../../../../Slices/Notification/notifSlice";


const SearchStartDate = () => {
    const [startDate, setStartDate] = React.useState('')
    const dispatch = useDispatch()

    return (
        <DatePicker
            label={AppString.dateRange}
            value={startDate || null}
            onChange={(newValue) => {
                setStartDate(newValue)
                dispatch(setSearchStartDateValue(newValue?.getTime()))
            }}
        />
    );
};

export default SearchStartDate;
