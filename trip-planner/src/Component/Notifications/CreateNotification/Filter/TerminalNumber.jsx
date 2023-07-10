import React, {useEffect, useState} from 'react';
import {AppString} from "../../../../Assets/String/AppString";
import OutlinedInput from "../../../SharedComponent/OutlinedInput";
import {
    setTerminalNumberValue,
    setTerminalNumberErrMsg,
} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {
    useClearNotifDetailInput,
    useIsEditIconClicked, useTerminalNum,
    useTerminalNumberErrMsg
} from "../../../../CustomHook/UseReduxData";

const TerminalNumber = () => {
    const dispatch = useDispatch()
    const [TerminalNumber, setTerminalNumber] = useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const errMsg = useTerminalNumberErrMsg()
    const terminalNumber = useTerminalNum()

    useEffect(() => {
        if (terminalNumber !== null) {
            setTerminalNumber(terminalNumber)
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setTerminalNumber('')
            dispatch(setTerminalNumberValue(null))
        }
    }, [clearInput])

    return (
        <>
            <OutlinedInput
                label={AppString.terminalNumber}
                value={TerminalNumber}
                onInput={(e) => {
                    setTerminalNumber(e.target.value.slice(0, 8))
                }}
                onBlur={(e) => {
                    dispatch(setTerminalNumberValue(e.target.value || ''))
                    dispatch(setTerminalNumberErrMsg(''))
                }}
                onKeyDown={(e)=>{
                    if(e.key === "e" || e.key === "+") e.preventDefault();
                }}
                spaceBetweenLabelAndInputBox='3px'
            />
            <p className='terminal-number-err-msg'>
                {errMsg}
            </p>
        </>
    );
};

export default TerminalNumber;
