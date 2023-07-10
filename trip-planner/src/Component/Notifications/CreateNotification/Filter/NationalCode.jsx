import React, {useEffect, useState} from 'react';
import OutlinedInput from "../../../SharedComponent/OutlinedInput";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {
    setNationalCodeValue,
    setNationalCodeErrMsg,
} from "../../../../Slices/Notification/notifSlice";
import {useDispatch} from "react-redux";
import {
    useClearNotifDetailInput,
    useIsEditIconClicked,
    useNationalcode,
    useNationalCodeErrMsg
} from "../../../../CustomHook/UseReduxData";

const NationalCode = () => {
    const dispatch = useDispatch()
    const errMsg = useNationalCodeErrMsg()
    const [NationalCode, setNationalCode] = useState('')
    const clearInput = useClearNotifDetailInput()
    const nationalCodeValue = useNationalcode()
    const isEditClicked = useIsEditIconClicked()

    useEffect(() => {
        if (nationalCodeValue !== null) {
            setNationalCode(nationalCodeValue)
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            setNationalCode('')
            dispatch(setNationalCodeValue(null))
        }
    }, [clearInput])

    return (
        <div style={{marginRight: '10px', marginTop: '-10px'}}>
            <OutlinedInput
                label={AppString.nationalCode}
                value={NationalCode}
                onInput={(e) => {
                    setNationalCode(e.target.value.slice(0, 10))
                }}
                onBlur={(event) => {
                    dispatch(setNationalCodeValue(event.target.value || ''))
                    dispatch(setNationalCodeErrMsg(''))
                }}
                onKeyDown={(e) => {
                    if (e.key === "e" || e.key === "+") e.preventDefault();
                }}
                spaceBetweenLabelAndInputBox='30px'
            />
            <p className='national-code-err-msg'>
                {errMsg}
            </p>
        </div>
    );
};

export default NationalCode;
