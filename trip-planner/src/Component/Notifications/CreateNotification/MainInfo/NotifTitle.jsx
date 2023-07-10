import React, {useEffect, useRef, useState} from 'react';
import {AppString} from "../../../../Assets/String/AppString";
import {
    setNotifTitleValue,
    setNotifTitleErrMsg,
} from "../../../../Slices/Notification/notifSlice";
import {Grid} from "@mui/material";
import {
    useNotifTitleErrMsg,
    useSelectedServiceType,
    useIsEditIconClicked,
    useNotifTitle,
    useClearNotifDetailInput, useServiceType,
} from "../../../../CustomHook/UseReduxData";
import {useDispatch} from "react-redux";

const NotifTitle = () => {
    const [notifTitleMaxLength, setNotifTitleMaxLength] = useState('')
    const [titleHintText, setTitleHintText] = useState('')
    const clearInput = useClearNotifDetailInput()
    const serviceType = useSelectedServiceType()
    const isEditClicked = useIsEditIconClicked()
    const errMsg = useNotifTitleErrMsg()
    const title = useNotifTitle()
    const serviceTypes = useServiceType()
    const ref = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        getTitleHintText(serviceType)
    }, [serviceType])

    useEffect(() => {
        if (title !== null) {
            ref.current.value = title
        }
    }, [isEditClicked])

    useEffect(() => {
        if (clearInput) {
            ref.current.value = ''
            dispatch(setNotifTitleValue(null))
            setTitleHintText('')
        }
    }, [clearInput])

    function getTitleHintText(serviceType) {
        if (serviceTypes !== [] && serviceType !== '' && serviceType !== null) {
            switch (serviceType?.toString()) {
                case serviceTypes[1]?.key:
                    setTimeout(() => {
                        setTitleHintText(AppString.emailTitleHintText)
                    }, 10)
                    setNotifTitleMaxLength('100')
                    break;
                case serviceTypes[2]?.key:
                    setTimeout(() => {
                        setTitleHintText(AppString.notificationTitleHintText)
                    }, 10)
                    setNotifTitleMaxLength('30')
                    break;
                case serviceTypes[3]?.key:
                    setTimeout(() => {
                        setTitleHintText(AppString.internalNotificationTitleHintText)
                    }, 10)
                    setNotifTitleMaxLength('30')
                    break;
                default :
                    setTitleHintText('')
            }
        }
        return titleHintText
    }

    return (
        <div>
            <Grid container>
                <textarea
                    // onKeyUp={(e) => {
                    //     // if (/^[a-zA-Z]+$/.test(e?.target?.value)) {
                    //     //     console.log('english')
                    //     // } else {
                    //     //     console.log('persian')
                    //     // }
                    //     if (e?.target?.value < notifTitleMinLength){
                    //
                    //     }
                    // }}
                    maxLength={notifTitleMaxLength} className='notif-title-textarea' rows='1' wrap='off' ref={ref}
                    onBlur={() => {
                        dispatch(setNotifTitleValue(ref.current.value))
                        dispatch(setNotifTitleErrMsg(''))
                    }}
                />
                <p className='text' style={{marginLeft: '10px'}}>
                    {'*' + AppString.title}
                </p>
            </Grid>
            <Grid container direction='row-reverse'>
                <p className='notif-title-hint'>
                    {titleHintText}
                </p>
                <p className='notif-title-err-msg'>
                    {errMsg}
                </p>
            </Grid>
        </div>
    );
};

export default NotifTitle;
