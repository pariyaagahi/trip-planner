import React, {useEffect} from 'react';
import DatePicker from "../../../SharedComponent/DatePicker";
import {AppString} from "../../../../Assets/String/AppString";
import {
    setStartDateValue,
    setDateRangeErrMsg,
} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {useClearNotifDetailInput, useIsEditIconClicked, useStartDate} from "../../../../CustomHook/UseReduxData";

const StartDate = () => {
    const [StartDate, setStartDate] = React.useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const startDateValue = useStartDate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (startDateValue !== null) {
            setStartDate(startDateValue)
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setStartDate('')
            dispatch(setStartDateValue(null))
        }
    }, [clearInput])

    return (
        <DatePicker
            label={AppString.fromDate}
            value={StartDate || null}
            onChange={(newValue) => {
                setStartDate(newValue)
                dispatch(setStartDateValue(newValue?.getTime()))
                dispatch(setDateRangeErrMsg(''))
            }}
        />
    );
};

export default StartDate;
