import React, {useEffect} from 'react';
import TimePicker from "../../../SharedComponent/TimePicker";
import {AppString} from "../../../../Assets/String/AppString";
import {
    setStartTimeValue,
    setTimeRangeErrMsg,
} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {useClearNotifDetailInput, useIsEditIconClicked, useStartTime} from "../../../../CustomHook/UseReduxData";

const StartTime = () => {
    const [StartTime, setStartTime] = React.useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const startTimeValue = useStartTime()
    const dispatch = useDispatch()

    useEffect(() => {
        if (startTimeValue !== null) {
            setStartTime(startTimeValue)
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setStartTime('')
            dispatch(setStartTimeValue(null))
        }
    }, [clearInput])

    return (
        <TimePicker
            value={StartTime || null}
            onChange={(newValue) => {
                setStartTime(newValue)
                dispatch(setStartTimeValue(Math.floor(new Date(newValue)?.getTime()).toString()))
                dispatch(setTimeRangeErrMsg(''))
            }}
            label={AppString.fromTime}
        />
    );
};

export default StartTime;
