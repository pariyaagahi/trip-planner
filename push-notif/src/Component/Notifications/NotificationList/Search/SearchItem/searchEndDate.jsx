import React from 'react';
import DatePicker from "../../../../SharedComponent/DatePicker";
import {AppString} from "../../../../../Assets/String/AppString";
//redux
import {useDispatch} from "react-redux";
import {setSearchEndDateValue} from "../../../../../Slices/Notification/notifSlice";


const SearchEndDate = () => {
    const [endDate, setEndDate] = React.useState('')
    const dispatch = useDispatch()

    return (
        <DatePicker
            label={AppString.to}
            value={endDate || null}
            onChange={(newValue) => {
                setEndDate(newValue)
                dispatch(setSearchEndDateValue(newValue?.getTime()))
            }}
        />
    );
};

export default SearchEndDate;
