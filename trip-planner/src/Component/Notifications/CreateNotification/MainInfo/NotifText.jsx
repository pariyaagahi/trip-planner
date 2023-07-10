import React, {useEffect, useRef, useState} from 'react';
import {Grid} from "@mui/material";
import {AppString} from "../../../../Assets/String/AppString";
//redux
import {
    setNotifTextValue,
    setNotifTextErrMsg,
} from "../../../../Slices/Notification/notifSlice";
import {
    useNotifTextErrMsg,
    useSelectedServiceType,
    useIsEditIconClicked,
    useNotifText,
    useClearNotifDetailInput, useServiceType
} from "../../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";

const NotifText = () => {
    const [notifTextMaxLength, setNotifTextMaxLength] = useState('')
    const [bodyHintText, setBodyHintText] = useState('')
    const clearInput = useClearNotifDetailInput()
    const isEditClicked = useIsEditIconClicked()
    const serviceType = useSelectedServiceType()
    const serviceTypes = useServiceType()
    const errMsg = useNotifTextErrMsg()
    const text = useNotifText()
    const ref = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (text !== null) {
            ref.current.value = text
        }
    }, [isEditClicked])

    useEffect(() => {
        getBodyHintText()
    }, [serviceType])

    useEffect(() => {
        if (clearInput) {
            ref.current.value = ''
            dispatch(setNotifTextValue(null))
            setBodyHintText('')
        }
    }, [clearInput])

    function getBodyHintText() {
        if (serviceTypes !== [] && serviceType !== '' && serviceType !== null) {
            switch (serviceType?.toString()) {
                case serviceTypes[0]?.key:
                    setBodyHintText(AppString.smsBodyHintText)
                    setNotifTextMaxLength('160')
                    break;
                case serviceTypes[1]?.key:
                    setBodyHintText(AppString.emailBodyHintText)
                    setNotifTextMaxLength('2000')
                    break;
                case serviceTypes[2]?.key:
                    setBodyHintText(AppString.notificationBodyHintText)
                    setNotifTextMaxLength('50')
                    break;
                case serviceTypes[3]?.key:
                    setBodyHintText(AppString.internalNotificationBodyHintText)
                    setNotifTextMaxLength('500')
                    break;
                default :
                    setBodyHintText('')
                    setNotifTextMaxLength('600')
            }
        }
        return bodyHintText
    }


    return (
        <>
            <Grid container direction='row-reverse' style={{marginBottom: '-15px', marginTop: '-20px'}}>
                <p className='notif-body-text'>
                    {"*" + AppString.text}
                </p>
                <p className='notif-text-hint'>
                    {bodyHintText}
                </p>
                <p className='notif-text-err-msg'>
                    {errMsg}
                </p>
            </Grid>
            <textarea
                maxLength={notifTextMaxLength} className='notif-text-textarea' ref={ref} onBlur={() => {
                dispatch(setNotifTextValue(ref.current.value))
                dispatch(setNotifTextErrMsg(''))
            }}
            />
        </>
    );
};

export default NotifText;
