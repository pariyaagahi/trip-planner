import React, {useEffect} from 'react';
import DatePicker from "../../../SharedComponent/DatePicker";
import {AppString} from "../../../../Assets/String/AppString";
import {
    setEndDateValue,
    setDateRangeErrMsg,
} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {useClearNotifDetailInput, useEndDate, useIsEditIconClicked} from "../../../../CustomHook/UseReduxData";

const EndDate = () => {
    const [EndDate, setEndDate] = React.useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const endDateValue = useEndDate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (endDateValue !== null) {
            setEndDate(endDateValue)
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setEndDate('')
            dispatch(setEndDateValue(null))
        }
    }, [clearInput])

    return (
        <DatePicker
            label={AppString.toDate}
            value={EndDate || null}
            onChange={(newValue) => {
                setEndDate(newValue)
                dispatch(setEndDateValue(newValue?.getTime()))
                dispatch(setDateRangeErrMsg(''))
            }}
        />
    );
};

export default EndDate;
