import React, {useEffect} from 'react';
import TimePicker from "../../../SharedComponent/TimePicker";
import {AppString} from "../../../../Assets/String/AppString";
import {
    setEndTimeValue,
    setTimeRangeErrMsg,
} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {useClearNotifDetailInput, useEndTime, useIsEditIconClicked} from "../../../../CustomHook/UseReduxData";

const EndTime = () => {
    const [EndTime, setEndTime] = React.useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const endTimeValue = useEndTime()
    const dispatch = useDispatch()

    useEffect(() => {
        if (endTimeValue !== null) {
            setEndTime(endTimeValue)
        }
    }, [isEditClicked])


    useEffect(() => {
        if (clearInput) {
            setEndTime('')
            dispatch(setEndTimeValue(null))
        }
    }, [clearInput])

    return (
        <TimePicker
            value={EndTime || null}
            onChange={(newValue) => {
                setEndTime(newValue)
                dispatch(setEndTimeValue(Math.floor(new Date(newValue)?.getTime()).toString()))
                dispatch(setTimeRangeErrMsg(''))
            }}
            label={AppString.toTime}
        />
    );
};

export default EndTime;
